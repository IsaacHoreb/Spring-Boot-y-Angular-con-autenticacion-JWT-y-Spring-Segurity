//245.- Creamo y hacemo lo sig.
package com.example.examenes.servicios;

import com.example.examenes.modelo.Examen;

import java.util.Set;

//Creamos lo servicios
//246.- Creamo la implementacio en impl(ExamenServiceImpl)
public interface ExamenService {

    Examen agregarExamen(Examen examen);

    Examen actualizarExamen(Examen examen);

    Set<Examen> obtenerExamenes();

    Examen obtenerExamen(Long examenId);

    void eliminarExamen(Long examenId);

}
