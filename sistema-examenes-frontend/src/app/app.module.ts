import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//23.-Importamos el button (ANGULAR MATERIA)
import { MatButtonModule } from '@angular/material/button';
//32.-Importamos es de From fields de Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
//32.1 Importamoe el Input de Angular Material
import { MatInputModule } from '@angular/material/input';
//45.- Importamos para una ventana bonita
import { MatSnackBarModule } from '@angular/material/snack-bar';
//54.- Importamos es del Angular Material
import { MatCardModule } from '@angular/material/card';
//58.- Importamos es de Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
//198.- Importamos de Angular material
import { MatListModule } from '@angular/material/list';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { AuthInterceptor, authInterceptorProviders } from './services/auth.interceptro';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriasComponent } from './pages/admin/view-categorias/view-categorias.component';
import { AddCategoriasComponent } from './pages/admin/add-categorias/add-categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriasComponent,
    AddCategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, //23.1-Importamo el componente
    //23.2-INSTALLAMOS BOOTRAP EN CMD --> npm install bootstrap-grid-only-css --save
    MatFormFieldModule, //32.2 Agregamos el componente
    MatInputModule, //32.3 Agregamos el componente
    FormsModule, //44.3.1 - Agregamos
    HttpClientModule, //44.3 Para funcionar la pagina, debido al error de cargar
    MatSnackBarModule, //45.1 - Agremagos el importe
    MatCardModule, //54.1- Agregamos
    MatToolbarModule, //58.1
    MatIconModule, //58.2... Nos vamos a navbar.component.html
    MatListModule //198.- Ir despues a CMD y en la carpeta pages/admin ingresamos -> ng g c sidebar, despues que se crea, ir al .html
  ],
  providers: [authInterceptorProviders], //131.-TENEMOS QUE AGREGARLO
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
  132. Nos vamos a cmd en app/services/pages, y escribimos:
    ¬mkdir admin
    ¬mkdir user

  133.- En el CMD entramos a admin, y escribimos:
    ¬ng g c Dashboard

  134.- En el CMD entramos a user, y escribimos:
    ¬ng g c user-dashboard

  135.- Nos movems ala carpeta admin/dashboard y en dashboard.component.html
*/


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

