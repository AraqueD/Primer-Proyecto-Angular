import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

  Heroes:string[] = ["Spiderman", "Iroman", "hulk", "Thor", "Capitan America"];
  heroeBorrado:string = "";

  borrarHeroe(){
  this.heroeBorrado = this.Heroes.shift() || "";
  }
}
 