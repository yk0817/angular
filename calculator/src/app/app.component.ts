import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'calculator';
  result = 'result';
  is_operate = false; //演算子でない場合 false

  total_num = 0;
  input_num = 0; 
  formula = "";
  
  nav_numbers = ['7','8','9','4','5','6','1','2','3','0','00','.'];
  nav_operators = ['/','*','-','+','='];
  nav_erases = ["C","C","C"];
  formula_evaluate = [];
  
  num_click(e){
    if (this.input_num == 0) {
      this.input_num = e;
    }
    else {
      this.input_num += e;
    }
  }
  
  clear_num(e){
    this.input_num = 0;
    this.total_num = 0;
  }
  
  display_num(e){
    this.result = e;
  }
  
  arithmetic_operation(e){
    //式を計算
    this.is_operate = !this.is_operate;
    if ( e == "=") {
      this.formula_evaluate.push(this.input_num);
      this.formula = this.formula_evaluate.join(" ");
      this.input_num = eval(this.formula);
      this.formula_evaluate = [];
    } else if (this.is_operate) {
      this.formula_evaluate.push(this.input_num);
      this.formula_evaluate.push(e);
      this.input_num = 0;
    } 
    else {
      this.formula_evaluate.push(this.input_num);
      this.formula_evaluate.push(e);
      this.input_num = 0;
    }
  }
}
