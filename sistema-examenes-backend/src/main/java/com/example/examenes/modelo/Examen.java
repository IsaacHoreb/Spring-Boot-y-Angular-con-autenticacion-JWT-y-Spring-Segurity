//223.-Creamos clase examen
package com.example.examenes.modelo;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

//226.- Ingresamo lo sig.
@Entity
@Table(name = "examenes")
public class Examen {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long examenId;

    private String titulo;
    private String descripcion;
    private String puntoMaxiomos;
    private String numerosDePreguntas;
    private boolean activo = false;

    //229.-Creamos las relacion
    @ManyToOne(fetch = FetchType.EAGER)
    private Categoria categoria;

    //232.-Ingreso lo sig.
    @OneToMany(mappedBy = "examen", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Pregunta> preguntas = new HashSet<>();

    //233.-Generar los GET AND SET
    public Long getExamenId() {
        return examenId;
    }

    public void setExamenId(Long examenId) {
        this.examenId = examenId;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getPuntoMaxiomos() {
        return puntoMaxiomos;
    }

    public void setPuntoMaxiomos(String puntoMaxiomos) {
        this.puntoMaxiomos = puntoMaxiomos;
    }

    public String getNumerosDePreguntas() {
        return numerosDePreguntas;
    }

    public void setNumerosDePreguntas(String numerosDePreguntas) {
        this.numerosDePreguntas = numerosDePreguntas;
    }

    public boolean isActivo() {
        return activo;
    }

    public void setActivo(boolean activo) {
        this.activo = activo;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public Set<Pregunta> getPreguntas() {
        return preguntas;
    }

    public void setPreguntas(Set<Pregunta> preguntas) {
        this.preguntas = preguntas;
    }

    //234.-Creamo los constructores
    public Examen() {

    }
}
