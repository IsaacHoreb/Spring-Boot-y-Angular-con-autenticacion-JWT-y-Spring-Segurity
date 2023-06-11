import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PreguntaService } from 'src/app/services/pregunta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-pregunta',
  templateUrl: './actualizar-pregunta.component.html',
  styleUrls: ['./actualizar-pregunta.component.css']
})

//427.-Añadimos la implement y los demas
export class ActualizarPreguntaComponent implements OnInit {

  //428-Añadimos las variables
  preguntaId: any = 0;
  pregunta: any;
  examen: any;

  //429.-Añadir al constructor
  constructor(
    private route: ActivatedRoute,
    private preguntaService: PreguntaService,
    private router: Router
  ) { }

  //430.-Añadimos lo sig. para obtener la pregunta
  ngOnInit(): void {
    this.preguntaId = this.route.snapshot.params['preguntaId'];
    this.preguntaService.obtenerPregunta(this.preguntaId).subscribe(
      (data: any) => {
        this.pregunta = data;
        console.log(this.pregunta);
      }, (error) => {
        console.log(error);
      }
    )
  }

  //431.-Actualizar los datos de la pregunta
  public actualizarDatosDeLaPregunta() {
    this.preguntaService.actualizarPregunta(this.pregunta).subscribe(
      (data) => {
        Swal.fire('Pregunta Actualizada', 'La pregunta ha sido actualizada con éxito', 'success').then((e) => {
          this.router.navigate(['/admin/ver-preguntas/' + this.pregunta.examen.examenId + '/' + this.pregunta.examen.titulo]);
        })
      }
    )
  }

  //432.-Ir a view-examen-preguntas.component.html
}
