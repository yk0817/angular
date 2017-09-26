import { Component } from '@angular/core';

@Component({
  selector: 'click-me2',
  template: `
  <button (click)="onClickMe2($event)">No! ..Click me!</button>
  {{clickMessage}}`
})
export class ClickMe2Component {
  clickMessage = '';
  clicks = 1;
  onClickMe2(event: any){
    let evtMsg = event ? ' Event target is' + event.tagName : '';
    this.clickMessage = (`Click #${this.clicks++}. ${evtMsg}`);
  }
}
