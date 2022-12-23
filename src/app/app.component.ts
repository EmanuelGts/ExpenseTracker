import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExpenseTraker';

  ResetBudget():void {
    localStorage.setItem("Budget","0");
    localStorage.setItem("gastos","0");
  }
}
