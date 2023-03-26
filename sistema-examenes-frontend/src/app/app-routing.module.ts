import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';

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
    pathMatch: 'full'
  }, //140.-Agregamos la rutas... checamos que funcion... y nos vamos a login.component.ts
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
