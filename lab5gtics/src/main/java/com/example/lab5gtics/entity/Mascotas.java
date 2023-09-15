package com.example.lab5gtics.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name = "mascotas")
@Getter
@Setter
public class Mascotas {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idMascotas;
    @Column(name = "nombre_mascota", nullable = true)
    private String nombre_mascota;
    @Column(name = "genero", nullable = true)
    private String genero;
    @Column(name = "edad", nullable = true)
    private String edad;
    @Column(name = "fecha_nacimiento", nullable = true)
    private LocalDate fecha_nacimiento;
    @Column(name = "Vacunado", nullable = true)
    private String Vacunado;
    @Column(name = "Desparasitado", nullable = true)
    private String Desparasitado;
    @Column(name = "ban", nullable = true)
    private Integer Persona_idPersona;


}




