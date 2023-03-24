import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  constructor(private snack: MatSnackBar, private loginService: LoginService) { }

  //Se agrega al implementar
  ngOnInit(): void {

  }

  //102.-
  formSubmit() {
    //107.1-QUITAR
    //console.log("Click en el boton de login")
    //108.-Condicion agregando
    if (this.loginData.username == "" || this.loginData.username == null) {
      this.snack.open("El nombre de usuario es requerido", "Aceptar", {
        duration: 3000
      })
      return;
    }

    //109.-Codicion si falta el password y probamos la aplicación 
    if (this.loginData.password == "" || this.loginData.password == null) {
      this.snack.open("La constraseña es requerido", "Aceptar", {
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
          console.log(user);
        })
      }, (error) => {
        console.log(error);
      }
    )
  }

  //116.-Nos vamos al banckend, y comprobamos que todo funcione, al iniciar seccion y genere el token en consola
  //117.-Regresamos despues de prueba, y nos vamosal login.service.ts
  
  //110.-Vamos al cmd, generamos un servicio, en la carpeta raiz del frontend, en
  // src/app/services, generamos con ng g s login y nos vamos a la carpeta comprobando
  //que se genero el servicio. Y nos vamos al login.services.ts


  //103.-Nos vamos al login.component.html... en el <form action="">

}
