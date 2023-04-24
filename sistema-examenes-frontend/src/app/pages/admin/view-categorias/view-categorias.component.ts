import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-categorias',
  templateUrl: './view-categorias.component.html',
  styleUrls: ['./view-categorias.component.css']
})

//268.-Agregamos e implementamos
export class ViewCategoriasComponent implements OnInit {

  categorias = [
    {
      categoriaId: 1,
      titulo: 'Lenguajes de Programación',
      descripcion: 'Esta es categoria prueba'
    },
    {
      categoriaId: 1,
      titulo: 'Lenguajes de Programación',
      descripcion: 'Esta es categoria prueba'
    },
    {
      categoriaId: 1,
      titulo: 'Lenguajes de Programación',
      descripcion: 'Esta es categoria prueba'
    },
    {
      categoriaId: 1,
      titulo: 'Lenguajes de Programación',
      descripcion: 'Esta es categoria prueba'
    }
  ]
  //269.-Despues de agrgar la categoriasId, vamos al .html de esta carpeta

  constructor() { }

  ngOnInit(): void {

  }

}
