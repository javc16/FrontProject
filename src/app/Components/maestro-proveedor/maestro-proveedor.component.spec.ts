import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestroProveedorComponent } from './maestro-proveedor.component';

describe('MaestroProveedorComponent', () => {
  let component: MaestroProveedorComponent;
  let fixture: ComponentFixture<MaestroProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaestroProveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestroProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
