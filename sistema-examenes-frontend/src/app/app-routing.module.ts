import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriasComponent } from './pages/admin/view-categorias/view-categorias.component';
import { AddCategoriasComponent } from './pages/admin/add-categorias/add-categorias.component';
import { ViewExamenesComponent } from './pages/admin/view-examenes/view-examenes.component';
import { AddExamenComponent } from './pages/admin/add-examen/add-examen.component';
import { ActualizarExamenComponent } from './pages/admin/actualizar-examen/actualizar-examen.component';
import { ViewExamenPreguntasComponent } from './pages/admin/view-examen-preguntas/view-examen-preguntas.component';
import { AddPreguntaComponent } from './pages/admin/add-pregunta/add-pregunta.component';


//52.-Recordar que aqui modificamos y agregamos rutas
//52.1- AÑADIRMOS EL pathMatch, para las rutas... Nos vamos a la carpeta login
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup', //nombre de la carpta
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'login', //nombre de la carpta
    component: LoginComponent,
    pathMatch: 'full'
  }, //139.-Agregamos la rutas, pero DashboardComponent...has click, y agrega en ello el constructor y lo mas
  {
    path: 'admin',
    component: DashboardComponent,
    //209.-Quitar para poder acceder
    //pathMatch: 'full', 

    //210.-Despues que fuencione todo bien, ir a profile.component.ts


    canActivate: [AdminGuard], //152.-Agregamos,ya debes tener el guard
    children: [ //203.-Agregamos esto
      {
        path: 'profile',
        component: ProfileComponent
      },
      { //204.-Agremago otro mas
        path: '',
        component: WelcomeComponent
        //205.-Ir ala carpeta profile en .html
      },//264.-Agregamos la rutas de los componentes
      {
        path: 'categorias',
        component: ViewCategoriasComponent
      },//265.-Ir a sidebar en el .html
      {//278.- Ruta de add-categorias
        path: 'add-categorias',
        component: AddCategoriasComponent
      },//279.- Ir a sidebar.component.html
      {//298.-Agregamo la ruta examenes
        path: 'examenes',
        component: ViewExamenesComponent
      },//299.-Ir a sidebar.component.html
      {//312.-Añadimos la ruta
        path: 'add-examen',
        component: AddExamenComponent
      },//313.-Ir al sidebar.component.html
      {//348.-Agrega la ruta de actualizar-examen
        path: 'examen/:examenId',
        component: ActualizarExamenComponent
      },//349.-Ir a view-examenes.components.html
      {//372.-Añadimos la ruta para view-examen-preguntas
        path: 'ver-preguntas/:examenId/:titulo',
        component: ViewExamenPreguntasComponent
      },//373.-Ir a view-examenes.component.html
      {//392.-Agregamos la ruta de add-pregunta
        path: 'add-pregunta/:examenId/:titulo',
        component: AddPreguntaComponent
      }//393.-Ir a view-examen-preguntas.component.html
    ]
  }, //140.-Agregamos la rutas... checamos que funcion... y nos vamos a login.component.ts
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    pathMatch: 'full',
    canActivate: [NormalGuard] //153.-Agregamos,ya debes tener el guard y checar que funcione
  }
];

//154.-despues nos vamos a components/navbar y en navbar.component.ts

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
