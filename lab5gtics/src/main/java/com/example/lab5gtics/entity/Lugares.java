package com.example.lab5gtics.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "lugares")
@Getter
@Setter
public class Lugares {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idLugares;
    @Column(name = "nombre_lugar", nullable = true)
    private String nombre_lugar;
    @Column(name = "descrip_lugar", nullable = true)
    private String descrip_lugar;
    @Column(name = "fecha_lugar", nullable = true)
    private LocalDate fecha_lugar;

}
