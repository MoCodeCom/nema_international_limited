import { Component, inject, HostListener } from '@angular/core';
import { LegalModalService } from '../../services/legal-modal.service';

@Component({
  selector: 'app-legal-modal',
  standalone: true,
  templateUrl: './legal-modal.component.html',
  styleUrl: './legal-modal.component.css',
})
export class LegalModalComponent {
  modal = inject(LegalModalService);

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.modal.close();
  }
}
