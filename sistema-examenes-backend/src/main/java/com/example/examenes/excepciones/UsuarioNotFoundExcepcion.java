package com.example.examenes.excepciones;

public class UsuarioNotFoundExcepcion extends Exception {

    //185.- Implementamos el constructor, un mensaje por defecto
    public UsuarioNotFoundExcepcion() {
        super("El usuario con ese nombre de usuario no existe en la base de datos , vuelva a intentar");
    }

    //186.- Implementamos el constructor, un mensaje personalizado
    public UsuarioNotFoundExcepcion(String mensaje) {
        super(mensaje);
    }

    //187.- Ir al AuthenticationController al paso 95

}
