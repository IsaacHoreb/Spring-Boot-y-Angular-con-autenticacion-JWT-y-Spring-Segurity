package com.example.examenes.modelo;

//72.-Creamos lo sig
//73.-Creamos en Sevices/impl, un Class con nombre UserDatailsServiceImpl
public class JwtResponse {

    private String token;

    //Creamos constructores y el vacio
    public JwtResponse(String token) {
        this.token = token;
    }

    public JwtResponse() {
    }

    //GETTER AND SETTER
    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
