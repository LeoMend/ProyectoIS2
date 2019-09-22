import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCriterioComponent } from './agregar-criterio.component';

describe('AgregarCriterioComponent', () => {
  let component: AgregarCriterioComponent;
  let fixture: ComponentFixture<AgregarCriterioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarCriterioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCriterioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
