package com.example.examenes.services.impl;

import com.example.examenes.entidades.Usuario;
import com.example.examenes.repositorios.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

//74.-Implementamos lo siguiente
public class UserDetailsServiceImpl implements UserDetailsService { //Sirve para cargar un User
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Usuario usuario = this.usuarioRepository.findByUsername(username);
        if(usuario == null){ //Si no existe el usuario
            throw new UsernameNotFoundException("Usuario no encontrado");
        }
        return usuario;
    }

    //75.-Creamos paquete como configuracion, y una clase JwtAuthenticationFilter


}