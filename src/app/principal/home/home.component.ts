import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  valor1!:number;
  valor2!:number;
  resultado!:string;
  opcion1=false;
  opcion2=false;
  opcion3=false;
  opcion4=false;

  Calcular(){
    
    this.resultado='';

    if (this.opcion1) {
      let operacion = this.valor1 + this.valor2;
      this.resultado+=`La suma es: ${operacion} `;
    }
    if (this.opcion2) {
      let operacion = this.valor1 - this.valor2;
      this.resultado+=`La resta es: ${operacion} `;
    }
    if (this.opcion3) {
      let operacion = this.valor1 * this.valor2;
      this.resultado+=`El producto es: ${operacion} `;
    }
    if (this.opcion4) {
      let operacion = this.valor1 / this.valor2;
      this.resultado+=`La división es: ${operacion} `;
    }
  }
}

