
import { NgModule } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { ComponenteLocalComponent } from './views/componente-local/componente-local.component';
import { Routes } from '@angular/router';
import { AuthLoginGuard } from './services/auth-login.guard';
import { PrincipalComponent } from './views/principal/principal.component';
import { LoginComponent } from './views/login/login.component';


export const routes: Routes = [
    { 
      path: '',  redirectTo: '/principal', pathMatch: 'full' },
    { 
      //canActivate: [AuthLoginGuard], // 👈 redirige al login si no está autenticado
      path: 'principal' , component: PrincipalComponent,
      // ✅ Hijas del componente Principal
      children: [
        { path: '', redirectTo: 'local', pathMatch: 'full' },
        { path: 'local', component: ComponenteLocalComponent },
        {
          //canActivate: [AuthLoginGuard], // 👈 redirige al login si no está autenticado
          path: 'remoto',
          loadComponent: () =>
            loadRemoteModule({
              type: 'module',
              remoteEntry: 'http://localhost:4201/remoteEntry.js',
              //remoteEntry: 'http://mf-remoto.s3-website.us-east-2.amazonaws.com/remoteEntry.js',
              //remoteEntry: 'http://mf-host-web-and-remote.s3-website.us-east-2.amazonaws.com/mf-remoto/remoteEntry.js',
              exposedModule: './RemotoComponent',
            }).then((m) => m.RemotoComponent),
        },
      ],
    },
    { 
      //canActivate: [AuthLoginGuard], // 👈 redirige al login si no está autenticado
      path: 'login' , component: LoginComponent
    },
    { 
      //canActivate: [AuthLoginGuard], // 👈 redirige al login si no está autenticado
      path: 'registro' , component: ComponenteLocalComponent
    },
    {
      //canActivate: [AuthLoginGuard], // 👈 redirige al login si no está autenticado
      path: 'remoto',
      loadComponent: () =>
        loadRemoteModule({
          type: 'module',
          remoteEntry: 'http://localhost:4201/remoteEntry.js',
          //remoteEntry: 'http://mf-remoto.s3-website.us-east-2.amazonaws.com/remoteEntry.js',
          //remoteEntry: 'http://mf-host-web-and-remote.s3-website.us-east-2.amazonaws.com/mf-remoto/remoteEntry.js',
          exposedModule: './RemotoComponent',
        }).then((m) => m.RemotoComponent),
    },
    /*{
      path: 'login',
      loadComponent: () =>
        loadRemoteModule({
          type: 'module',
          remoteEntry: 'http://localhost:4202/remoteEntry.js',
          //remoteEntry: 'http://mf-remoto.s3-website.us-east-2.amazonaws.com/remoteEntry.js',
          //remoteEntry: 'http://mf-host-web-and-remote.s3-website.us-east-2.amazonaws.com/mf-remoto/remoteEntry.js',
          exposedModule: './RemotoComponent',
        }).then((m) => m.RemotoComponent),
    }*/
];
