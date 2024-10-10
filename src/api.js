const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación del Formulario
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
        setError(true);
        return;
    }

    setError(false);

    // Objeto de Paciente
    const objetoPaciente = {
        nombreMascota: nombre,
        propietario: {
            nombre: propietario,
            email: email
        },
        fechaAlta: fecha,
        sintomas: sintomas
    };

    try {
        if (paciente.id) {
            // Editando el registro
            const response = await fetch(`http://localhost:8080/api/pacientes/${paciente.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(objetoPaciente)
            });

            const data = await response.json();
            const pacientesActualizados = pacientes.map(pacienteState => 
                pacienteState.id === paciente.id ? data : pacienteState
            );
            setPacientes(pacientesActualizados);
            setPaciente({});
        } else {
            // Nuevo registro
            const response = await fetch('http://localhost:8080/api/pacientes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(objetoPaciente)
            });

            const data = await response.json();
            setPacientes([...pacientes, data]);
        }

        // Reiniciar el form
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');
    } catch (error) {
        console.log('Error:', error);
    }
};
