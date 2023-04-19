//248.-Creamo el servicio
//250.- Creamos la implementacion (PreguntaServiceImpl)
package com.example.examenes.servicios;

import com.example.examenes.modelo.Examen;
import com.example.examenes.modelo.Pregunta;

import java.util.Set;

//Creamo los metodos
public interface PreguntaService {

    Pregunta agregarPregunta(Pregunta pregunta);

    Pregunta actualizarPregunta(Pregunta pregunta);

    Set<Pregunta> obtenerPregunta();

    Pregunta obtenerPregunta(Long preguntaId);

    Set<Pregunta> obtenerPreguntaDelExamen(Examen examen);

    void eliminarPregunta(Long preguntaId);

}
