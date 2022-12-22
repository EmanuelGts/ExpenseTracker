
import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit , DoCheck {

  mountBudget = '0';
  mountSave = true;
  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit start" + this.mountBudget);

     console.log("ngOnInit end " + this.mountBudget);
  }

  ngDoCheck(){
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
}
