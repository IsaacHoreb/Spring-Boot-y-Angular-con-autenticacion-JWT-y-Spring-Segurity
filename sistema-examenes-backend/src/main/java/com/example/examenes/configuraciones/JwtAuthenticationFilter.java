package com.example.examenes.configuraciones;

import com.example.examenes.servicios.impl.UserDetailsServiceImpl;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

//76.-Registramo este FILTRO como un componente de Sprig
@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter { //HEREDAMOS

    @Autowired  //78
    private UserDetailsServiceImpl userDetailsService;
    //79.-Creamos en la carpeta configuraciones, la case JwtUtils

    //82. Esto es posible, si ya creamos la case, super indispensable
    @Autowired
    private JwtUtils jwtUtil;

    //77
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        //83.-
        String requestTokenHeader = request.getHeader("Authorization");
        String username = null;
        String jwtToken = null;

        if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {
            jwtToken = requestTokenHeader.substring(7);

            try {
                username = this.jwtUtil.extractUsername(jwtToken);
            } catch (ExpiredJwtException exception) {
                System.out.println("El token ha expirado");
            } catch (Exception e) {
                e.printStackTrace();
            }

        } else {
            System.out.println("Token invalido , no empieza con bearer string");
        }

        //84.-Si al Authentication no es valida
        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);
            if (this.jwtUtil.validateToken(jwtToken, userDetails)) { //Valida que el sean iguales y el token no expiró
                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
            }

        } else {
            System.out.println("El token no es valido");
        }

        filterChain.doFilter(request, response);    //Ejecutamos el filto, y le enviamos la peticion y respuesta

        //85.-Nos vamos a la carpeta configuracion, y creamos una clase JwtAuthenticationEntryPont
    }
}
