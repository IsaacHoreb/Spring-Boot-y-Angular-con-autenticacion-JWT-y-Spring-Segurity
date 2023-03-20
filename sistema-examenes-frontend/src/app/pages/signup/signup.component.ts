import { Component, OnInit } from '@angular/core'; //42.1-Esto se import
import { MatSnackBar } from '@angular/material/snack-bar';
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
  //46.- Inyectamos el Snack: MatSnackBar
  constructor(private userService: UserService, private snack: MatSnackBar) { }

  //42.3-Agregando condicional
  formSubmit() {
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      //47.- Para mostrar la ventana
      this.snack.open("¡¡El nombre de usuario es requerido!!", "Aceptar", {
        duration: 3000,
        verticalPosition: "top",
        horizontalPosition: "right"
      });
      //45.2-[Quitamos]->alert('El nombre de usuario es requerida');
      return;
    }

    //42.4-Agregado
    this.userService.anadirUsuario(this.user).subscribe(
      (data) => {
        console.log(data);
        alert('¡Usuario guardado con exito!')
      }, (error) => {
        console.log(error);
        //47.1-[Quitamos]->alert('Ha ocurrido un error en el sistema');
        //48.- Para mostrar la ventana en caso de error
        this.snack.open("¡¡Ha ocurrido un error en el sistema!!", "Aceptar", {
          duration: 3000
        });
        
      }

    )

  }

  //43.-Nos vamos al Bank-end en UsuarioController, para agregar
  //el CROS y permitir hacer el intercambio de informacion


}
