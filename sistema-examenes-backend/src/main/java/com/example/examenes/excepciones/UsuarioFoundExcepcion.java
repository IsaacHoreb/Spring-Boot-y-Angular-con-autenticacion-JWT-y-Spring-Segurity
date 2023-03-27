package com.example.examenes.excepciones;

//181.- Añade la extends Exception
public class UsuarioFoundExcepcion extends Exception {

    //182.- Implementamos el constructor, un mensaje por defecto
    public UsuarioFoundExcepcion() {
        super("El usuario con ese nombre de usuario ya existe en la base de datos , vuelva a intentar");
    }

    //183.- Implementamos el constructor, un mensaje personalizado
    public UsuarioFoundExcepcion(String mensaje) {
        super(mensaje);
    }
    //184.- Ir a UsuarioNotFoundExcepcion



}
