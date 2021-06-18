import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTipoArticuloComponent } from './create-tipo-articulo.component';

describe('CreateTipoArticuloComponent', () => {
  let component: CreateTipoArticuloComponent;
  let fixture: ComponentFixture<CreateTipoArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTipoArticuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTipoArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
