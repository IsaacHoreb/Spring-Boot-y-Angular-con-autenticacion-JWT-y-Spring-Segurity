package com.example.examenes.controladores;

import com.example.examenes.modelo.Rol;
import com.example.examenes.modelo.Usuario;
import com.example.examenes.modelo.UsuarioRol;
import com.example.examenes.servicios.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

//19.-Creamos el controlador
@RestController //Esto es para API REST Y CONECTAR CON EL HttpClient en el Front-end
@RequestMapping("/usuarios")
@CrossOrigin("*")   //44.-Con el '*' Permito cualquier peticion(GET,POST,PUST,DELETE,ETC) vamos al 44.1 <--
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    //19.1-METODOS POST
    @PostMapping("/")
    public Usuario guardarUsuario(@RequestBody Usuario usuario) throws Exception {
        usuario.setPerfil("default.png");//44.1 - Agremamos una img por defecto y nos vamos al Frontend
        // en signup.componet.html o formulario mejor conocido
        //44.2 - >> RECORDAR : DEBEMOS AGREGAR EL HttpClientModule  A app.modules.ts para que cargue la pagina
        Set<UsuarioRol> usuarioRoles = new HashSet<>();

        //CREAMOS PARA LOS ROLES
        Rol rol = new Rol();
        rol.setRolId(2L);
        rol.setRolNombre("NORMAL");

        //Asignamos y creamos para el UsuarioRol
        UsuarioRol usuarioRol = new UsuarioRol();
        usuarioRol.setUsuario(usuario);
        usuarioRol.setRol(rol);

        usuarioRoles.add(usuarioRol);   //Añadir para los roles en la tablas
        return usuarioService.guardarUsuario(usuario, usuarioRoles);
    }

    //19.2-METODO GET
    @GetMapping("/{username}")
    public Usuario obtenerUsuario(@PathVariable("username") String username) {
        return usuarioService.obtenerUsuario(username);
    }

    //19.3-METODO DELETE
    @DeleteMapping("/{usuarioId}")
    public void eliminarUsuario(@PathVariable("usuarioId") Long usuarioId) {
        usuarioService.eliminarUsuario(usuarioId);
    }

    //20.- DESPUES NOS VAMOS A POSTMAN, HACER PRUEBAS UNITARIAS <------

}
