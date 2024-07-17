import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const audio = document.getElementById('backgroundAudio') as HTMLAudioElement;
      const playPauseBtn = document.getElementById('playPauseBtn') as HTMLButtonElement;
      const stopBtn = document.getElementById('stopBtn') as HTMLButtonElement;
  
      playPauseBtn.addEventListener('click', () => {
        const playPauseIcon = playPauseBtn.querySelector('i');
        if (audio.paused) {
          audio.play();
          playPauseIcon.className = 'fas fa-pause';
        } else {
          audio.pause();
          playPauseIcon.className = 'fas fa-play';
        }
      });
  
      stopBtn.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0;
        const playPauseIcon = playPauseBtn.querySelector('i');
        playPauseIcon.className = 'fas fa-play';
      });
    
      const header = document.getElementsByClassName('container-header')[0];

      const onScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        if (scrollTop > 50) {
          header.classList.add('non-top');
          console.log('Scrolled more than 50px');
        } else {
          header.classList.remove('non-top');
        }
      };

      window.onscroll = onScroll;
    }
  }
}