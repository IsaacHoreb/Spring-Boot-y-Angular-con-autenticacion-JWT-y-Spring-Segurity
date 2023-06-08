import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

//99. Agreamos e implementamos todo lo sig.
export class LoginComponent implements OnInit {

  //100.-
  loginData = {
    "username": "",
    "password": ""
  }

  //101.-Creamos
  //107.-Ingresamos
  //114.-Inyectamos el servicio creado, el loginService
  //164.1-Agregando el router
  constructor(private snack: MatSnackBar, private loginService: LoginService, private router: Router) { }

  //Se agrega al implementar
  ngOnInit(): void {

  }

  //102.-
  formSubmit() {
    //107.1-QUITAR
    //console.log("Click en el boton de login")
    //108.-Condicion agregando
    if (this.loginData.username.trim() == "" || this.loginData.username.trim() == null) {
      this.snack.open("El nombre de usuario es requerido !!", "Aceptar", {
        duration: 3000
      })
      return;
    }

    //109.-Codicion si falta el password y probamos la aplicación 
    if (this.loginData.password.trim() == "" || this.loginData.password.trim() == null) {
      this.snack.open("La constraseña es requerido !!", "Aceptar", {
        duration: 3000
      })
      return;
    }

    //115.- 
    this.loginService.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log(data);
        //127.- Ingresamos los sig
        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe((user: any) => {

          this.loginService.setUser(user);//141.-Agregar el login.service
          console.log(user); //127.1

          //142.-Condicion del ROL
          if (this.loginService.getUserRole() == 'ADMIN') {
            //dashboard admin
            //window.location.href = '/admin';
            this.router.navigate(['admin']); //164.-Agregamos y comentamos el window#####
            this.loginService.loginStatusSubjec.next(true); //170.-Añadir
          } else if (this.loginService.getUserRole() == 'NORMAL') {
            //user dashboard
            //window.location.href = '/user-dashboard';
            this.router.navigate(['user-dashboard']); //165.-Agregamos y comentamos el window#####
            this.loginService.loginStatusSubjec.next(true); //171.-Añadir y probamos funcion
            //172.-Nos vamos al BACK-END en MySecurityConfig paso 90
            //166.-Provamos la aplicacion en el navegador
            //167.- Ir al login.service.ts
          } else {
            //CASO QUE NO SEA NINGUNO
            this.loginService.logout();
          }
        })
      }, (error) => {
        console.log(error);
        //143.-AGREAMOS POR SI EXISTE ERRORES
        this.snack.open("Detalles inválidos , vuelva a intentar", "Aceptar", {
          duration: 3000
          //144.-Checamos que funciones 
          /*
            145.-Ir al CMD, movernos a app/services y creamos los guard.
              1.- ng g guard admin --> CanActivate
              2.- ng g guard normal --> CanActivate
            146.- NOS VAMOS A : admin.guard.ts
          */
        })
      }
    )
  }
}
  //116.-Nos vamos al banckend, y comprobamos que todo funcione, al iniciar seccion y genere el token en consola
  //117.-Regresamos despues de prueba, y nos vamosal login.service.ts

  //110.-Vamos al cmd, generamos un servicio, en la carpeta raiz del frontend, en
  // src/app/services, generamos con ng g s login y nos vamos a la carpeta comprobando
  //que se genero el servicio. Y nos vamos al login.services.ts

  //103.-Nos vamos al login.component.html... en el <form action="">
