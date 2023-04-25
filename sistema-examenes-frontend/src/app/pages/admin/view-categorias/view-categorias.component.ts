import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categorias',
  templateUrl: './view-categorias.component.html',
  styleUrls: ['./view-categorias.component.css']
})

//268.-Agregamos e implementamos
export class ViewCategoriasComponent implements OnInit {

  //275.-Resetamos lo que teniamos antes en categoria = []
  //276.-Ingresamos y hacemos tipo :any
  categorias: any = [
    
  ]
  //269.-Despues de agrgar la categoriasId, vamos al .html de esta carpeta

  //277.-Inngresamo en consructor
  constructor(private categoriaService: CategoriaService) { }

  //278.-
  ngOnInit(): void {
    this.categoriaService.listarCategorias().subscribe(
      (dato: any) => {
        this.categorias = dato;
        console.log(this.categorias);
      }, (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error al cargar las categorias', 'error');
      }
    )
  }

  //279.-Despues irno al .html de esta carpeta view

}
