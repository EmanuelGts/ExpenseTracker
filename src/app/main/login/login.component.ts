import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  errorLogin!: boolean;
  mensajeErrorLogin!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.mensajeErrorLogin = 'El usuario o la contraseña no son válidos.';
    this.errorLogin = false;
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debe indicar un correo';
    }
    
    this.errorLogin = false;
    return this.email.hasError('email') ? 'No es un correo válido' : '';
  }

  iniciar_sesion(email: string, password: string){
    if (email === 'admin@angular.com' && password == 'Admin'){
      this.errorLogin = false;
      this.router.navigate(['/expense-tracker'])
    }
    this.errorLogin = true;
  }

}
