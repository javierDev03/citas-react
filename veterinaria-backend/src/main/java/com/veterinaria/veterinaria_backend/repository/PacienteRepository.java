package com.veterinaria.veterinaria_backend.repository;

import com.veterinaria.veterinaria_backend.models.Paciente;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PacienteRepository extends MongoRepository<Paciente, String> {}    