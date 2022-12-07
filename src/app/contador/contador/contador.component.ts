import { Component} from "@angular/core";


@Component({
    selector:"app-contador",
    template:`
    <h1>{{ Titulo }}</h1>

<h3>La base es: <strong> 5 </strong></h3>
<button (click)=" acumular(base)"> + 5 </button>

<span>{{ Numero }}</span>

<button (click)=" acumular(-base)"> - 5 </button>
    
    
    `

})
export class ContadorComponent{
    Titulo: string = 'Contador App';
  Numero: number = 10;

  base:number = 5;

  acumular(Valor:number){
    this.Numero += Valor;

  };

}