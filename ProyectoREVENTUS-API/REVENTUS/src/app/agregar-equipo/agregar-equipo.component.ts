import { Component, OnInit } from '@angular/core';
import {EquipoService} from './../equipo.service';
import { AgregarEquipoModels } from '../Models/EquipoModels';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {GrowlService} from 'ngx-growl';

@Component({
  selector: 'app-agregar-equipo',
  templateUrl: './agregar-equipo.component.html',
  styleUrls: ['./agregar-equipo.component.scss']
})
export class AgregarEquipoComponent implements OnInit {

  obtenerDatosEquipo:any;
  obtenerDatosEvento:any;
 

  FormularioGuardar:FormGroup;

  constructor
  (
    private _service:EquipoService,
    private formularioB:FormBuilder,
    private growlService: GrowlService
  ) 
  {
    this.getEquipoServicio();
 this.getEventoServicio();
  }

  ngOnInit() 
  {
    this.FormularioGuardar=this.formularioB.group({
     
      equipopNombre:['',Validators.required],
      evento_Id:['',Validators.required]
    });
  }

  onSubmit(ModeloClase:any)
  {
    const agregar = new AgregarEquipoModels();
    agregar.equipopNombre=ModeloClase.equipopNombre;
    agregar.evento_Id=ModeloClase.evento_Id;
this._service.addEquipo(agregar).subscribe(resultado=>{
  this.growlService.addSuccess({heading:'Felicidades',message:'Guardado Con Exito'});
  this.clear();
},
error=>{
 
  this.growlService.addError({heading:'Oops',message:'Ha Ocurrido Un ERROR Al Momento De Guardar Equipo'});
});
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

  getEventoServicio()
  {
    this._service.getEvento().subscribe(result => {
  this.obtenerDatosEvento=result;
    },
    error => {
  console.log(JSON.stringify(error));
    });
  }

  clear() {
    console.log("clear clicked")
    this.FormularioGuardar.reset();
  }




}
