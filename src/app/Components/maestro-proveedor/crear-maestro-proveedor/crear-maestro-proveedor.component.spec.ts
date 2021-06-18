import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMaestroProveedorComponent } from './crear-maestro-proveedor.component';

describe('CrearMaestroProveedorComponent', () => {
  let component: CrearMaestroProveedorComponent;
  let fixture: ComponentFixture<CrearMaestroProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearMaestroProveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMaestroProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
