import { StrikeThroughDirective } from './strike-through.directive';
import { ElementRef } from '@angular/core';

describe('StrikeThroughDirective', () => {
  let elementRef: ElementRef;
  it('should create an instance', () => {
    const directive = new StrikeThroughDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
