//11.-Creamos repository de Rol
package com.example.examenes.repositorios;

import com.example.examenes.modelo.Rol;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RolRepository extends JpaRepository<Rol, Long> {

}
