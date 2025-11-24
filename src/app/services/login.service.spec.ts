import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('LoginService (mockeado sin HTTP)', () => {
  let service: LoginService;
  let mockHttp: any;

  beforeEach(() => {
    mockHttp = {
      post: jasmine.createSpy('post').and.returnValue(
        of({ access_token: 'MOCKED_TOKEN_123' }) // <-- respuesta MOCK
      )
    };

    TestBed.configureTestingModule({
      providers: [
        LoginService,
        { provide: HttpClient, useValue: mockHttp } // <-- mock HttpClient
      ]
    });

    service = TestBed.inject(LoginService);
  });

  it('debería retornar un token mock sin llamar a la API real', (done) => {
    service.login('user', '1234').subscribe((resp) => {
      expect(resp.access_token).toBe('MOCKED_TOKEN_123'); // <-- mock validado
      expect(mockHttp.post).toHaveBeenCalled(); // confirma que se usó el mock
      done();
    });
  });

  it('debería guardar el token en localStorage', () => {
    spyOn(localStorage, 'setItem');
    service.saveToken('TOKEN_ABC');
    expect(localStorage.setItem).toHaveBeenCalledWith('token', 'TOKEN_ABC');
  });
});
