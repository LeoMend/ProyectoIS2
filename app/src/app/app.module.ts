
import {RouterModule,Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import {EquipoService} from './equipo.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cuerpo2Component } from './cuerpo2/cuerpo2.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { EquipoComponent } from './equipo/equipo.component';
import { ListaEquipoComponent } from './lista-equipo/lista-equipo.component';
import { AgregarEquipoComponent } from './agregar-equipo/agregar-equipo.component';
import {HttpClientModule} from '@angular/common/http';


//// esto es para las rutas
const routes: Routes = [
  { path: 'cuerpo2', component: Cuerpo2Component },
  { path: 'AgregarEquipo', component: AgregarEquipoComponent },
  { path: 'equipo/:id', component: EquipoComponent },
  { path: 'ListaEquipo', component: ListaEquipoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
  
];

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FooterComponent,
    Cuerpo2Component,
    InicioComponent,
    NosotrosComponent,
    EquipoComponent,
    ListaEquipoComponent,
    AgregarEquipoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    HttpClientModule
  ],
  providers: [
    EquipoService  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
