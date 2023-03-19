import { Component, OnInit } from '@angular/core'; //42.1-Esto se import
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
//42.- AGREGANDO la implementacion OnInit
export class SignupComponent implements OnInit {

  //42.1-Agrego metodo
  public user = {
    username: '',
    password: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: ''
  }

  ngOnInit(): void {

  }

  //42.2-Importante agregar constructor
  //y lo de UserService
  constructor(private userService: UserService) { }

  //42.3-Agregando condicional
  formSubmit() {
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      alert('El nombre de usuario es requerida');
      return;
    }

    //42.4-Agregado
    this.userService.anadirUsuario(this.user).subscribe(
      (data) => {
        console.log(data);
        alert('¡Usuario guardado con exito!')
      }, (error) => {
        console.log(error);
        alert('Ha ocurrido un error en el sistema');
      }

    )

  }

  //43.-Nos vamos al Bank-end en UsuarioController, para agregar
  //el CROS y permitir hacer el intercambio de informacion


}
