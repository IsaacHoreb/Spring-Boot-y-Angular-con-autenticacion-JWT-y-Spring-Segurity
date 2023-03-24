import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  constructor(private snack: MatSnackBar) { }

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
  }

  //103.-Nos vamos al login.component.html... en el <form action="">

}
