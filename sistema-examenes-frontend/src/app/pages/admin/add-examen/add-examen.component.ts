import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ExamenService } from 'src/app/services/examen.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-examen',
  templateUrl: './add-examen.component.html',
  styleUrls: ['./add-examen.component.css']
})

//325.-Añadimos e implementamos
export class AddExamenComponent implements OnInit {

  categorias: any = [];

  examenData = {
    titulo: '',
    descripcion: '',
    puntoMaxiomos: '',
    numerosDePreguntas: '',
    activo: true,
    categoria: {
      categoriaId: ''
    }
  }

  //334.-Agregamos el snack:MatSnackBar
  //339.-Agregamos el examenService:ExamenService
  //341.-Agregamos el router en el consturtor, y despues lo añadimos en el metodo agregarExamen
  constructor(private categoriaService: CategoriaService, private snack: MatSnackBar, private examenService: ExamenService, private router: Router) { }

  ngOnInit(): void {
    this.categoriaService.listarCategorias().subscribe(
      (dato: any) => {
        this.categorias = dato;
        console.log(this.categorias);
      }, (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error al cargar los datos', 'error')
      }
    )
  }

  //335.-Agregamos esto es para la validacion del cuestionario a guardar
  //335.1-Agremos en el <form> de add-examen.component.html ###########

  //336.-Vamos a agregar un metodo en el servicio, debemos ir a examen.service.ts
  guardarCuestionario() {
    console.log(this.examenData);
    if (this.examenData.titulo.trim() == '' || this.examenData.titulo == null) {
      this.snack.open('El titulo es requerido', '', {
        duration: 3000
      });
      return;
    }

    //340.-Empezamos agregando para agregarlo a la BD
    //340.1 Ir al constructor de aqui mismo
    this.examenService.agregarExamen(this.examenData).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Examen guardado', 'El examen ha sido guardado con éxito', 'success');
        this.examenData = {
          titulo: '',
          descripcion: '',
          puntoMaxiomos: '',
          numerosDePreguntas: '',
          activo: true,
          categoria: {
            categoriaId: ''
          }
        }//342.-Agregamos
        this.router.navigate(['admin/examenes']);
        //343.-Ir a view-examen.component.html
      }, (error) => {
        Swal.fire('Error', 'Error al guardar el examen', 'error');
      }
    )
  }
  //326.-Ir a add-examen.component.html
}
