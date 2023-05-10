import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaPorLlegarComponent } from './carga-por-llegar.component';

describe('CargaPorLlegarComponent', () => {
  let component: CargaPorLlegarComponent;
  let fixture: ComponentFixture<CargaPorLlegarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargaPorLlegarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargaPorLlegarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
