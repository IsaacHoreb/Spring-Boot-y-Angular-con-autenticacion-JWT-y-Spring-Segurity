import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.examenId = this.route.snapshot.params['examenId'];
    //404.-Agregamos para el titulo
    this.titulo = this.route.snapshot.params['titulo'];
    this.pregunta.examen['examenId'] = this.examenId;
  }
  //405.-Ir al add-pregunta.component.html
  //397.-Ir al .html de este misma carpeta

}