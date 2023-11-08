

import { Component } from '@angular/core';
import { MaterialOptionsService } from '../material-options.service';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
  
  materialOptions: string[] = [];

  
  calcular() {
    // Obtener los valores de los elementos
    const combo1 = (<HTMLSelectElement>document.getElementById('combo1')).value;
    const length1 = parseFloat((<HTMLInputElement>document.getElementById('length1')).value) || 0;
    const quantity1 = parseFloat((<HTMLInputElement>document.getElementById('quantity1')).value) || 0;

    const combo2 = (<HTMLSelectElement>document.getElementById('combo2')).value;
    const length2 = parseFloat((<HTMLInputElement>document.getElementById('length2')).value) || 0;
    const quantity2 = parseFloat((<HTMLInputElement>document.getElementById('quantity2')).value) || 0;

    const combo3 = (<HTMLSelectElement>document.getElementById('combo3')).value;
    const length3 = parseFloat((<HTMLInputElement>document.getElementById('length3')).value) || 0;
    const quantity3 = parseFloat((<HTMLInputElement>document.getElementById('quantity3')).value) || 0;

    // Inicializar el objeto para almacenar los resultados agrupados
    const resultados: { [key: string]: number } = {};


    // Verificar si al menos un material está lleno y realizar el cálculo
    if ((combo1 && (length1 > 0 || quantity1 > 0)) || 
        (combo2 && (length2 > 0 || quantity2 > 0)) || 
        (combo3 && (length3 > 0 || quantity3 > 0))) {

      // Calcular los resultados para cada material y agruparlos
      if (combo1 && (length1 > 0 || quantity1 > 0)) {
        const result1 = (length1 * quantity1) / 600;

        resultados[combo1] = (resultados[combo1] || 0) + result1;

      }

      if (combo2 && (length2 > 0 || quantity2 > 0)) {
        const result2 = (length2 * quantity2) / 600;
       
        resultados[combo2] = (resultados[combo2] || 0) + result2;
        
      }

      if (combo3 && (length3 > 0 || quantity3 > 0)) {
        const result3 = (length3 * quantity3) / 600;

        resultados[combo3] = (resultados[combo3] || 0) + result3;
        
      }

      // Construir el mensaje con los resultados
      let mensaje = '';
      for (const material in resultados) {
        if (resultados.hasOwnProperty(material)) {
          const cantidad = Math.ceil(resultados[material]);
          const desperdicioCantidad = cantidad*600-resultados[material]*600;


          console.log(resultados[material]*600);
          console.log(cantidad*600);
          //console.log(desperdicioCantidad);

          mensaje += `Se necesitan ${cantidad} ${material}. Desperdicio: ${desperdicioCantidad} cm.\n`;
        }
      }

      // Mostrar la alerta con la cadena de mensajes
      alert(mensaje);
    } else {
      // Mostrar mensaje de error si todos los materiales están vacíos
      alert('Por favor, complete al menos un material.');
    }
  }

  constructor(private materialOptionsService: MaterialOptionsService) {
    this.materialOptions = this.materialOptionsService.getOptions();
  }
}


