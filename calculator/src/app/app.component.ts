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
  my_calc = "";
  
  nav_numbers = ['7','8','9','4','5','6','1','2','3','0','00','.'];
  nav_operators = ['/','*','-','+','='];
  nav_erases = ["C","C","C"];
  
  show_click(e){
    if (this.is_operate) {
    } if (Number(this.input_num) == 0) {
      this.input_num += e;
    }
    else {
      console.log(Number(this.input_num));
      this.input_num += e;
    }
  }
  clear_num(e){
    this.input_num = 0;
  }
  
  
  display_num(e){
    //console.log(typeof(this.result)); 
    this.result = e;
  }
  
  evaluate_arithmetic_operation(e){
    //式を計算
    
  }
  
  evaluate_alphabet(e){
    //アルファベットを評価する。
    
  }
  
}
