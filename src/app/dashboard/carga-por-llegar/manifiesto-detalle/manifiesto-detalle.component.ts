import { ManifiestoService } from './../../../services/manifiesto.service';  //Ruta relativa
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { ManifiestoService } from 'src/app/services/manifiesto.service';  // Ruta Absoluta

@Component({
  selector: 'app-manifiesto-detalle',
  templateUrl: './manifiesto-detalle.component.html',
  styleUrls: ['./manifiesto-detalle.component.css'],
})
export class ManifiestoDetalleComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private manifiestoService: ManifiestoService
  ) {}

  manifiestoId: string | null = null; // Para almacenar el ID manifiesto
  manifiestoDetalle: any;

  /*  Este dato es de ejemplo para ver en pantalla en manifiesto detalle
  manifiestoDetalle = {
    patente: 'AA123BB',
    chofer: 'Juan Pérez',
    enRuta: 'Ruta 1',
    desde: 'Origen',
    carga: [
      { descripcion: 'ODT XXXXXXXXXX1', cantidad: 10, peso: 50, volumen: 100 },
      { descripcion: 'ODT XXXXXXXXXX2', cantidad: 5, peso: 25, volumen: 60 },
    ],
  };
  */

  totalCantidad = 0;
  totalPeso = 0;
  totalVolumen = 0;

  calculateTotals() {
    this.totalCantidad = this.manifiestoDetalle.carga.reduce(
      (acc: number, item: { cantidad: number }) => acc + item.cantidad,
      0
    );
    this.totalPeso = this.manifiestoDetalle.carga.reduce(
      (acc: number, item: { peso: number }) => acc + item.peso,
      0
    );
    this.totalVolumen = this.manifiestoDetalle.carga.reduce(
      (acc: number, item: { volumen: number }) => acc + item.volumen,
      0
    );
  }

  /*
ngOnInit(): void {

  this.route.paramMap.subscribe((params) => {
    this.manifiestoId = params.get('id');
    // Obtener los detalles del manifiesto utilizando el manifiestoId.
  });
*/
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.manifiestoId = params.get('id');
      this.manifiestoDetalle = this.manifiestoService.getManifiestoById(
        this.manifiestoId
      );
      if (this.manifiestoDetalle) {
        this.calculateTotals();
      }
    });
  }

  //  this.calculateTotals();
  //}

  // Método para navegar hacia la ruta de "Carga por llegar"
  goBackToCargaPorLlegar(): void {
    this.router.navigate(['/dashboard/carga-por-llegar']);
  }
}
