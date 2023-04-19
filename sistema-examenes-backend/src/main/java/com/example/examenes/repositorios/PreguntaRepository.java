//242.-Creamos y heredamos
package com.example.examenes.repositorios;

import com.example.examenes.modelo.Examen;
import com.example.examenes.modelo.Pregunta;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface PreguntaRepository extends JpaRepository<Pregunta, Long> {

    //243.-Creamo un conjunto
    //244.-Despues creamo en Servicios(ExamenService)
    Set<Pregunta> findByExamen(Examen examen);

}
