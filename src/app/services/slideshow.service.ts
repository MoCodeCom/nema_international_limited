import { Injectable, OnDestroy, signal, NgZone, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SlideshowService implements OnDestroy {

  private zone = inject(NgZone);

  readonly images: string[] = [
    'images/homeImages/1.jpg',
    'images/homeImages/2.jpg',
    'images/homeImages/3.jpg',
    'images/homeImages/4.jpg',
    'images/homeImages/5.jpg',
    'images/homeImages/6.jpg',
    'images/homeImages/7.jpg',
  ];

  // signal() ensures Angular's change detection updates the template automatically
  readonly activeIndex = signal(0);

  private timer: ReturnType<typeof setInterval> | undefined = undefined;

  constructor() {
    // Run inside Angular zone so change detection fires on every tick
    this.zone.runOutsideAngular(() => {
      this.timer = setInterval(() => {
        this.zone.run(() => {
          this.activeIndex.update(i => (i + 1) % this.images.length);
        });
      }, 5000);
    });
  }

  ngOnDestroy(): void {
    if (this.timer !== undefined) {
      clearInterval(this.timer);
    }
  }
}
