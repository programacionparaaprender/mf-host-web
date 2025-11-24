import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';

import { AuthModule } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';


import { ActionReducer, MetaReducer, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import { exampleReducer } from './store/example/example.reducer';
import { counterReducer } from './store/counter/counter.reducer';
import { productReducer } from './store/product/product.reducer';
import { userReducer } from './store/users/users.reducer'
import { ProductEffects } from './store/product/product.effects';
import { CounterEffects } from './store/counter/counter.effects';

import {provideTranslateService, TranslateService} from "@ngx-translate/core";
import {provideTranslateHttpLoader} from "@ngx-translate/http-loader";

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: ['exampleState', 'counterState', 'productState','userState'],
    rehydrate: true,
  })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    importProvidersFrom(
      AuthModule.forRoot({
        domain: environment.AUTH0.DOMAIN,
        clientId: environment.AUTH0.CLIENTID,
        cacheLocation:'localstorage',
        authorizationParams: {
          redirect_uri: window.location.origin
        }
      })
    ),
    provideStore(
      {
        exampleState: exampleReducer,
        counterState: counterReducer,
        productState: productReducer,
        userState: userReducer,
      },
      { metaReducers }
    ),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: environment.production,
    }),
    //provideEffects([ProductEffects]),
    provideTranslateService({
      lang: 'en',
      fallbackLang: 'en',
      loader: provideTranslateHttpLoader({
        prefix: '/i18n/',
        suffix: '.json'
      })
    }),
  ]
};