import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tevoydecirunrollo';
  imagen='';
  una='assets/tres.png'
  dos='assets/dos.png'
  imagePath=''

  constructor(private cdr: ChangeDetectorRef) {}


  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      const audio = document.getElementById('backgroundAudio') as HTMLAudioElement;
      const dayOfMonth = new Date().getDate();
      if (dayOfMonth % 2 === 0) {
        this.imagePath = this.dos;
      } else {
        this.imagePath = this.una;
      }
      if (audio) {
        setTimeout(() => {
          audio.play().catch(error => {
            console.log('Audio playback failed: ' + error);
          });
        }, 1000);
      }

      
      const i = Math.floor(Math.random() * 301);
      this.imagen = `assets/captura_pantalla${i}.png`;
      
      this.cdr.detectChanges();
      const playPauseBtn = document.getElementById('playPauseBtn') as HTMLButtonElement;
      const stopBtn = document.getElementById('stopBtn') as HTMLButtonElement;
      playPauseBtn.addEventListener('click', () => {
        const playPauseIcon = playPauseBtn.querySelector('i');
        if (audio.paused) {
          audio.play();
          if(playPauseIcon)
          playPauseIcon.className = 'fas fa-pause';
        } else {
          audio.pause();
          if(playPauseIcon)
          playPauseIcon.className = 'fas fa-play';
        }
      });
  
      stopBtn.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0;
        const playPauseIcon = playPauseBtn.querySelector('i');
        if(playPauseIcon)
        playPauseIcon.className = 'fas fa-play';
      });

      document.body.addEventListener('click',()=>{
        const i = Math.floor(Math.random() * 301);
        this.imagen = `assets/captura_pantalla${i}.png`;
      })
    }
  }
  
}