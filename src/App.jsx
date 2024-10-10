import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';
import Header from './components/Header';

function App() {
    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente] = useState({});

    useEffect(() => {
        const fetchPacientes = async () => {
            const response = await fetch('http://localhost:8080/api/pacientes');
            const resultado = await response.json();
            setPacientes(resultado);
        };
        fetchPacientes();
    }, []);

    const eliminarPaciente = (id) => {
        const pacientesActualizados = pacientes.filter((paciente) => paciente.id !== id);
        setPacientes(pacientesActualizados);
    };

    return (
        <div className="container mx-auto mt-16">
             <Header/>
            <div className="md:flex">
                <Formulario
                    pacientes={pacientes}
                    setPacientes={setPacientes}
                    paciente={paciente}
                    setPaciente={setPaciente}
                />
                <ListadoPacientes
                    pacientes={pacientes}
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                />
            </div>
        </div>
    );
}

export default App;
