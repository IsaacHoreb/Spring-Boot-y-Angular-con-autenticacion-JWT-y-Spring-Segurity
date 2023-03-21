package com.example.examenes.entidades;
//72.-Creamos lo sig
//73.-Creamos en Sevices/impl, un Class con nombre UserDatailsServiceImpl
public class JWTResponse {

    private String token;

    //Creamos constructores y el vacio
    public JWTResponse(String token) {
        this.token = token;
    }

    public JWTResponse(){

    }

    //GETTER AND SETTER
    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
