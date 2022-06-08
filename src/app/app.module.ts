import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EligibleLoansComponent } from './eligible-loans/eligible-loans.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  
  {path:"EligibleLoans",component:EligibleLoansComponent},
  {path:"",component:HomePageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EligibleLoansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
