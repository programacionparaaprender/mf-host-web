import { inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CanActivateFn } from '@angular/router';
import { tap } from 'rxjs/operators';

export const AuthLoginGuard: CanActivateFn = () => {
  const auth = inject(AuthService);

  return auth.isAuthenticated$.pipe(
    tap((loggedIn) => {
      if (!loggedIn) {
        auth.loginWithRedirect({
          appState: { target: '/' } // redirige aquí tras login
        });
      }
    })
  );
};
