import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;
  mensaje = '';
  loading = false;

  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.mensaje = '⚠️ Completa todos los campos.';
      return;
    }

    this.loading = true;
    this.mensaje = '';

    const { username, password } = this.loginForm.value;

    this.loginService.login(username, password).subscribe({
      next: (data: any) => {
        this.loading = false;
        this.loginService.saveToken(data.access_token);
        console.log('data: ', data);
        this.mensaje = '✅ Inicio de sesión exitoso.';
      },
      error: () => {
        this.loading = false;
        this.mensaje = '❌ Credenciales incorrectas.';
      },
    });
  }
}
