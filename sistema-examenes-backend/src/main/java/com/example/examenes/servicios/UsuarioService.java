//12.-Creamos el servicio de Usuario
package com.example.examenes.servicios;

import com.example.examenes.modelo.Usuario;
import com.example.examenes.modelo.UsuarioRol;

import java.util.Set;

public interface UsuarioService {

    public Usuario guardarUsuario(Usuario usuario, Set<UsuarioRol> usuarioRoles) throws Exception;

    //18.- CREAMOS LOS METODO PARA CREAR UN USUARIO Y ELIMINARLO
    public Usuario obtenerUsuario(String username);

    public void eliminarUsuario(Long usuarioId);
}
