import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifiestoDetalleComponent } from './manifiesto-detalle.component';

describe('ManifiestoDetalleComponent', () => {
  let component: ManifiestoDetalleComponent;
  let fixture: ComponentFixture<ManifiestoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManifiestoDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManifiestoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
