import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { LegalModalService } from '../../services/legal-modal.service';

@Component({
  selector: 'app-ourservices.component',
  imports: [RouterLink],
  templateUrl: './ourservices.component.html',
  styleUrl: './ourservices.component.css',
})
export class OurservicesComponent {
  langService = inject(LanguageService);
  legalModal  = inject(LegalModalService);
}
