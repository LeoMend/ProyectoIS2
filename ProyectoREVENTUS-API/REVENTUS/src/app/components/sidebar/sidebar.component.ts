import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipoService } from 'app/equipo.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
   // { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/lista-evento', title: 'Eventos Disponibles',  icon:'person', class: '' }, 
    { path: '/evento', title: 'Agregar Evento',  icon:'dashboard', class: '' },
    { path: '/agregar-equipo', title: 'Agregar Equipos',  icon:'group', class: '' },
    { path: '/participante', title: 'Agregar Participante',  icon:'person', class: '' },
    { path: '/agregar-criterio', title: 'Agregar Criterio Calificacion',  icon:'group', class: '' },
    { path: '/login', title: 'LOGIN',  icon:'assessment', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor
  (
  private _service:EquipoService,
  ) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this._service.SignIngIfUserExist();
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

  logoutUser() {
    localStorage.removeItem('user');
  }

}
