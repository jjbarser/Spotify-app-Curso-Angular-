import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../core/services/spotify.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  listadoEspecifico: any[] = [];
  listadoTracks:any []=[];
  cargando:boolean=false;
  constructor(private servicio: SpotifyService,
    private activarRuta: ActivatedRoute) {

      
     }

  ngOnInit() {
    this.cargando=true;
    this.activarRuta.params.subscribe(data => {
      let id = data.id;
      let url = `/api/artists/${id}`;
      
      //console.log(url);
      this.servicio.getArtistas(url).subscribe((data: any) => {
        console.log(data);
        this.cargando=false;
        this.listadoEspecifico = data;
      });
      
      this.getTraks(id);

    });

    
  }
  
  /**
   * Para este caso si se tuvo que mapear mediante el map la salida 
   * ya que el dato que se obtuvo viene encapsulado dentro de un objeto y no sale directamente el arreglo que se quiere
   * @param id 
   */
  getTraks(id:string){
    let topTraksUrl=`/api/artists/${id}/top-tracks?country=es`;
    this.servicio.getArtistas(topTraksUrl).pipe(map(datos=>{
      console.log(datos);
      return datos['tracks'];
    })).subscribe(tracks=>{
      console.log(tracks);
      this.listadoTracks=tracks;
    },(errorServicio)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Error no conecta con el servicio de obtención de tracks por ${errorServicio.message}`,
      });
      this.cargando=false;
    });
  }

}
