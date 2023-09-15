package com.example.lab5gtics.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "viajes")
@Getter
@Setter
public class Viajes {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idViajes;
    @Column(name = "punto_recojo", nullable = true)
    private String punto_recojo;
    @Column(name = "cant_personas", nullable = true)
    private String cant_personas;
    @Column(name = "cant_perros", nullable = true)
    private String cant_perros;
    @Column(name = "Persona_idPersona", nullable = true)
    private Integer Persona_idPersona;
    @Column(name = "Lugares_idLugares", nullable = true)
    private Integer Lugares_idLugares;


}
