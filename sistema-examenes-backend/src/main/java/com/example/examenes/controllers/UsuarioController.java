package com.example.examenes.controllers;

import com.example.examenes.entidades.Rol;
import com.example.examenes.entidades.Usuario;
import com.example.examenes.entidades.UsuarioRol;
import com.example.examenes.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

//19.-Creamos el controlador
@RestController //Esto es para API REST Y CONECTAR CON EL HttpClient en el Front-end
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    //19.1-METODOS POST
    @PostMapping("/")
    public Usuario guardarUsuario(@RequestBody Usuario usuario) throws Exception{
        Set<UsuarioRol> roles = new HashSet<>();

        //CREAMOS PARA LOS ROLES
        Rol rol = new Rol();
        rol.setRolId(2L);
        rol.setNombre("NORMAL");

        //Asignamos y creamos para el UsuarioRol
        UsuarioRol usuarioRol = new UsuarioRol();
        usuarioRol.setUsuario(usuario);
        usuarioRol.setRol(rol);

        return usuarioService.guardarUsuario(usuario,roles);
    }

    //19.2-METODO GET
    @GetMapping("/{username}")
    public Usuario obtenerUsuario(@PathVariable("username") String username) throws Exception{
        return usuarioService.obtenerUsuario(username);
    }

    //19.3-METODO DELETE
    @DeleteMapping("/{usuarioId}")
    public void eliminarUsuario(@PathVariable("usuarioId") Long usuarioId) throws Exception {
        usuarioService.eliminarUsuario(usuarioId);
    }

    //20.- DESPUES NOS VAMOS A POSTMAN, HACER PRUEBAS UNITARIAS <------


}
