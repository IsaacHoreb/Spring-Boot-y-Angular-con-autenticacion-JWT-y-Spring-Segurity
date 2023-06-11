import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { PreguntaService } from 'src/app/services/pregunta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-examen-preguntas',
  templateUrl: './view-examen-preguntas.component.html',
  styleUrls: ['./view-examen-preguntas.component.css']
})

//375.-Agregamos e implementamos
export class ViewExamenPreguntasComponent implements OnInit {

  examenId: any;
  titulo: any;
  //382.-Agregar
  preguntas: any = [];

  //383.-Inyectamos el preguntaService
  //420.2.- Añadimos el snack
  constructor(private route: ActivatedRoute, private preguntaService: PreguntaService, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.examenId = this.route.snapshot.params['examenId'];
    this.titulo = this.route.snapshot.params['titulo'];
    //console.log(this.examenId);
    //console.log(this.titulo);

    //384.-Agregamos para listar las preguntas
    //385.-Despues de ingresar, ir a view-examen-preguntas.component.html
    this.preguntaService.listarPreguntasDelExamen(this.examenId).subscribe(
      (data: any) => {
        console.log(data);
        this.preguntas = data;
      }, (error) => {
        console.log(error);
      }
    )
  }
  //376.-Ir al .html de este mismo documento

  //420.3.-Creamos el metodo que va en la mano del 420 en el .html
  eliminarPregunta(preguntaId: any) {
    Swal.fire({
      title: 'Eliminar pregunta',
      text: '¿Estás seguro , que quieres eliminar esta pregunta?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        this.preguntaService.eliminarPregunta(preguntaId).subscribe(
          (data) => {
            this.snack.open('Pregunta eliminada', '', {
              duration: 3000
            })
            this.preguntas = this.preguntas.filter((pregunta: any) => pregunta.preguntaId != preguntaId);
          }, (error) => {
            this.snack.open('Error al eliminar la pregunta', '', {
              duration: 3000
            })
            console.log(error);
          }
        )
      }
    })
  }
}
