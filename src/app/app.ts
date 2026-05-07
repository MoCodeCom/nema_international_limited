import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlideshowService } from './services/slideshow.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  slideshow = inject(SlideshowService);
}
