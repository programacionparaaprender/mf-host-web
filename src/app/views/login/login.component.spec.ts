import { TestBed, ComponentFixture } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginService } from '../../services/login.service';

// Mock del LoginService
class LoginServiceMock {
  login = jasmine.createSpy('login').and.returnValue(of({ access_token: 'TEST_TOKEN' }));
  saveToken = jasmine.createSpy('saveToken');
}

describe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let component: LoginComponent;
  let loginService: LoginServiceMock;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, ReactiveFormsModule],
      providers: [
        FormBuilder,
        { provide: LoginService, useClass: LoginServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    loginService = TestBed.inject(LoginService) as unknown as LoginServiceMock;
    fixture.detectChanges();
  });

  // -------------------------------------------------------
  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  // -------------------------------------------------------
  it('debe inicializar el formulario con campos vacíos', () => {
    expect(component.loginForm.value).toEqual({
      username: '',
      password: '',
    });
  });

  // -------------------------------------------------------
  it('debe mostrar mensaje si el formulario es inválido', () => {
    component.login();
    expect(component.mensaje).toBe('⚠️ Completa todos los campos.');
  });

  // -------------------------------------------------------
  it('debe llamar al LoginService y manejar login exitoso', () => {
    // rellenar formulario válido
    component.loginForm.setValue({
      username: 'admin',
      password: '123'
    });

    component.login();

    expect(loginService.login).toHaveBeenCalledWith('admin', '123');
    expect(loginService.saveToken).toHaveBeenCalledWith('TEST_TOKEN');
    expect(component.loading).toBeFalse();
    expect(component.mensaje).toBe('✅ Inicio de sesión exitoso.');
  });

  // -------------------------------------------------------
  it('debe manejar login con error', () => {
    loginService.login.and.returnValue(throwError(() => ({ status: 400 })));

    component.loginForm.setValue({
      username: 'fail',
      password: 'wrong'
    });

    component.login();

    expect(component.loading).toBeFalse();
    expect(component.mensaje).toBe('❌ Credenciales incorrectas.');
  });

  // -------------------------------------------------------
  it('debe activar y desactivar loading', () => {
    component.loginForm.setValue({
      username: 'admin',
      password: '123'
    });

    component.login();

    expect(component.loading).toBeFalse(); // Finaliza la llamada simulada
  });
});
