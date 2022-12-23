
import { Component, DoCheck, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Budget } from '../models/budget';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit , DoCheck {

  budgetArray : Array<Budget> = [
    {id:1 ,name: "Gastos de casa", category: "Familia", amount: 4000},
    {id:2 ,name: "Gastos de familia", category: "Familia", amount: 5000},
    {id:3 ,name: "Gastos de mascotas", category: "Mascotas", amount: 7000}
  ]

  displayedColumns: string[] = ['id', 'name', 'category', 'amount'];

  selectedBudget: Budget = new Budget();

  mountBudget = '0';
  mountSave = true;
  gastos!: number;
  botonesVisible!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.budgetArray;
    this.botonesVisible = true;
    this.updateGastos();
  }

  ngDoCheck(){
    this.budgetArray;
   var budget = Number(JSON.parse(localStorage.getItem('Budget') as string));
    if(budget == 0){
      this.mountSave = true;
    }else{
      this.mountSave = false;
    }
  }

  saveBudget(startMount: string):void {
    //Seting budget for starting the App
    localStorage.setItem("Budget", startMount);
  }

  updateGastos(){
    this.gastos = 0;

    for (let item of this.budgetArray) {
      this.gastos += item.amount;
    }

    localStorage.setItem("gastos", this.gastos.toString());
  }

  delete(buddget: Budget){
    this.selectedBudget = buddget;
    this.budgetArray = this.budgetArray.filter(x => x != this.selectedBudget);
    this.selectedBudget = new Budget;
    this.updateGastos();
  }

  OpenOrEdit(buddget: Budget){
    this.selectedBudget = buddget;
  }

  AddOrEdit(){
    if (this.selectedBudget.id === 0) {
      this.selectedBudget.id = this.budgetArray.length + 1;
      this.budgetArray.push(this.selectedBudget);
      this.updateGastos();
    }

    this.selectedBudget = new Budget();
  }

  public descargar(){
    this.botonesVisible = false;
    this.descargarPdf();
  }

  @ViewChild('content') content!: ElementRef;
  @ViewChild('totales') totales!: ElementRef;
  async descargarPdf(){  
    const ancho = 208;
    let posicion = 0;
    let urlRegistros!: string;
    let alturaRegistros: number = 0;

    await html2canvas(this.content.nativeElement).then((canvas) => {
      alturaRegistros = (canvas.height * ancho) / canvas.width;
      urlRegistros = canvas.toDataURL('image/png'); 
      this.botonesVisible = true;
    });

    let pdf = new jsPDF('p', 'mm', 'a4');
    pdf.addImage(urlRegistros, 'PNG', 0, posicion, ancho, alturaRegistros);
    posicion = alturaRegistros + 10;
    pdf.text('Totales', 10, posicion);
    posicion+=20;
    let presupuesto = Number(JSON.parse(localStorage.getItem('Budget') as string));
    let gastos = Number(JSON.parse(localStorage.getItem('gastos') as string));
    let balance = presupuesto - gastos;
    pdf.text(`Presupuesto ${presupuesto}  Gastos ${gastos}   Balance ${balance}  `, 10, posicion);

    pdf.save('expense-tracker.pdf');
  }  
}
