import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarComponent } from './agregar-proveedor.component';

describe('AgregarComponent', () => {
  let component: AgregarComponent;
  let fixture: ComponentFixture<AgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
