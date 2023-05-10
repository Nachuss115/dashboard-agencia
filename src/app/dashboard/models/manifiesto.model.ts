export interface Manifiesto {
    id: string;
    chofer: string;
    patente: string;
    enRuta: string;
    desde: string;
    rutaCamion: string;
    carga: Array<{
      descripcion: string;
      cantidad: number;
      peso: number;
      volumen: number;
      valor: number;
      FormaPago: string;
    }>;
    totalCantidad?: number;
    totalBultos?: number;
    totalODTs?: number;
  }
  