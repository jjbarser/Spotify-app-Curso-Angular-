import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  // Le decimo que desde el padre que es el search component le va a llegar
  //una variable llamada items
  @Input() items:any[]=[];
  constructor() { }
  
  ngOnInit() {
  }

}
