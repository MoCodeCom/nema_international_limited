import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LanguageService, Language } from '../../services/language.service';
import { LegalModalComponent } from '../legal-modal/legal-modal.component';

@Component({
  selector: 'app-main',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, LegalModalComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  langService = inject(LanguageService);

  readonly languages: Language[] = ['EN', 'AR', 'KU', 'UR'];

  setLanguage(lang: Language): void {
    this.langService.setLanguage(lang);
  }
}
