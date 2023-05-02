import { Component, OnInit } from '@angular/core';
import { ExamenService } from 'src/app/services/examen.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-examenes',
  templateUrl: './view-examenes.component.html',
  styleUrls: ['./view-examenes.component.css']
})

//306.-Ingresamos e implementamos
export class ViewExamenesComponent implements OnInit {

  examenes: any = [

  ]

  constructor(private examenService: ExamenService) { }

  ngOnInit(): void {
    this.examenService.listarCuestionario().subscribe(
      (dato: any) => {
        this.examenes = dato;
        console.log(this.examenes);
      }, (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error al cargar los examenes', 'error');
      }
    )
  }
  //307. Ir a view-examenes.component.html

  //346.-Crear metodo de eliminarExamen
  eliminarExamen(examenId: any) {
    //Ventana para la confirmacion de eliminar algun registro
    Swal.fire({
      title: 'Eliminar examen',
      text: '¿Estás seguro de eliminar el examen?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        //347.-Ir a examen.service.ts
        //350.-Agregamos el metodo creado hace un momento
        this.examenService.eliminarExamen(examenId).subscribe(
          (data) => {
            this.examenes = this.examenes.filter((examen: any) => examen.examenId != examenId);
            Swal.fire('Examen eliminado', 'El examen ha sido eliminado de la base de datos', 'success');
          }, (error) => {
            Swal.fire('Error', 'Error al eliminar el examen', 'error')
          }
        )
      }
    })
  }
}
