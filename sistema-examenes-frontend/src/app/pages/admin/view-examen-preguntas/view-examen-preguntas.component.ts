import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PreguntaService } from 'src/app/services/pregunta.service';

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
  constructor(private route: ActivatedRoute, private preguntaService: PreguntaService) { }

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

}
