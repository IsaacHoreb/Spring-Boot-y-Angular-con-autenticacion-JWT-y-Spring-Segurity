package com.example.examenes.entidades;

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
