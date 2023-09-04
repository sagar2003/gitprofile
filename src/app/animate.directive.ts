import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAnimate]'
})
export class AnimateDirective {
  
  @HostBinding('class') classname:any;

  constructor(private elemetRef:ElementRef,private renderer:Renderer2) { }
  @Input() whichclass:string="";

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    const windowHeight = window.innerHeight;
    const boundingRectFive = this.elemetRef.nativeElement.getBoundingClientRect();
    if (boundingRectFive.bottom >=  0 && boundingRectFive.top <= windowHeight) {
      this.classname=this.whichclass;
    } else{
      this.classname="";
    }
}
}