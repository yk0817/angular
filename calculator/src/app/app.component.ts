import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'calculator';
  result = 'result';
  show_click(e: any){
    let test;
    console.log(this);
    test = document.querySelector('[data-value]');
    console.log(test);
  }
}
