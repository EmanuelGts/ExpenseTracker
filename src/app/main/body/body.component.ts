import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  mountBudget = '0';


  constructor() { }

  ngOnInit(): void {
  }

saveBudget(startMount?: string):void {
    var saveBudgetLocalStorege = "startMount";
    this.mountBudget = saveBudgetLocalStorege;
  }
}
