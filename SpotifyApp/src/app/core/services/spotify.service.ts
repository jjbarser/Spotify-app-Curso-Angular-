import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
// se importa el map para usarlo en el servicio y obtener solo lo que necesitamos
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  token = 'Bearer BQA1_sgHrQkUYolOcn0adBq7HZWd7QSole5JHOWR4TkJiCT9TVMJUBbnzCFOBjY7ZbadIGXzGFNQQA8Jdlc';
  constructor(private http:HttpClient) {
    console.log("Spotify service listo");
  }
  
  
   /**
    * Opción para hacer un get HTTP pero usando map
    * pienso que es mejor dejarlo mas genérico sin usar el map y que solo retorne los datos completos
    * y en el componente si validar lo que se necesite
    * @param url 
    */
  getCanciones( url:string){
    //Creando el header que necesita la petición de spotify
    const headers=new HttpHeaders({
      'Authorization': `${this.token}`
    });
    
    //le agrego la opción de header al http.get para anexar los headers que se necesitan
    //y mediante el map lo que hago es recibir toda la data pero ya filtrada para que en el component no
    // tenga que navergar hasta los items y evitar hacer algo así data.album.items
    return this.http.get(url, {headers}).pipe(map(datos=>{
      
      return datos['albums'].items;
    }));

   }
    
   /**
    * Este servicio lo volví genérico para obtener la información que necesito
    * y no tener que crear un servicio por cada petición get
    * @param url 
    */
   getArtistas( url:string){
    //Creando el header que necesita la petición de spotify
    const headers=new HttpHeaders({
      'Authorization':`${this.token}`
    });
    
    //En este caso se hace el envío de todo la dato para ser procesada en el componente
    //con el fin de que el servicio sea más genérico
    return this.http.get(url, {headers})
   }
}
