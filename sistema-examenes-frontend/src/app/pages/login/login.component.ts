import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

//99. Agreamos e implementamos todo lo sig.
export class LoginComponent implements OnInit {
  
  //100.-
  loginData = {
    "username" : "",
    "password" : ""
  }

  //101.-
  constructor() {}

  //Se agrega al implementar
  ngOnInit(): void {
   
  }

  //102.-
  formSubmit(){
    console.log("Click en el boton de login")
  }

  //103.-Nos vamos al login.component.html... en el <form action="">

}
