import { Directive, ElementRef, Input, OnChanges } from '@angular/core';


@Directive({
  selector: '[genStrikeThrough]'
})
export class StrikeThroughDirective implements OnChanges {

  @Input('genStrikeThrough') strikethrough: boolean;

  constructor(private el: ElementRef) { 
    this.strike();
  }

  ngOnChanges() {
    this.strike();
  }

  strike() {
    this.el.nativeElement.style.textDecoration =  this.strikethrough ? 'line-through' : '';
  }

}