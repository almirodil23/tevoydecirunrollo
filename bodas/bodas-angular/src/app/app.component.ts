import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { VideoComponent } from './video/video.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,VideoComponent,MainComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title = 'bodas-angular';

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      const audio = document.getElementById('backgroundAudio') as HTMLAudioElement;
      if (audio) {
        setTimeout(()=>{
          audio.play().catch(error => {
            console.log('Audio playback failed: ' + error);
 
          })},1000)

      }
    }
  }
}
