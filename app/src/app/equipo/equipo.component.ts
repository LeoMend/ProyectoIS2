import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {EquipoService} from './../equipo.service';
import { ListaEquipoComponent } from './../lista-equipo/lista-equipo.component';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

    equipo:any;

    editarItem:any;

  constructor(

    private ruta:ActivatedRoute,
    private _servicio:EquipoService,
    private prueba:ListaEquipoComponent

  ) { 
this.ruta.params.subscribe(params=>{


  this.equipo=this._servicio.obtenerUno(params);

})
  }

  ngOnInit() {
  }

  

}
