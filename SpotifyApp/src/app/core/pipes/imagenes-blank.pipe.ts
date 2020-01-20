import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenesBlank'
})
export class ImagenesBlankPipe implements PipeTransform {

  transform(value: any[]): string {
    let imagenNueva:string='';
    if (!value || value.length==0) {
      return imagenNueva='assets/img/noimage.png';
    }
    return value[1].url;
  }

}
