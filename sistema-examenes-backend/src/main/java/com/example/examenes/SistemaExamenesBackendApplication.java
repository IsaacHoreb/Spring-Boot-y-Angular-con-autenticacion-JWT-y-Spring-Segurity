package com.example.examenes;

import com.example.examenes.entidades.Rol;
import com.example.examenes.entidades.Usuario;
import com.example.examenes.entidades.UsuarioRol;
import com.example.examenes.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.HashSet;
import java.util.Set;

//16.-Implementamos el CommandLineRunner
@SpringBootApplication
public class SistemaExamenesBackendApplication implements CommandLineRunner {

	//15.- Para inyectar automaticamente
	@Autowired
	private UsuarioService usuarioService;

	public static void main(String[] args) {
		SpringApplication.run(SistemaExamenesBackendApplication.class, args);
	}

	//17.-Para checar
	@Override
	public void run(String... args) throws Exception {
/*

		//Agregar a usuario
		Usuario usuario = new Usuario();
		usuario.setNombre("Isaac Horeb");
		usuario.setApellido("Gonzalez Gamas");
		usuario.setUsername("isaac");
		usuario.setPassword("1234");
		usuario.setEmail("isaac12@gmail.com");
		usuario.setTelefono("9991231234");
		usuario.setPerfil("foto.png");

		//Agregar a Rol
		Rol rol = new Rol();
		rol.setRolId(1L);
		rol.setNombre("ADMIN");

		//Relacionamos el USUARIO y el ROL
		Set<UsuarioRol> usuarioRoles = new HashSet<>();
		UsuarioRol usuarioRol = new UsuarioRol();
		usuarioRol.setRol(rol);
		usuarioRol.setUsuario(usuario);
		usuarioRoles.add(usuarioRol);

		//Gaurdamoes los usuarios
		Usuario usuarioGuardado = usuarioService.guardarUsuario(usuario,usuarioRoles);

		//Mostramo en consola el nombre de usuario
		System.out.println(usuarioGuardado.getUsername());

*/

	}
}
