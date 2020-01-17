import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busqueda' 
})
export class BusquedaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    let resultado:any[]=[];
    for (let termino of value) {
      if (termino.name.toLowerCase().indexOf(args.toString().toLowerCase()) >=0) {
        resultado.push(termino);
        console.log(resultado);
      }
    }
    return resultado;

  }

}
