package com.example.examenes.modelo;

//ESTO ES DE JWT EN LA PETICIO FALTA EL DE RESPONDER
// Creamos el JWTResponse --> 71

//70.-Creamos_los_sig.
public class JwtRequest {

    private String username;
    private String password;

    //Constructor
    public JwtRequest() {

    }

    //Constructor vacio
    public JwtRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }

    //GETTER AND SETTER
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
