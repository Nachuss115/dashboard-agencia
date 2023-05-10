import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaPorEnviarComponent } from './carga-por-enviar.component';

describe('CargaPorEnviarComponent', () => {
  let component: CargaPorEnviarComponent;
  let fixture: ComponentFixture<CargaPorEnviarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargaPorEnviarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargaPorEnviarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
