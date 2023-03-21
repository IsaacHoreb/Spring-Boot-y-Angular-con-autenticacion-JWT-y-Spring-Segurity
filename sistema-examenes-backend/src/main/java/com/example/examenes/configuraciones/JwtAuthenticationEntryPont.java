package com.example.examenes.configuraciones;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

//Esta clase se encarga de manejar los errores
//86.- Implementamos
@Component
public class JwtAuthenticationEntryPont implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Usuario no Autorizado");
    }

    //87.-Creamos en la carpeta configuracion, una class MySecurityConfig
}
