//241.-Creamos y heredamos
package com.example.examenes.repositorios;

import com.example.examenes.modelo.Examen;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExamenRepository extends JpaRepository<Examen, Long> {

}
