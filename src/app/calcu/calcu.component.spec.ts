import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { calculator } from './calculator';
import { CalcuComponent } from './calcu.component';

describe('Class:Calculator', () => {
  let calc: calculator;

  beforeEach(() => {
    calc = new calculator();
  });

  it('should add', () => {
    expect(calc.sum(6,3)).toEqual(9);
  });

  it('should substract', () => {
    expect(calc.substract(6,3)).toEqual(3);
  });

  it('should multiply', () => {
    expect(calc.multiply(3,3)).toEqual(9);
  });

  it('should divide', () => {
    expect(calc.divide(6,3)).toEqual(2);
  });
});
