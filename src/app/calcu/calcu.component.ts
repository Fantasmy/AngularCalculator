import { Component, OnInit } from '@angular/core';
import { calculator } from './calculator';

@Component({
  selector: 'abe-calcu',
  templateUrl: './calcu.component.html',
  styleUrls: ['./calcu.component.scss']
})
export class CalcuComponent implements OnInit {

  public field1 :number;
  public field2 :number;
  public result :number;
  public calc: calculator;

  sum()
  {
    this.result = this.calc.sum(this.field1,this.field2);
  }

  substract()
  {
    this.result = this.calc.substract(this.field1,this.field2);
  }

  multiply()
  {
    this.result = this.calc.multiply(this.field1,this.field2);
  }

  divide()
  {
    this.result = this.calc.divide(this.field1,this.field2);
  }

  
  constructor() { 
    this.calc = new calculator();
  }

  ngOnInit() {
  }

}
