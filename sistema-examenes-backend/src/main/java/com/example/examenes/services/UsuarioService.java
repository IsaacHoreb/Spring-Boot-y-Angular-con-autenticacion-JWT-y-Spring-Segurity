//12.-Creamos el servicio de Usuario
package com.example.examenes.services;

import com.example.examenes.entidades.Usuario;
import com.example.examenes.entidades.UsuarioRol;

import java.util.Set;

public interface UsuarioService {

    public Usuario guardarUsuario(Usuario usuario, Set<UsuarioRol> usuariosRoles) throws Exception;

    //18.- CREAMOS LOS METODO PARA CREAR UN USUARIO Y ELIMINARLO
    public Usuario obtenerUsuario(String username);
    public void eliminarUsuario(Long usuarioId);



}
