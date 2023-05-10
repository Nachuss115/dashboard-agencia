import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js/dist/types/index';
import { Router } from '@angular/router';
import { ManifiestoService } from 'src/app/services/manifiesto.service';
import { ChartOptions, Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-carga-por-llegar',
  templateUrl: './carga-por-llegar.component.html',
  styleUrls: ['./carga-por-llegar.component.css'],
})
export class CargaPorLlegarComponent implements OnInit {
  cargas = [
    {
      manifiesto: 'XXXXXX1',
      chofer: 'Juan Pérez',
      patente: 'AA123BB',
      cantidadODT: 10,
      cantidadBulto: 20,
      rutaCamion: 'Ruta 1',
    },
    {
      manifiesto: 'XXXXXX2',
      chofer: 'Juan Pérez',
      patente: 'AA123BB',
      cantidadODT: 35,
      cantidadBulto: 62,
      rutaCamion: 'Ruta 1',
    },
    {
      manifiesto: 'XXXXXX3',
      chofer: 'Juan Pérez',
      patente: 'AA123BB',
      cantidadODT: 40,
      cantidadBulto: 250,
      rutaCamion: 'Ruta 1',
    },
    {
      manifiesto: 'XXXXXX4',
      chofer: 'Juan Pérez',
      patente: 'AA123BB',
      cantidadODT: 16,
      cantidadBulto: 30,
      rutaCamion: 'Ruta 1',
    },
  ];

  totalValorCarga = 0;
  totalPeso = 0;
  totalBultos = 0;
  totalVolumen = 0;



  pieChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      datalabels: {
        formatter: (value: number, context: any) => {
          return value.toFixed(1) + '%';
        },
        color: 'white',
      },
    },
  };
  pieChartLabels: string[] = ['Pagada al contado', 'Por pagar'];
  pieChartType: ChartType = 'pie';
  pieChartData = [
    {
      data: [40, 60], // Inicializa los datos en 0, estos se actualizarán en calculateTotals()
      backgroundColor: ['#3cba9f', '#c45850'], // Colores personalizados para cada segmento
    },
  ];

  constructor(
    private router: Router,
    private manifiestoService: ManifiestoService
  ) {}

  //Función del click al momento de presionar el manifiesto
  onManifiestoClick(manifiestoId: string): void {
    this.router.navigate([
      '/dashboard/carga-por-llegar/manifiesto',
      manifiestoId,
    ]);
  }

  calculateTotals() {
    // Aquí podrás agregar el cálculo de los totales en función de tus datos de carga
    // Ejemplo:
    this.totalValorCarga = 10000;
    this.totalPeso = 1500;
    this.totalBultos = 40;
    this.totalVolumen = 250;

    // Calcular porcentajes de carga pagada al contado y por pagar
    // Asume que los siguientes datos provienen de tus datos de carga
    /*const cargaPagadaAlContado = 6000;
    const cargaPorPagar = 4000;

    this.pieChartData[0].data = [cargaPagadaAlContado, cargaPorPagar];
    */
    //const odtCounts = this.manifiestoService.countODTsByFormaPago();
    //this.pieChartData[0].data = [odtCounts.contado, odtCounts.porPagar];


    const odtCounts = this.manifiestoService.countODTsByFormaPago();
    const totalODTs = odtCounts.contado + odtCounts.porPagar;
    const contadoPercentage = (odtCounts.contado / totalODTs) * 100;
    const porPagarPercentage = (odtCounts.porPagar / totalODTs) * 100;
    //this.pieChartData[0].data = [contadoPercentage, porPagarPercentage];
    this.pieChartData[0].data = [odtCounts.contado, odtCounts.porPagar];
  }

  ngOnInit(): void {
    this.cargas = this.manifiestoService.getManifiestos().map(manifiesto => ({
      manifiesto: manifiesto.id,
      chofer: manifiesto.chofer,
      patente: manifiesto.patente,
      cantidadODT: manifiesto.totalODTs || 0, // Proporciona un valor predeterminado de 0 si totalCantidad es undefined
      cantidadBulto: manifiesto.totalBultos || 0, // Proporciona un valor predeterminado de 0 si totalBultos es undefined
      rutaCamion: manifiesto.rutaCamion
    }));


    Chart.register(ChartDataLabels);
    Chart.register(...registerables);

    this.calculateTotals();
  }
}
