import { Injectable } from '@angular/core';
import { MANIFIESTOS } from '../data/manifiesto-data';
import { Manifiesto } from '../dashboard/models/manifiesto.model';

@Injectable({
  providedIn: 'root',
})
export class ManifiestoService {
  constructor() {}

  /*  
  getManifiestoById(id: string | null): any {
    return MANIFIESTOS.find((manifiesto) => manifiesto.id === id);
  }
  */

  getManifiestoById(id: string | null): Manifiesto | undefined {
    const manifiesto = MANIFIESTOS.find((manifiesto) => manifiesto.id === id);

    if (manifiesto) {
      manifiesto.totalCantidad = manifiesto.carga.reduce(
        (acc: number, item: { cantidad: number }) => acc + item.cantidad,
        0
      );
      // Usa la propiedad "cantidad" como una aproximación para calcular la cantidad de bultos
      manifiesto.totalBultos = manifiesto.carga.reduce(
        (acc: number, item: { cantidad: number }) => acc + item.cantidad,
        0
      );
      // Calcular la cantidad de ODTs y asignarla a la propiedad totalODTs del manifiesto
      manifiesto.totalODTs = manifiesto.carga.length;
    }

    return manifiesto;
  }
  getManifiestos(): Manifiesto[] {
    return MANIFIESTOS;
  }

// Un metodo que ayuda a contar los que son pagados al contado y los que son por pagar
  countODTsByFormaPago(): { contado: number; porPagar: number } {
    let contado = 0;
    let porPagar = 0;
  /* En este caso el doble for más adelante se debe cambiar debido a su complejidad (O^2),
  por lo que se debe cambiar por un metodo que sea más eficiente, ya que en un futuro al ser mayor la 
  cantidad de datos esta función se puede demorar más de lo esperado */ 
    for (const manifiesto of MANIFIESTOS) {
      for (const carga of manifiesto.carga) {
        if (carga.FormaPago === 'Contado') {
          contado++;
        } else if (carga.FormaPago === 'Por pagar') {
          porPagar++;
        }
      }
    }
  
    return { contado, porPagar };
  }


}
