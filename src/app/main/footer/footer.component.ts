import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit , DoCheck  {

  titulo!: string;
  presupuesto!: number;
  gastos!: number;
  balance!: number;

  constructor() { }

  ngOnInit(): void {
    this.titulo = 'Totales';
    this.obtener_gastos();
    this.obtener_presupuesto();
    this.calcular_balance();
  }
  ngDoCheck(){
      this.presupuesto = Number(JSON.parse(localStorage.getItem('Budget') as string));
      this.calcular_balance();
   }

  obtener_gastos(){
    // TODO
    this.gastos = 0; 
  }

  obtener_presupuesto(){
    // TODO
    this.presupuesto = Number(JSON.parse(localStorage.getItem('Budget') as string));

  }

  calcular_balance(){
    this.balance = this.presupuesto - this.gastos;
  }

}
