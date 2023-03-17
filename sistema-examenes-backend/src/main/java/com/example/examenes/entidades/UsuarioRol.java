//3.-Creamos tablas
package com.example.examenes.entidades;

import javax.persistence.*;

@Entity
public class UsuarioRol {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long usuarioRolId;

    //4.-Para las relaciones
    @ManyToOne(fetch = FetchType.EAGER)
    private Usuario usuario;

    //4.1-Para las relaciones
    @ManyToOne
    private Rol rol;

    //9.-GET Y SET GENERAR
    //9.1 CONSTRUCTOR VACIO ABAJO
    public Long getUsuarioRolId() {
        return usuarioRolId;
    }

    public void setUsuarioRolId(Long usuarioRolId) {
        this.usuarioRolId = usuarioRolId;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Rol getRol() {
        return rol;
    }

    public void setRol(Rol rol) {
        this.rol = rol;
    }

    //9.2 CONSTRUCTOR VACIO
    public UsuarioRol(){

    }

}
