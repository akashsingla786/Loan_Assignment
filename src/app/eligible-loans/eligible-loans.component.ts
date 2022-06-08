import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligible-loans',
  templateUrl: './loans.html',
  styleUrls: ['./eligible-loans.component.css']
})
export class EligibleLoansComponent implements OnInit {
lamount=0;
lyear=0;
result=0;
  constructor() { }

  ngOnInit(): void {
  }
  home():void{
    // console.log(super.lamount);
    console.log(this.lamount);
    this.result=this.lamount+(this.lamount*this.lyear*10)/100;
   } 
   student():void{
    // console.log(super.lamount);
    console.log(this.lamount);
    this.result=this.lamount+(this.lamount*this.lyear*8)/100;
   } 
   personal():void{
    // console.log(super.lamount);
    console.log(this.lamount);
    this.result=this.lamount+(this.lamount*this.lyear*12)/100;
   } 
}
