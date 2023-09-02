import { Component, HostListener, VERSION } from '@angular/core';
import { trigger, sequence, animate, transition, style, state } from '@angular/animations';

@Component({
  selector: 'app-about',
  animations: [
    trigger('openClose', [
        // ...
        state('open', style({
            height: '200px',
            opacity: 1,
            backgroundColor: 'yellow'
        })),
        state('closed', style({
            height: '100px',
            opacity: 0.8,
            backgroundColor: '#c6ecff'
        })),
        transition('open => closed', [
            animate('1s')
        ]),
        transition('closed => open', [
            animate('0.5s')
        ]),
    ]),
],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  activeTopClass: boolean;
  topSection: string;
  constructor(){
    this.activeTopClass=false;
    this.topSection="";
  }
  @HostListener('window:scroll', ['$event']) 
  doSomething(event:any) {
          if (window.innerWidth > 700) {
                  if (window.pageYOffset >= 357) {
                          this.activeTopClass = true;
                          this.topSection = "slide-left";
                  }
           }
   }
    
}
