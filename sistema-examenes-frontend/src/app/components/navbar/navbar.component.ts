import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
//155.- Constructor e implementacion OnInit
export class NavbarComponent implements OnInit {

  //155.1- Inyectamos dependencia
  //159.- Cambiamos de loginService a login 
  constructor(public login: LoginService) { }

  ngOnInit(): void {

  }

  //156.- Agregamos metodo de cerrar Seccion
  public logout() {
    this.login.logout();
    window.location.reload();
  }
  //157.- Hacemos cambios en navbar.component.html

}
