import { Component, OnInit } from '@angular/core';
import {EquipoService} from './../equipo.service';
import {ActivatedRoute} from '@angular/router'
import { AgregarCalificacionModels } from '../Models/CalificacionModels';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {GrowlService} from 'ngx-growl';
import { Usuario } from 'app/Models/UsuarioModels';

@Component({
  selector: 'app-lista-equipo',
  templateUrl: './lista-equipo.component.html',
  styleUrls: ['./lista-equipo.component.scss']
})
export class ListaEquipoComponent implements OnInit {

  obtenerDatosEquipo = [];
  usuario: Usuario;
  usuarioLogin_Id: string;
  criterioCalificacion_Id:any;


  FormularioGuardar:FormGroup;
  obtenerDatosCriterioCalificacion=[];

  editar:any;

  constructor
  ( 
    private _service:EquipoService, 
    private ruta:ActivatedRoute,
    private formularioB:FormBuilder,
    private growlService: GrowlService
  
  ) 
 {
   // this.getEquipoServicio();
    this.ruta.params.subscribe(params=>
      {
        console.log(params['id']);
          this.idEquipo(parseInt(params['id']));
          this.idCriterioCalificacion(params['id']);       
      }) 
     this. createForm();
  }


  createForm():void{
    this.FormularioGuardar=this.formularioB.group({
      
      calificacionValor:['',Validators.required],
      equipo_Id:['',Validators.required]

    });
  }



  ngOnInit() 
  { 
   this.getUserData();
  }

  getUserData() {
    this.usuario = JSON.parse(localStorage.getItem('user'));
    this.usuarioLogin_Id = this.usuario.usuarioLoginId;
    console.log(this.usuarioLogin_Id);
  }


  onSubmit(ModeloClase:any)
  {
    const agregar = new AgregarCalificacionModels();
    agregar.calificacionValor = ModeloClase.calificacionValor;
    agregar.criterioCalificacion_Id = this.criterioCalificacion_Id;
    agregar.equipo_Id = ModeloClase.equipo_Id;
    agregar.usuarioLogin_Id = this.usuarioLogin_Id;
this._service.addCalificacion(agregar).subscribe(resultado=>{
  
  this.growlService.addSuccess({heading:'Felicidades',message:'Guardado Con Exito'});
  this.clear();
 
},
error=>{
 
  console.log(JSON.stringify(error));
  this.growlService.addError({heading:'Oops',message:'Ha Ocurrido Un ERROR Al Momento De Guardar Calificacion'});
  
});
}



  idEquipo(id:number)
{
this.obtenerDatosEquipo=this._service.getEquipoEventoId(id);
}

  idCriterioCalificacion(id:number)
{
this.obtenerDatosCriterioCalificacion=this._service.getCriterioCalificacionEventoId(id);
} 


  clear() 
{
  console.log("clear clicked")
  this.FormularioGuardar.reset({
    equipo_Id:this.editar.equipoId
  });
}

 editarItem(item)
{
this.editar=item;
}


getIdCriterio(id:any){

this.criterioCalificacion_Id=id;
console.log(id);
}






















}