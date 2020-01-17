import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/core/services/spotify.service';

@Component({
  selector: 'app-home-app',
  templateUrl: './home-app.component.html',
  styleUrls: ['./home-app.component.css']
})


export class HomeAppComponent implements OnInit {
  
 nuevasCanciones:any[]=[]; 
 parametroBusqueda:any='';
 url:string='/api/browse/new-releases';

 /**
  * Contructor del componente
  * @param servicio 
  */
  constructor(private servicio:SpotifyService) { 

    this.servicio.getNewRelease(this.url).subscribe(data=>
      {
        console.log(data);
        this.nuevasCanciones=data;
      });
  }
  
  
  /**
   * _Inicializador
   */
  ngOnInit() {
    
  }
 


}
