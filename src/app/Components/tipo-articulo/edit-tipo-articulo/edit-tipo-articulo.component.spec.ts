import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTipoArticuloComponent } from './edit-tipo-articulo.component';

describe('EditTipoArticuloComponent', () => {
  let component: EditTipoArticuloComponent;
  let fixture: ComponentFixture<EditTipoArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTipoArticuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTipoArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
