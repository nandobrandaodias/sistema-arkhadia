import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../shared/services/shared.module';
import { RegisterService } from '../../auth/register.service';
import { AuthService } from '../../auth/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private registerService: RegisterService,
    private authService: AuthService,
    private message: NzMessageService,
    private router: Router
  ) {}

  login: boolean = true;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    stayConnected: new FormControl(false),
  });

  cadastroForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  submitCadastro() {
    if (!this.cadastroForm.valid) window.alert('Formulário Inválido');
    this.registerService.register(this.cadastroForm.value).subscribe({
      next: () => {
        this.message.success('Cadastro realizado com sucesso!');
        this.login = true;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  submitLogin() {
    if (!this.loginForm.valid) window.alert('Formulário Inválido');
    this.authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        let token = JSON.stringify(res)
        this.authService.saveToken(token)
        this.router.navigate(['/'])
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  switchToLogin(path: string) {
    if (path == 'login') this.login = true;
    if (path == 'cadastro') this.login = false;
  }
}
