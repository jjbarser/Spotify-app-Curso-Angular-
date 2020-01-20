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
 cargando:boolean;

 /**
  * Contructor del componente
  * @param servicio 
  */
  constructor(private servicio:SpotifyService) { 
    //empieza a cargar la data, entonces empieza en true el cargando
    this.cargando=true;
    this.servicio.getCanciones(this.url).subscribe(data=>
      {
        console.log(data);
        this.nuevasCanciones=data;
        //cuando ya termine de obtener la data para a ser false para dejarse de mostrar
        this.cargando=false;
      });
  }
  
  
  /**
   * _Inicializador
   */
  ngOnInit() {
    
  }
 


}
