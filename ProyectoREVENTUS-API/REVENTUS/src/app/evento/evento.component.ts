import { Component, OnInit } from '@angular/core';
import {EquipoService} from './../equipo.service';
import { AgregarEventoModels } from '../Models/EventoModels';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { GrowlService } from 'ngx-growl';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss']
})
export class EventoComponent implements OnInit {

  obtenerCatalogoEstado:any;

  
  FormularioGuardar:FormGroup;

  constructor(
    private _service:EquipoService,
    private formularioB:FormBuilder,
    private growlService: GrowlService
    )
   {
    this.getCatalogoEstadoServicio();
   }

  ngOnInit()
  {
    this.FormularioGuardar=this.formularioB.group({
      eventoNombre:['',Validators.required],
      eventoFecha:['',Validators.required],
      catalogoEstado_Id:['',Validators.required]
    });
  }

  onSubmit(ModeloClase:any)
  {
    const agregar = new AgregarEventoModels();
    agregar.eventoNombre=ModeloClase.eventoNombre;
    agregar.eventoFecha=ModeloClase.eventoFecha;
    agregar.catalogoEstado_Id=ModeloClase.catalogoEstado_Id;
    this._service.addEvento(agregar).subscribe(resultado=>{
      
  this.growlService.addSuccess({heading:'Felicidades',message:'Guardado Con Exito'});
  this.clear();

    },
      error=>{ 
   this.growlService.addError({heading:'Oops',message:'Ha Ocurrido Un ERROR Al Momento De Guardar Evento'});

    });
  }


  getCatalogoEstadoServicio()
  {
    this._service.getCatalogoEstado().subscribe(result => {
  this.obtenerCatalogoEstado=result;
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
