import { Component, OnInit } from '@angular/core';
import {EquipoService} from './../equipo.service';

@Component({
  selector: 'app-lista-evento',
  templateUrl: './lista-evento.component.html',
  styleUrls: ['./lista-evento.component.scss']
})
export class ListaEventoComponent implements OnInit {

  obtenerDatosEventoActivo:any;

  constructor(private _service:EquipoService) {
    this. getEventoActivoServicio();
   }

  ngOnInit() {
    this._service.SignIngIfUserExist();
  }


  getEventoActivoServicio()
  {
    this._service.getEventoActivo().subscribe(result => {
  this.obtenerDatosEventoActivo=result;
    },
    error => {
  console.log(JSON.stringify(error));
    });
  }



}



