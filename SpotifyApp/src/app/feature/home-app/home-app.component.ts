import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/core/services/spotify.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-home-app',
  templateUrl: './home-app.component.html',
  styleUrls: ['./home-app.component.css']
})


export class HomeAppComponent implements OnInit {
  
 nuevasCanciones:any[]=[]; 
 parametroBusqueda:any='';
 error:boolean=false;

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
      }, (errorServicio)=>{
        console.log(errorServicio);
        //Error con SweetAlert2 más elegante
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Error no conecta con el servicio por ${errorServicio.error.error.message}  ${errorServicio.error.error.status}`,
        });
        this.error=true;
        //manejando el error con HTML para que se muestre un cadrito rojo en la página
        this.cargando=false;
      });
  }
  
  
  /**
   * _Inicializador
   */
  ngOnInit() {
    
  }
 


}
