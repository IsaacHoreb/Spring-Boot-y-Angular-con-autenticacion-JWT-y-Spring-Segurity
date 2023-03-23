//10.-Creamos repository de usurios
package com.example.examenes.repositorios;

import com.example.examenes.modelo.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario,Long> {

    public Usuario findByUsername(String username);

}
