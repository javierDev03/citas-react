package com.veterinaria.veterinaria_backend.service;

import com.veterinaria.veterinaria_backend.models.Paciente;
import com.veterinaria.veterinaria_backend.repository.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PacienteService {

    @Autowired
    private PacienteRepository pacienteRepository;

    public List<Paciente> getAllPacientes() {
        return pacienteRepository.findAll();
    }

    public Paciente savePaciente(Paciente paciente) {
        return pacienteRepository.save(paciente);
    }

    public Optional<Paciente> getPacienteById(String id) {
        return pacienteRepository.findById(id);
    }

    public Paciente updatePaciente(String id, Paciente paciente) {
        paciente.setId(id); 
        return pacienteRepository.save(paciente);
    }

    public void deletePaciente(String id) {
        pacienteRepository.deleteById(id);
    }
}
