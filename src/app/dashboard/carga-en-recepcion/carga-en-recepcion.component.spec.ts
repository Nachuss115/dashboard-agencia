import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaEnRecepcionComponent } from './carga-en-recepcion.component';

describe('CargaEnRecepcionComponent', () => {
  let component: CargaEnRecepcionComponent;
  let fixture: ComponentFixture<CargaEnRecepcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargaEnRecepcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargaEnRecepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
