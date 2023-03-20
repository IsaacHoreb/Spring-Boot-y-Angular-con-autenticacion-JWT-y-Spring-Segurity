package com.example.examenes.entidades;

import org.springframework.security.core.GrantedAuthority;

//67.1- Implemenetamos el el GrantedAuthority
//Esto es para tener autoridad
public class Authority implements GrantedAuthority {

    private String authority; //Creamos

    public Authority(String authority) { //Agregamos constructor
        this.authority = authority;
    }

    @Override
    public String getAuthority() { //return del mismo authority
        return this.authority;
    }
    //68.- nos vamos a clase Usuario al punto 67
}
