import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMaestroProveedorComponent } from './edit-maestro-proveedor.component';

describe('EditMaestroProveedorComponent', () => {
  let component: EditMaestroProveedorComponent;
  let fixture: ComponentFixture<EditMaestroProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMaestroProveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMaestroProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
