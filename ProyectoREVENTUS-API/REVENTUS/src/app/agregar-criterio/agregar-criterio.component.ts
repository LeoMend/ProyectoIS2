import { Component, OnInit } from '@angular/core';
import {EquipoService} from './../equipo.service';
import { AgregarCriterioModels } from '../Models/CriterioModels';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {GrowlService} from 'ngx-growl';


@Component({
  selector: 'app-agregar-criterio',
  templateUrl: './agregar-criterio.component.html',
  styleUrls: ['./agregar-criterio.component.scss']
})
export class AgregarCriterioComponent implements OnInit {

  
  obtenerDatosEvento:any;
  
  FormularioGuardar:FormGroup;

  constructor
  (
    private _service:EquipoService,
    private formularioB:FormBuilder,
    private growlService: GrowlService

  ) 
  {

    this.getEventoServicio();
  }

  ngOnInit() 
  {
    this.FormularioGuardar=this.formularioB.group({
     
      criterioCalificacionNombre:['',Validators.required],
      evento_Id:['',Validators.required]
    });
  }

  onSubmit(ModeloClase:any)
  {
    const agregar = new AgregarCriterioModels();
    agregar.criterioCalificacionNombre=ModeloClase.criterioCalificacionNombre;
    agregar.evento_Id=ModeloClase.evento_Id;
    this._service.addCriterioCalificacion(agregar).subscribe(resultado=>{
    this.growlService.addSuccess({heading:'Felicidades',message:'Guardado Con Exito'});
    this.clear();
  },
    error=>{
 
      console.log(JSON.stringify(error));
    this.growlService.addError({heading:'Oops',message:'Ha Ocurrido Un ERROR Al Momento De Guardar Criterio De Calificacion'});
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
