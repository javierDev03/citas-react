package com.veterinaria.veterinaria_backend.controller;

import com.veterinaria.veterinaria_backend.models.Paciente;
import com.veterinaria.veterinaria_backend.service.PacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/pacientes")
public class PacienteController {

    @Autowired
    private PacienteService pacienteService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping
    public List<Paciente> getAllPacientes() {
        return pacienteService.getAllPacientes();
    }

    @PostMapping
    public Paciente savePaciente(@RequestBody Paciente paciente) {
        return pacienteService.savePaciente(paciente);
    }

    @GetMapping("/{id}")
    public Paciente getPacienteById(@PathVariable String id) {
        return pacienteService.getPacienteById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public Paciente updatePaciente(@PathVariable String id, @RequestBody Paciente paciente) {
        return pacienteService.updatePaciente(id, paciente);
    }

    @DeleteMapping("/{id}")
    public void deletePaciente(@PathVariable String id) {
        pacienteService.deletePaciente(id);
    }
}