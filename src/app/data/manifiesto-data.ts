import { Manifiesto } from "../dashboard/models/manifiesto.model";

/*En esta parte se recibe los datos del manifiesto siguiendo la estructura hecha en manifiesto.model.ts */
export const MANIFIESTOS: Manifiesto[] = [
    {
      id: 'XXXXXX1',
      patente: 'AA123BB',
      chofer: 'Juan Pérez',
      enRuta: 'Ruta 1',
      desde: 'Origen',
      rutaCamion: 'Santiago-Arica',
      carga: [
        { descripcion: 'ODT XXXXXXXXXX1', cantidad: 10, peso: 50, volumen: 100, valor: 10000, FormaPago: 'Contado' },
        { descripcion: 'ODT XXXXXXXXXX2', cantidad: 5, peso: 25, volumen: 60, valor: 10000, FormaPago: 'Por pagar' },
      ],
    },
    {
      id: 'XXXXXX2',
      patente: 'AA123BB',
      chofer: 'Juan Pérez',
      enRuta: 'Ruta 1',
      desde: 'Origen',
      rutaCamion: 'Santiago-Arica',
      carga: [
        { descripcion: 'ODT YYYYYYYYYY1', cantidad: 7, peso: 35, volumen: 80, valor: 10000, FormaPago: 'Contado' },
        { descripcion: 'ODT YYYYYYYYYY2', cantidad: 12, peso: 60, volumen: 120, valor: 10000, FormaPago: 'Contado' },
      ],
    },
    {
        id: 'XXXXXX3',
        patente: 'AA123BB',
        chofer: 'Juan Pérez',
        enRuta: 'Ruta 1',
        desde: 'Origen',
        rutaCamion: 'Santiago-Arica',
        carga: [
          { descripcion: 'ODT ZZZZZZZZZZ1', cantidad: 12, peso: 65, volumen: 180, valor:20000, FormaPago: 'Por pagar' },
          { descripcion: 'ODT ZZZZZZZZZZ2', cantidad: 5, peso: 30, volumen: 40, valor: 10000, FormaPago: 'Por pagar'},
        ],
      },
      {
        id: 'XXXXXX4',
        patente: 'AA123BB',
        chofer: 'Juan Pérez',
        enRuta: 'Ruta 1',
        desde: 'Origen',
        rutaCamion: 'Santiago-Arica',
        carga: [
          { descripcion: 'ODT WWWWWWWWWW1', cantidad: 22, peso: 45, volumen: 95, valor: 10000, FormaPago: 'Por pagar' },
          { descripcion: 'ODT WWWWWWWWWW2', cantidad: 40, peso: 100, volumen: 420, valor: 10000, FormaPago: 'Por pagar' },
        ],
      },
    // Más manifiestos aquí
  ];
  