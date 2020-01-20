import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../core/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  listado: any[] = [];
  cargando: boolean;
  constructor(private servicio: SpotifyService) {

  }

  ngOnInit() {
  }
  /**
   * Metodo buscado pero usando sin el map para que en el servicio quede mas generico
   * y así poder usar un mismo servicio para la misma funcionalidad
   * @param termino 
   */
  buscarArtista(termino: string) {
    this.cargando = true;
    if (termino) {
      let url: string = `/api/search?q=${termino}&type=artist`;
      console.log(termino);
      this.servicio.getArtistas(url).subscribe((datos: any) => {
        console.log(datos.artists.items);
        this.listado = datos.artists.items;
        this.cargando = false;
      });
    }
    //para que no salga nada en el listado y pueda limpiar el rastro que deja en el front
    //también se deja de mostrar el loading para que no moleste cuando no tenga datos en el input de busqueda
    else {
      this.listado = null;
      this.cargando = false;
    }
  }
}
