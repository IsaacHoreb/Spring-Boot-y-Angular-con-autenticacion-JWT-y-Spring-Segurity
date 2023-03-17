import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//23.-Importamos el button (ANGULAR MATERIA)
import { MatButtonModule } from '@angular/material/button';
//32.-Importamos es de From fields de Angular Material
import {MatFormFieldModule} from '@angular/material/form-field';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, //23.1-Importamo el componente
    //23.2-INSTALLAMOS BOOTRAP EN CMD --> npm install bootstrap-grid-only-css --save
    MatFormFieldModule //32.1 Agregamos el componente
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//24.-En el {angular.json} en la parte de style,agregas lo sig.
//"./node_modules/bootstrap-grid-only-css/dist/css/bootstrap-grid.min.css"
//Con ello indicamos que importaremos BOOTSTRAP 

/*
26.-ES IMPORTANTE----
Nos metemos en el CMD, y vamos a la capeta de src/app/,y creamos las carpetas
components y pages, nos metemos en las carpetas,y creamos los controladores:
  ng g c navbar
y despues en pages:
  ng g c login,
  ng g c signup

# 26.1- Nos vamos a {app.component.html}
*/

