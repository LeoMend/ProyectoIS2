import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import { EventoComponent } from 'app/evento/evento.component';
import { ParticipanteComponent } from 'app/participante/participante.component';
import { ListaEquipoComponent } from 'app/lista-equipo/lista-equipo.component';
import { ListaEventoComponent } from 'app/lista-evento/lista-evento.component';
import { AgregarEquipoComponent } from 'app/agregar-equipo/agregar-equipo.component';
import { AgregarCriterioComponent } from 'app/agregar-criterio/agregar-criterio.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { LoginComponent } from 'app/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    TableListComponent,
    NotificationsComponent,
    UpgradeComponent,
    EventoComponent,
    ParticipanteComponent ,
    ListaEquipoComponent,
    ListaEventoComponent,
    AgregarEquipoComponent,
    AgregarCriterioComponent,
    LoginComponent
  ]
})

export class AdminLayoutModule {}
