import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ExamenService } from 'src/app/services/examen.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-examen',
  templateUrl: './actualizar-examen.component.html',
  styleUrls: ['./actualizar-examen.component.css']
})
//352.- Ingresar e implementar
export class ActualizarExamenComponent implements OnInit {

  //352.1-Inyectamos el metodo route
  //356-Inyectamo el servicio examenService
  //360.-Inyectamo la categoriaService y el router
  constructor(private route: ActivatedRoute, private examenService: ExamenService, private categoriaService: CategoriaService, private router: Router) { }

  //352.2
  examenId = 0;
  //358.
  examen: any;
  //360.1
  categorias: any;

  //352.3-
  ngOnInit(): void {
    this.examenId = this.route.snapshot.params['examenId'];
    //357.-obtener el examen
    this.examenService.obtenerExamen(this.examenId).subscribe(
      (data) => {
        //359.-
        this.examen = data;
        console.log(this.examen);
      }, (error) => {
        console.log(error);
      }//359.Inyectamo otro en el constructor
    )
    //361.-Agregamos
    this.categoriaService.listarCategorias().subscribe(
      (data: any) => {
        this.categorias = data;
      }, (error) => {
        alert('Error al carga las categorias');
        //362.-Ir a actualizar-examen.component.html
      }
    )
  }
  //353.-Ir a examen.service.ts

  //367.-Creamos metodo, ahora si, para actualizar
  //368.-Ir a actualizar-examen.component.html en la etiqueta form.
  public actualizarDatos() {
    this.examenService.actualizarExamen(this.examen).subscribe(
      (data) => {
        Swal.fire('Examen Actualizado', 'El examen ha sido actualizado con éxito', 'success').then(
          (e) => {
            this.router.navigate(['/admin/examenes']);
          }
        );
      }, (error) => {
        Swal.fire('Error en el sistema', 'No se ha podido actualizar el éxamen', 'error');
        console.log(error);
      }
    )
  }
}
