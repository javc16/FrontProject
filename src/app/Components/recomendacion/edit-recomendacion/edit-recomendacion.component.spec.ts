import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecomendacionComponent } from './edit-recomendacion.component';

describe('EditRecomendacionComponent', () => {
  let component: EditRecomendacionComponent;
  let fixture: ComponentFixture<EditRecomendacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRecomendacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecomendacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
