import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

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
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
