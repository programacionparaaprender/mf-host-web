import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteLocalComponent } from './componente-local.component';

describe('ComponenteLocalComponent', () => {
  let component: ComponenteLocalComponent;
  let fixture: ComponentFixture<ComponenteLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponenteLocalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
