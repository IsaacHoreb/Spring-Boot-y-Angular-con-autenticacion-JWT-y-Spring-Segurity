//240.-Creamos y heredamos lo de JpaRepository
package com.example.examenes.repositorios;

import com.example.examenes.modelo.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {

}
