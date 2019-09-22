import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { AgregarEquipoComponent } from 'app/agregar-equipo/agregar-equipo.component';
import { EventoComponent } from 'app/evento/evento.component';
import { ParticipanteComponent } from 'app/participante/participante.component';
import { ListaEquipoComponent } from 'app/lista-equipo/lista-equipo.component';
import { ListaEventoComponent } from 'app/lista-evento/lista-evento.component';
import { AgregarCriterioComponent } from 'app/agregar-criterio/agregar-criterio.component';
import { LoginComponent } from 'app/login/login.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'agregar-equipo',  component: AgregarEquipoComponent },
    { path: 'evento',  component:  EventoComponent },
    { path: 'participante',  component:  ParticipanteComponent },
    { path: 'lista-equipo/:id',  component:  ListaEquipoComponent },
    { path: 'lista-evento',  component:  ListaEventoComponent },
    { path: 'agregar-criterio',  component:  AgregarCriterioComponent },
    { path: 'login',  component:  LoginComponent },
];
