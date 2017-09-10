import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'calculator';
  result = 'result';
  nav_numbers = ['7','8','9','4','5','6','1','2','3','0','00','.'];
  nav_operators = ['/','*','-','+','='];
  nav_erases = ["CE","CA","DEL"];
  show_click(e: any){
    console.log(this);
  }
}
