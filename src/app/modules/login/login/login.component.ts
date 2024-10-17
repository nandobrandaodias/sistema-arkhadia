import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../../shared/services/shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: boolean = true;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    stayConnected: new FormControl(false)
  });

  cadastroForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  submitCadastro(){
    if(!this.cadastroForm.valid) window.alert('Formulário Inválido');
    console.log(this.cadastroForm.value)
  }

  submitLogin(){
    if(!this.loginForm.valid) window.alert('Formulário Inválido');
    console.log(this.loginForm.value)
  }

  switchToLogin(path: string){
    if(path == 'login') this.login = true
    if(path == 'cadastro') this.login = false
    console.log(this.login)
  }
}
