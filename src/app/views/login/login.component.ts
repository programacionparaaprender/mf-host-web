import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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

  constructor(private fb: FormBuilder, private http: HttpClient) {
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

    const body = new HttpParams()
      .set('grant_type', 'password')
      .set('username', username)
      .set('password', password);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa('frontendapp:12345'),
    });

    this.http
      .post('http://localhost:8090/api/security/oauth/token', body.toString(), { headers })
      .subscribe({
        next: (data: any) => {
          this.loading = false;
          localStorage.setItem('token', data.access_token);
          console.log('data: ', data);
          this.mensaje = '✅ Inicio de sesión exitoso.';
        },
        error: (err) => {
          this.loading = false;
          console.error('Error:', err);
          this.mensaje = '❌ Credenciales incorrectas.';
        },
      });
  }
}
