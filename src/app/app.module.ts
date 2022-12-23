import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router";


import { FooterComponent } from './main/footer/footer.component';
import { BodyComponent } from './main/body/body.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { LoginComponent } from './main/login/login.component';
import { SiteComponent } from './main/site/site.component';
import { MatTableModule } from '@angular/material/table';
//import { MatMenu } from '@angular/material/menu';


const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "expense-tracker", component: SiteComponent }
  //{ path: "detalle/:id", component: DetalleComponent },
  //{ path: "hero", component: HeroComponent }
];

@NgModule({
  declarations: [
    AppComponent,

    FooterComponent,
    BodyComponent,
    LoginComponent,
    SiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule ,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatMenuModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
