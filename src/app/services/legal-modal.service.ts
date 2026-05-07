import { Injectable, signal } from '@angular/core';

export type LegalModalType = 'privacy' | 'terms';

@Injectable({ providedIn: 'root' })
export class LegalModalService {
  readonly isOpen  = signal(false);
  readonly type    = signal<LegalModalType>('privacy');

  open(type: LegalModalType): void {
    this.type.set(type);
    this.isOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  close(): void {
    this.isOpen.set(false);
    document.body.style.overflow = '';
  }
}
