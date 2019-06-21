import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  @Input() defaultColor: string = 'transparent';
  // tslint:disable-next-line:no-input-rename no-inferrable-types
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    /* this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue'); */
  }

  @HostListener('mouseenter') mouseover (eventData: Event) {
    /* this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue'); */
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave (eventData: Event) {
    /* this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent'); */
    this.backgroundColor = this.defaultColor;
  }

}
