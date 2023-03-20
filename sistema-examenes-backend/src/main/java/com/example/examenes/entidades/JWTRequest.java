package com.example.examenes.entidades;
//ESTO ES DE JWT EN LA PETICIO FALTA EL DE RESPONDER
// Creamos el JWTResponse --> 71

//70.-Creamos_los_sig.
public class JWTRequest {

    private String username;
    private String password;

    //Constructor
    public JWTRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }

    //Constructor vacio
    public JWTRequest() {

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
