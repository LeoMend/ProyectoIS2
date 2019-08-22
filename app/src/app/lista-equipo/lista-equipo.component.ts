import { Component, OnInit } from '@angular/core';
import {EquipoService} from './../equipo.service';

@Component({
  selector: 'app-lista-equipo',
  templateUrl: './lista-equipo.component.html',
  styleUrls: ['./lista-equipo.component.css']
})
export class ListaEquipoComponent implements OnInit {


  obtenerDatosEquipo:any;
  eventoId:any;

  editarEquipo:any={
   nombreGrupo:'',
   presentacionGrupo:'',
   trabajoEnEquipo:''
  }

  constructor(
    private _servicio:EquipoService
  ) 
  { 
   this.getEquipoServicio();
  }

  getEquipoServicio()
  {
    this._servicio.getEquipo().subscribe(result => {
  this.obtenerDatosEquipo=result;
    },
    error => {
  console.log(JSON.stringify(error));
    });
  }

  deleteEquipoServicio(identificador)
  {
    console.log('evento eliminar')
    this._servicio.deleteEquipo(identificador).subscribe(result=>
    {
      this.getEquipoServicio();
    },
    error => 
    {
      console.log(JSON.stringify(error));
    });
  }


















  ngOnInit() {
  }
  indexEditar(indexEquipo){
    this.editarEquipo=indexEquipo;
      }

      agregarItemEditado(){
        this._servicio.EditarItem(this.editarEquipo);
        this.editarEquipo.nombreGrupo='';
      }

eliminarEquipo(indexEquipo){
this._servicio.eliminarItem(indexEquipo);
  }

 
}
