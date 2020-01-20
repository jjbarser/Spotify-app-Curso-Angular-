import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../core/services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  listadoEspecifico: any[] = [];
  constructor(private servicio: SpotifyService,
    private activarRuta: ActivatedRoute) { }

  ngOnInit() {
    this.activarRuta.params.subscribe(data => {
      let id = data.id;
      let url = `/api/artists/${id}`;
      //console.log(url);
      this.servicio.getArtistas(url).subscribe((data: any) => {
        console.log(data);
        this.listadoEspecifico = data;
      });
    });
  }



}
