import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-categorias',
  templateUrl: './add-categorias.component.html',
  styleUrls: ['./add-categorias.component.css']
})

//291.-Añadimos e implementamos
export class AddCategoriasComponent implements OnInit {
  //Añadimos, esto es para que funcione lo que agregamos en el punto 289.
  categoria = {
    titulo: '',
    descripcion: ''
  }

  //295.-Agregamos al constructor
  //296.-Depsues que funcione correcto todo, ir al CMD en src/app/pages/admin
  //añadimos ng g c view-examenes.
  //297.-Despues que se crea, ir app-routing.module.ts
  constructor(private categoriaService: CategoriaService, private snack: MatSnackBar, private router: Router) { }

  ngOnInit(): void {

  }

  //289.1 Lo creamos para que funcione
  formSubmit() {
    //Validacion
    if (this.categoria.titulo.trim() == '' || this.categoria.descripcion.trim() == '') {
      this.snack.open("El titulo es requerido !!", '', {
        duration: 3000
      })
      return;
    }

    //Validacion cuando agregue categoria
    //########El Swal.fire es para mostrar una ventana
    this.categoriaService.agregarCategorias(this.categoria).subscribe(
      (dato: any) => {
        this.categoria.titulo = '';
        this.categoria.descripcion = '';
        Swal.fire('Categoría agregada', 'La categoría ha sido agregado con éxito', 'success');
        this.router.navigate(['/admin/categorias']) //esto es para que redirija a esa pagina
      }, (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error al guardar la categoria', 'error');
      }
    )
  }
}
