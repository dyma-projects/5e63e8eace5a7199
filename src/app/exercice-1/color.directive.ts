import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  constructor(private el: ElementRef) {}

  @HostListener('window:keydown.ArrowLeft', ['$event'])
  private onKeyArrowLeft() {
    this.color('blue');
  }

  @HostListener('window:keydown.ArrowRight', ['$event'])
  private onKeyArrowRight() {
    this.color('red');
  }

  @HostListener('window:keydown.ArrowUp', ['$event']) private onKeyArrowUp() {
    this.color('purple');
  }

  @HostListener('window:keydown.ArrowDown', ['$event']) private ArrowDown() {
    this.color('green');
  }

  @HostBinding('class') private class: string;

  private color(color: string) {
    this.class = color;
  }
}
