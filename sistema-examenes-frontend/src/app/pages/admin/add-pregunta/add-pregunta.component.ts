import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { PreguntaService } from 'src/app/services/pregunta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-pregunta',
  templateUrl: './add-pregunta.component.html',
  styleUrls: ['./add-pregunta.component.css']
})

//396.-Agregamos e implementamos
export class AddPreguntaComponent implements OnInit {

  examenId: any;

  //403.- Agregamos el titulo
  titulo: any;

  pregunta: any = {
    examen: {},
    contenido: '',
    opcion1: '',
    opcion2: '',
    opcion3: '',
    opcion4: '',
    respuesta: ''
  }

  //413.-Editamo y añadimos el servicio(preguntaService) en el constructor
  constructor(private route: ActivatedRoute, private preguntaService: PreguntaService) { }

  ngOnInit(): void {
    this.examenId = this.route.snapshot.params['examenId'];
    //404.-Agregamos para el titulo
    this.titulo = this.route.snapshot.params['titulo'];
    this.pregunta.examen['examenId'] = this.examenId;
  }
  //405.-Ir al add-pregunta.component.html
  //397.-Ir al .html de este misma carpeta

  //414.-Agregamos un metodo para validar
  formSubmit() {
    if (this.pregunta.contenido.trim() == '' || this.pregunta.contenido == null) {
      return;
    }

    if (this.pregunta.opcion1.trim() == '' || this.pregunta.opcion1 == null) {
      return;
    }

    if (this.pregunta.opcion2.trim() == '' || this.pregunta.opcion2 == null) {
      return;
    }

    if (this.pregunta.opcion3.trim() == '' || this.pregunta.opcion3 == null) {
      return;
    }

    if (this.pregunta.opcion4.trim() == '' || this.pregunta.opcion4 == null) {
      return;
    }

    if (this.pregunta.respuesta.trim() == '' || this.pregunta.respuesta == null) {
      return;
    }

    //Sino estan vacio los campo, procura a guardar las preguntas en la BD
    this.preguntaService.guardarPregunta(this.pregunta).subscribe(
      (data) => {
        Swal.fire('Pregunta Guardada', 'La pregunta ha sido guarda con éxito en la BD', 'success');
        //Agregamos para despues de guardar, poner los campo limpios
        this.pregunta.contenido = '';
        this.pregunta.opcion1 = '';
        this.pregunta.opcion2 = '';
        this.pregunta.opcion3 = '';
        this.pregunta.opcion4 = '';
        this.pregunta.respuesta = '';
      }, (error) => {
        Swal.fire('Error', 'Error al guardar la pregunta en la BD', 'error');
        console.log(error);
      }
    )
    //415.-Ir al .html de esta carpeta para modificar el metodo form
  }

}

