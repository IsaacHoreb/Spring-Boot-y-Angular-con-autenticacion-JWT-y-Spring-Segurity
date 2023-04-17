//13.-Agregamos los servicios
package com.example.examenes.servicios.impl;

import com.example.examenes.excepciones.UsuarioFoundExcepcion;
import com.example.examenes.modelo.Usuario;
import com.example.examenes.modelo.UsuarioRol;
import com.example.examenes.repositorios.RolRepository;
import com.example.examenes.repositorios.UsuarioRepository;
import com.example.examenes.servicios.UsuarioService;
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
    public Usuario guardarUsuario(Usuario usuario, Set<UsuarioRol> usuarioRoles) throws Exception {
        Usuario usuarioLocal = usuarioRepository.findByUsername(usuario.getUsername());
        if (usuarioLocal != null) {
            System.out.println("El usuario ya existe");
            //190.- Cabiamos el Exception a UsuarioFoundExcepcion
            throw new UsuarioFoundExcepcion("El usuario ya esta presente");
        } else {    //en caso que no exista el usuario
            for (UsuarioRol usuarioRol : usuarioRoles) { //recorro y obtengo el usuario
                rolRepository.save(usuarioRol.getRol()); //guardo
            }
            usuario.getUsuarioRoles().addAll(usuarioRoles); //Obtener y agregar
            usuarioLocal = usuarioRepository.save(usuario);
        }
        return usuarioLocal;
    }

    //191.-Probamos que funcione bien_todo
    //192.-DESPUES IR AL FRONTEND Y METERSE AL CMD Y BUSCAMOS LA RUTA DE pages y creamo lo siguiente:
    //ng g c profile
    //193.-Ir a la carpeta profile (recien creada)

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