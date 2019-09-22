import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  obtenerUsuario:Observable<any>

  obtenerDatosEquipo: any;
  obtenerDatosCriterioCalificacion: any;

  constructor(private http:HttpClient, private router: Router) { 

    this.getEquipoServicio();
    this.getCriterioCalificacionServicio();
  }



  getEquipo():Observable<any>{return this.http.get("https://webapigestionproyecto.azurewebsites.net/api/Equipo");}
  getCarrera():Observable<any>{return this.http.get("https://webapigestionproyecto.azurewebsites.net/api/Carrera")}
  getEvento():Observable<any>{return this.http.get("https://webapigestionproyecto.azurewebsites.net/api/Evento");}
  getEventoActivo():Observable<any>{return this.http.get("https://webapigestionproyecto.azurewebsites.net/api/EventoActivos");}
  getCatalogoEstado():Observable<any>{return this.http.get("https://webapigestionproyecto.azurewebsites.net/api/CatalogoEstado");}
  getCriterioCalificacion():Observable<any>{return this.http.get("https://webapigestionproyecto.azurewebsites.net/api/CriterioCalificacion");}




  getUsuarioLogin(userName: string) {
    return this.http.get(`https://webapigestionproyecto.azurewebsites.net/api/UsuarioLogin/${userName}`);
  }

  SignIngIfUserExist() {
    if (localStorage.getItem('user')) {
      this.router.navigate(['lista-evento']);
    } else {
      this.router.navigate(['login']);
    }
  }
  
  
  addEquipo(equipo:any)
  {
    let json=JSON.stringify(equipo);
    let headers=new HttpHeaders().set('content-Type','application/json');
  
    return this.http.post("https://webapigestionproyecto.azurewebsites.net/api/Equipo",json,{headers:headers});
  }

  addEvento(evento:any)
  {
    let json=JSON.stringify(evento);
    let headers=new HttpHeaders().set('content-Type','application/json');
  
    return this.http.post("https://webapigestionproyecto.azurewebsites.net/api/Evento",json,{headers:headers});
  }

  addParticipante(participante:any)
  {
    let json=JSON.stringify(participante);
    let headers=new HttpHeaders().set('content-Type','application/json');
  
    return this.http.post("https://webapigestionproyecto.azurewebsites.net/api/Participante",json,{headers:headers});
  }
  
  addCalificacion(calificacion:any)
  {
    let json=JSON.stringify(calificacion);
    let headers=new HttpHeaders().set('content-Type','application/json');
  
    return this.http.post("https://webapigestionproyecto.azurewebsites.net/api/Calificacion",json,{headers:headers});
  }

  addCriterioCalificacion(criterioCalificacion:any)
  {
    let json=JSON.stringify(criterioCalificacion);
    let headers=new HttpHeaders().set('content-Type','application/json');
  
    return this.http.post("https://webapigestionproyecto.azurewebsites.net/api/CriterioCalificacion",json,{headers:headers});
  }



  deleteEquipo(identificador):Observable<any>
  {
    return this.http.delete("https://webapigestionproyecto.azurewebsites.net/api/Equipo/"+identificador);
  }



getEquipoServicio()
  {
    this.getEquipo().subscribe(result => {
  this.obtenerDatosEquipo=result;
    },
    error => {
  console.log(JSON.stringify(error));
    });
  }

  getEquipoEventoId(id:number)
{
  this.getEquipoServicio();
  let Equipos = this.obtenerDatosEquipo;
  let Equipo = Equipos.filter(item=> item.evento_Id == id)

  return Equipo;
}



getCriterioCalificacionServicio()
  {
    this.getCriterioCalificacion().subscribe(result => {
  this.obtenerDatosCriterioCalificacion=result;
    },
    error => {
  console.log(JSON.stringify(error));
    });
  }

  getCriterioCalificacionEventoId(id:number)
  {
    this.getCriterioCalificacionServicio();
    let CriterioCalificaciones = this.obtenerDatosCriterioCalificacion;
    let CriterioCalificacion = CriterioCalificaciones.filter(item=> item.evento_Id == id)
  
    return CriterioCalificacion;
  }




















}


