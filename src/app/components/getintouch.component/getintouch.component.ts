import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import { LegalModalService } from '../../services/legal-modal.service';

@Component({
  selector: 'app-getintouch',
  imports: [FormsModule, RouterLink],
  templateUrl: './getintouch.component.html',
  styleUrl: './getintouch.component.css',
})
export class GetintouchComponent {
  langService = inject(LanguageService);
  legalModal  = inject(LegalModalService);

  formData = { name: '', email: '', phone: '', subject: '', message: '' };
  submitted = signal(false);
  sending   = signal(false);

  onSubmit(): void {
    if (this.sending()) return;
    this.sending.set(true);
    /* Simulate API call — replace with real HttpClient call when ready */
    setTimeout(() => {
      this.sending.set(false);
      this.submitted.set(true);
      this.formData = { name: '', email: '', phone: '', subject: '', message: '' };
    }, 1400);
  }

  resetForm(): void {
    this.submitted.set(false);
  }
}
