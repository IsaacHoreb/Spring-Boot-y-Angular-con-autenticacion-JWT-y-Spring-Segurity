import { Component, OnInit } from '@angular/core'; //42.1-Esto se import
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'; //50.1- Importado


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
        //49.1. [Quitamos]-> alert('¡Usuario guardado con exito!')
        //50.- Agremago e importamos el Swal. Nos vamos al signup.component.html
        Swal.fire('Usuario guardado', 'Usuario registrado con exito en la Base de datos', 'success')
        //51.- Ir a CMD y generar el componente en la carpeta pages, para un login,  
        //con el comando ng g c home... Despues nos vamos al app-routing.module.ts
      }, (error) => {
        console.log(error);
        //47.1-[Quitamos]->alert('Ha ocurrido un error en el sistema');
        //48.- Para mostrar la ventana en caso de error
        this.snack.open("¡¡Ha ocurrido un error en el sistema!!", "Aceptar", {
          duration: 3000
        });

        //49.- Ir a CMD y poner el comando npm install sweetalert2 para la ventana

      }

    )

  }

  //43.-Nos vamos al Bank-end en UsuarioController, para agregar
  //el CROS y permitir hacer el intercambio de informacion


}
