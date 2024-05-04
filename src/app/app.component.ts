import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calculator';

  currentNumber: string = '';
  numberOne: string = '';
  numberTwo: string = '';
  symbol: string = '';
  toDisplay: string = '';
  toDeleteLastItem: string = '';
  freeNumber: string = '';
  toCorrectDisplay: string = '';
  changeSymbol: boolean = false;
  forSecondNumber: boolean = false;
  ifSymbol: boolean = false;

  onSmile(): void {
    alert('Hello!!! My creator is Mihail Yankovskyi! And I am a calculator for two numbers!');
  }

  onNine():void {
    this.toCorrectDisplay = this.toDisplay;
    this.toDeleteLastItem = this.currentNumber;
    this.currentNumber += '9';
    this.toDisplay += '9';
    this.freeNumber += '9';
  }

  onEight():void {
    this.toCorrectDisplay = this.toDisplay;
    this.toDeleteLastItem = this.currentNumber;
    this.currentNumber += '8';
    this.toDisplay += '8';
    this.freeNumber += '8';
  }

  onSeven():void {
    this.toCorrectDisplay = this.toDisplay;
    this.toDeleteLastItem = this.currentNumber;
    this.currentNumber += '7';
    this.toDisplay += '7';
    this.freeNumber += '7';
  }

  onSix():void {
    this.toCorrectDisplay = this.toDisplay;
    this.toDeleteLastItem = this.currentNumber;
    this.currentNumber += '6';
    this.toDisplay += '6';
    this.freeNumber += '6';
  }

  onFive():void {
    this.toCorrectDisplay = this.toDisplay;
    this.toDeleteLastItem = this.currentNumber;
    this.currentNumber += '5';
    this.toDisplay += '5';
    this.freeNumber += '5';
  }

  onFour():void {
    this.toCorrectDisplay = this.toDisplay;
    this.toDeleteLastItem = this.currentNumber;
    this.currentNumber += '4';
    this.toDisplay += '4';
    this.freeNumber += '4';
  }

  onThree():void {
    this.toCorrectDisplay = this.toDisplay;
    this.toDeleteLastItem = this.currentNumber;
    this.currentNumber += '3';
    this.toDisplay += '3';
    this.freeNumber += '3';
  }

  onTwo():void {
    this.toCorrectDisplay = this.toDisplay;
    this.toDeleteLastItem = this.currentNumber;
    this.currentNumber += '2';
    this.toDisplay += '2';
    this.freeNumber += '2';
  }

  onOne():void {
    this.toCorrectDisplay = this.toDisplay;
    this.toDeleteLastItem = this.currentNumber;
    this.currentNumber += '1';
    this.toDisplay += '1';
    this.freeNumber += '1';
  }

  onZero():void {
    this.toCorrectDisplay = this.toDisplay;
    this.toDeleteLastItem = this.currentNumber;
    this.currentNumber += '0';
    this.toDisplay += '0';
    this.freeNumber += '0';
  }

  onPoint():void {
    this.toCorrectDisplay = this.toDisplay;
    this.toDeleteLastItem = this.currentNumber;
    this.currentNumber += '.';
    this.toDisplay += '.';
    this.freeNumber += '.';
  }

  onC():void {
    this.currentNumber = '';
    this.numberOne = '';
    this.numberTwo = '';
    this.toDisplay = '';
    this.toDeleteLastItem = '';
    this.freeNumber = '';
    this.toCorrectDisplay = '';
    this.changeSymbol = false;
    this.forSecondNumber = false;
    this.ifSymbol = false;
  }

  onPlus():void {
    this.toCorrectDisplay = this.toDisplay;
    this.toDeleteLastItem = this.currentNumber;
    this.numberOne = this.currentNumber;
    this.currentNumber = '';
    this.symbol = '+';
    this.toDisplay += this.symbol;
    this.ifSymbol = true;
  }

  onMinus():void {
    this.toCorrectDisplay = this.toDisplay;
    this.toDeleteLastItem = this.currentNumber;
    this.numberOne = this.currentNumber;
    this.currentNumber = '';
    this.symbol = '-';
    this.toDisplay += this.symbol;
    this.ifSymbol = true;
  }

  onMultiply():void {
    this.toCorrectDisplay = this.toDisplay;
    this.toDeleteLastItem = this.currentNumber;
    this.numberOne = this.currentNumber;
    this.currentNumber = '';
    this.symbol = '*';
    this.toDisplay += this.symbol;
    this.ifSymbol = true;
  }

  onDivide():void {
    this.toCorrectDisplay = this.toDisplay;
    this.toDeleteLastItem = this.currentNumber;
    this.numberOne = this.currentNumber;
    this.currentNumber = '';
    this.symbol = '/';
    this.toDisplay += this.symbol;
    this.ifSymbol = true;
  }

  deletePreviousNumber(): void {
    if(this.ifSymbol === false) {
      this.currentNumber = this.toDeleteLastItem;
      this.toDisplay = this.toDeleteLastItem;
    } else {
      this.currentNumber = this.toDeleteLastItem;
      this.toDisplay = this.toCorrectDisplay;
    }
  }

  onChangeSymbol():void {
    this.changeSymbol = !this.changeSymbol;
    let addAnotherSymblo: string = '-' + this.currentNumber;
    // let addAnotherSymbolWithBrackets = this.toDisplay + '(-';


      if(this.numberOne === '') {
        if(this.changeSymbol === true) {
          this.currentNumber = addAnotherSymblo;
          this.toDisplay = this.currentNumber;
        } else {
          this.currentNumber = this.freeNumber;
          this.toDisplay = this.freeNumber;
        }
      } else {
        // this.currentNumber = addAnotherSymbolWithBrackets;
        // this.toDisplay = addAnotherSymbolWithBrackets;
        this.forSecondNumber = !this.forSecondNumber;
    }
  }

  onEqual() {
    let answer: number = 0;
    // console.log(this.currentNumber);
    this.numberTwo = this.currentNumber;

    // if(this.forSecondNumber === true) {
    //   this.currentNumber += ')';
    // }
    // console.log(this.currentNumber);

    if(this.symbol === '+') {
      answer = Number(this.numberOne) + Number(this.numberTwo);
    } if(this.symbol === '-') {
      answer = Number(this.numberOne) - Number(this.numberTwo);
    } if(this.symbol === '*') {
      answer = Number(this.numberOne) * Number(this.numberTwo);
    } if(this.symbol === '/') {
      answer = Number(this.numberOne) / Number(this.numberTwo);
    }

    let answerOnDisplay = answer.toString();
    this.toDisplay = answerOnDisplay;
    answer = 0;
    this.currentNumber = answerOnDisplay;
    this.numberOne = '';
    this.numberTwo = '';
  }

}
