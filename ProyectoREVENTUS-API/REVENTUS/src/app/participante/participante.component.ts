import { Component, OnInit } from '@angular/core';
import {EquipoService} from './../equipo.service';
import { AgregarPaticipanteModels } from '../Models/ParticipanteModels';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { GrowlService } from 'ngx-growl';

@Component({
  selector: 'app-participante',
  templateUrl: './participante.component.html',
  styleUrls: ['./participante.component.scss']
})
export class ParticipanteComponent implements OnInit {

  

  obtenerDatosCarrera:any;
  obtenerDatosEquipo:any;

  FormularioGuardar:FormGroup;

  constructor
  (
    private _service:EquipoService,
    private formularioB:FormBuilder,
    private growlService: GrowlService
  ) 
  {
    this.getCarreraServicio();
    this.getEquipoServicio();
  }

  ngOnInit() 
  {
    this.FormularioGuardar=this.formularioB.group({
     
      participanteNombre:['',Validators.required],
      carrera_Id:['',Validators.required],
      equipo_Id:['',Validators.required]
    });
  }

  onSubmit(ModeloClase:any)
  {
    const agregar = new AgregarPaticipanteModels();
    agregar.participanteNombre=ModeloClase.participanteNombre;
    agregar.carrera_Id=ModeloClase.carrera_Id;
    agregar.equipo_Id=ModeloClase.equipo_Id;
this._service.addParticipante(agregar).subscribe(resultado=>{
  this.growlService.addSuccess({heading:'Felicidades',message:'Guardado Con Exito'});
  this.clear();
},
error=>{
  this.growlService.addError({heading:'Oops',message:'Ha Ocurrido Un ERROR Al Momento De Guardar Participante'});
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

  getEquipoServicio()
  {
    this._service.getEquipo().subscribe(result => {
  this.obtenerDatosEquipo=result;
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
