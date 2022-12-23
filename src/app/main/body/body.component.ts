
import { Component, DoCheck, OnInit } from '@angular/core';
import { Budget } from '../models/budget';


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
  constructor() { }

  ngOnInit(): void {
    this.budgetArray;
    console.log("ngOnInit start" + this.mountBudget);

     console.log("ngOnInit end " + this.mountBudget);
  }

  ngDoCheck(){
    // this.AddOrEdit();
    this.budgetArray;
   var budget = Number(JSON.parse(localStorage.getItem('Budget') as string));
  //var budget =  JSON.parse(localStorage.getItem('Budget') as string);
    if(budget == 0){
      this.mountSave = true;
      console.log("ngDoCheck true " + budget);
    }else{
      this.mountSave = false;
      console.log("ngDoCheck False" + budget);
    }
  }

saveBudget(startMount: string):void {
    //Seting budget for starting the App
    localStorage.setItem("Budget", startMount);

  }

  AddOrEdit(){
    // localStorage.setItem("Gastos",this.budgetArray);
    this.selectedBudget.id = this.budgetArray.length + 1;
    this.budgetArray.push(this.selectedBudget);
    console.log("Inicia el metodo");
    console.log( JSON.stringify(this.selectedBudget));

    this.selectedBudget = new Budget();
    
  }
}
