package com.example.lab5gtics.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "persona")
@Getter
@Setter
public class Persona {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idPersona;
    @Column(name = "nombre", nullable = true)
    private String nombre;
    @Column(name = "dni", nullable = true)
    private String dni;
    @Column(name = "celular", nullable = true)
    private String celular;
    @Column(name = "tipo_persona", nullable = true)
    private LocalDate tipo_persona;


}
