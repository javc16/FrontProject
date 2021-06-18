import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecomendacionComponent } from './create-recomendacion.component';

describe('CreateRecomendacionComponent', () => {
  let component: CreateRecomendacionComponent;
  let fixture: ComponentFixture<CreateRecomendacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRecomendacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRecomendacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
