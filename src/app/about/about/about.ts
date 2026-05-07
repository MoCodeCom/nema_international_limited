import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { SlideshowService } from '../../services/slideshow.service';
import { LegalModalService } from '../../services/legal-modal.service';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  langService = inject(LanguageService);
  slideshow   = inject(SlideshowService);
  legalModal  = inject(LegalModalService);
}
