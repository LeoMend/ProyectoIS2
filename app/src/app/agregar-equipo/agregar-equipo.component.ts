import { Component, OnInit } from '@angular/core';
import {EquipoService} from './../equipo.service';
import { empty } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-agregar-equipo',
  templateUrl: './agregar-equipo.component.html',
  styleUrls: ['./agregar-equipo.component.css']
})
export class AgregarEquipoComponent implements OnInit {


  obtenerDatosEquipo:any;
  obtenerDatosCarrera:any;

  DatosObtenidosEquipo:any={
    nombreGrupo:'',
    carreraCursada:'',
    integrante1:'',
    integrante2:'',
    integrante3:'',
    integrante4:'',
    integrante5:'',
  }
  
refrescar(){this.DatosObtenidosEquipo=""}

  constructor(private _service: EquipoService) { 
 this.getEquipoServicio();
 this.getCarreraServicio();
  }


  
  getEquipoServicio()
  {
    this._service.getEquipo().subscribe(result => {
  this.obtenerDatosEquipo=result;
    },
    error => {
  console.log(JSON.stringify(error));
    });
  }

  getCarreraServicio()
  {
    this._service.getCarrera().subscribe(result => {
  this.obtenerDatosCarrera=result;
    },
    error => {
  console.log(JSON.stringify(error));
    });
  }







  ngOnInit() {
  }


  agregarDatosEquipo(){
  
    this._service.agregarBaseDato(this.DatosObtenidosEquipo);
  this.refrescar();
  }

}
