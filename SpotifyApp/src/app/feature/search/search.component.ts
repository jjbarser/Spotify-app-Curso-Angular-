import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../core/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  listado:any[]=[];
  constructor(private servicio:SpotifyService) {
    
   }

  ngOnInit() {
  }
  /**
   * Metodo buscado pero usando sin el map para que en el servicio quede mas generico
   * y así poder usar un mismo servicio para la misma funcionalidad
   * @param termino 
   */
  buscarArtista(termino:string){
    if (termino) {
      let url:string=`/api/search?q=${termino}&type=artist`;
      console.log(termino);
      this.servicio.getartistas(url).subscribe((datos:any)=>{
        console.log(datos.artists.items);
        this.listado=datos.artists.items;
      });
    }

  }
}
