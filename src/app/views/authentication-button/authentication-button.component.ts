import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { LoginButtonComponent } from '../login-button/login-button.component';
import { LogoutButtonComponent } from '../logout-button/logout-button.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-authentication-button',
  standalone: true,
  imports: [AsyncPipe, RouterOutlet, LoginButtonComponent, LogoutButtonComponent, CommonModule],
  templateUrl: './authentication-button.component.html',
  styleUrls: ['./authentication-button.component.scss']
})
export class AuthenticationButtonComponent implements OnInit {
  autenticado:boolean = false;
  constructor(public auth: AuthService) {}

  async ngOnInit() {
    const response = await firstValueFrom(this.auth.isAuthenticated$);
    this.autenticado = response;
  }

}