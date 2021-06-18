import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTipoServicioComponent } from './create-tipo-servicio.component';

describe('CreateTipoServicioComponent', () => {
  let component: CreateTipoServicioComponent;
  let fixture: ComponentFixture<CreateTipoServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTipoServicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTipoServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
