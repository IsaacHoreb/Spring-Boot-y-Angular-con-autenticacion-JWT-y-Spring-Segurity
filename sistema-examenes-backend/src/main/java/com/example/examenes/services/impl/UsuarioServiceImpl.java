//13.-Agregamos los servicios
package com.example.examenes.services.impl;

import com.example.examenes.entidades.Usuario;
import com.example.examenes.entidades.UsuarioRol;
import com.example.examenes.repositorios.RolRepository;
import com.example.examenes.repositorios.UsuarioRepository;
import com.example.examenes.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

//14.- Implementamos el UsuarioService
@Service
public class UsuarioServiceImpl implements UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private RolRepository rolRepository;

    //14.-Es para agregar un nuevo usuario
    @Override
    public Usuario guardarUsuario(Usuario usuario, Set<UsuarioRol> usuariosRoles) throws Exception {

        Usuario usuarioLocal = usuarioRepository.findByUsername(usuario.getUsername());

        if (usuarioLocal != null){
            System.out.println("El usuario ya existe");
            throw new Exception("¡El usuario ya está presente!");
        }else { //en caso que no exista el usuario

            for (UsuarioRol usuarioRol : usuariosRoles) { //recorro y obtengo el usuario
                rolRepository.save(usuarioRol.getRol());  //guardo
            }

            usuario.getUsuarioRoles().addAll(usuariosRoles); //Obtener y agregar
            usuarioLocal = usuarioRepository.save(usuario);
        }

        return usuarioLocal;

    }

    //18.-Se agreda ya cuando implementamos
    @Override
    public Usuario obtenerUsuario(String username) {
        return usuarioRepository.findByUsername(username);
    }

    @Override
    public void eliminarUsuario(Long usuarioId) {
        usuarioRepository.deleteById(usuarioId);
    }
}
