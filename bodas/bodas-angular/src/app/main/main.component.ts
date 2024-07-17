import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import {OnInit} from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private renderer: Renderer2, private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
  /*  if (isPlatformBrowser(this.platformId)) {
      function isVisible(elm) {
        var rect = elm.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
      }
      
      // cuando se carga la página...
      window.addEventListener('DOMContentLoaded', (ev0) => {
              // asignamos un evento scroll...
        window.addEventListener('scroll', (ev1) => {
                      // y a todos los elementos con la clase paused...
          document.querySelectorAll(".text1").forEach(elm => {
            if (isVisible(elm)) // que sean visibles...
            setTimeout(() => {
              elm.classList.add("slide-in-active"); // les quitamos la clase paused
            }, 1000);
              
          });
          document.querySelectorAll(".images1").forEach(elm => {
            if (isVisible(elm)) // que sean visibles...
            setTimeout(() => {
              elm.classList.add("animated"); // les quitamos la clase paused
            }, 1000);
              
          })
        });
      });
    }}
*/
  }   
}