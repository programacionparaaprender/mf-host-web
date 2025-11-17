import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciaEmprendedoresComponent } from './agencia-emprendedores.component';

describe('AgenciaEmprendedoresComponent', () => {
  let component: AgenciaEmprendedoresComponent;
  let fixture: ComponentFixture<AgenciaEmprendedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenciaEmprendedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciaEmprendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
