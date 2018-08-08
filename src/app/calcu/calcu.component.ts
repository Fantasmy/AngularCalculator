import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abe-calcu',
  templateUrl: './calcu.component.html',
  styleUrls: ['./calcu.component.scss']
})
export class CalcuComponent implements OnInit {

  public field1 :number;
  public field2 :number;
  public result :number;

  sum()
  {
    return this.result = this.field1 + this.field2;
  }

  substract()
  {
    this.result = this.field1 - this.field2;
  }

  multiply()
  {
    this.result = this.field1 * this.field2;
  }

  divide()
  {
    this.result = this.field1 / this.field2;
  }

  
  constructor() { }

  ngOnInit() {
  }

}
