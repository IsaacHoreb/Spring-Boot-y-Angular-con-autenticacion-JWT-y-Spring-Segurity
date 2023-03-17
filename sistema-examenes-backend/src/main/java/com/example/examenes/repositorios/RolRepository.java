//11.-Creamos repository de Rol
package com.example.examenes.repositorios;

import com.example.examenes.entidades.Rol;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RolRepository extends JpaRepository<Rol,Long> {

}
