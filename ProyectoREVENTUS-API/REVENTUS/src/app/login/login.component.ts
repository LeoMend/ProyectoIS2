import { Component, OnInit } from '@angular/core';
import {EquipoService} from './../equipo.service';
import { AgregarCriterioModels } from '../Models/CriterioModels';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {GrowlService} from 'ngx-growl';
import { Usuario } from 'app/Models/UsuarioModels';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  FormularioGuardar:FormGroup;
  public userPassword: string;
  public userUser: String;

  constructor
  (
    private _service:EquipoService,
    private formularioB:FormBuilder,
    private growlService: GrowlService,
    private router: Router,
  ) {
    this.FormularioGuardar = this.formularioB.group({
      username: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ]))
    })
   }

  ngOnInit() {
    this._service.SignIngIfUserExist();
  }

  getUserData() {
    this._service.getUsuarioLogin(this.FormularioGuardar.get('username').value).subscribe((userData: Usuario) => {
      this.userPassword = userData.usuarioLoginContraseña;
      this.userUser=userData.usuarioLoginNombre;
      if (this.FormularioGuardar.get('password').value === this.userPassword || this.FormularioGuardar.get('username').value===this.userUser) {
        localStorage.setItem('user',JSON.stringify(userData));
        this.router.navigate(['lista-evento']);
      }
      else {
        this.growlService.addError({heading:'Oops',message:'Usuario No Existe'});
      }
    }, error => {
      this.growlService.addError({heading:'Oops',message:'Usuario Y Contraseña Erroneas'});
this.clear();
    });
  }

  logoutUser() {
    localStorage.removeItem('username');
  }

  clear() {
    console.log("clear clicked")
    this.FormularioGuardar.reset();
  }


}


