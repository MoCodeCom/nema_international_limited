import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface Country { code: string; name: string; }

/**
 * Completely isolated slider — ChangeDetectionStrategy.OnPush + no signal
 * dependencies means Angular will NEVER re-render this component after the
 * initial paint, so the CSS animation runs forever uninterrupted regardless
 * of language switches happening in the parent.
 */
@Component({
  selector: 'app-flags-slider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="flags-slider-section">
      <div class="flags-wrapper">
        <div class="flags-track">

          @for (c of countries(); track c.code) {
            <div class="flag-item">
              <img [src]="'https://flagcdn.com/w80/' + c.code + '.png'"
                   [alt]="c.name" loading="lazy" />
              <span>{{ c.name }}</span>
            </div>
          }

          @for (c of countries(); track 'dup-' + c.code) {
            <div class="flag-item" aria-hidden="true">
              <img [src]="'https://flagcdn.com/w80/' + c.code + '.png'"
                   [alt]="c.name" loading="lazy" />
              <span>{{ c.name }}</span>
            </div>
          }

        </div>
      </div>
    </section>
  `,
  styles: [`
    /*
     * direction: ltr — critical fix.
     * When the page switches to RTL (Arabic/Kurdish/Urdu), the browser reverses
     * the flex row, so items appear right-to-left and translateX(-50%) scrolls
     * them the wrong way, breaking the seamless loop.
     * Locking the host to LTR means the track always scrolls left regardless
     * of the page's dir attribute, so the marquee runs identically in all languages.
     */
    :host { display: block; direction: ltr; }

    /* ---- Outer section ---- */
    .flags-slider-section {
      background: #ffffff;
      padding: 28px 0;
      overflow: hidden;
      border-top:    1px solid rgba(0, 168, 107, 0.10);
      border-bottom: 1px solid rgba(0, 168, 107, 0.10);
    }

    /* ---- Scroll container ---- */
    .flags-wrapper {
      overflow: hidden;
      width: 100%;
      position: relative;
    }

    /* Fade edges */
    .flags-wrapper::before,
    .flags-wrapper::after {
      content: '';
      position: absolute;
      top: 0; bottom: 0;
      width: 100px;
      z-index: 2;
      pointer-events: none;
    }
    .flags-wrapper::before {
      left: 0;
      background: linear-gradient(to right, #ffffff, transparent);
    }
    .flags-wrapper::after {
      right: 0;
      background: linear-gradient(to left, #ffffff, transparent);
    }

    /* ---- Moving track ---- */
    .flags-track {
      display: flex;
      gap: 44px;
      width: max-content;
      padding: 6px 0;
      animation: scroll-flags 42s linear infinite;
    }

    /* Pause on hover so user can inspect a flag */
    .flags-track:hover {
      animation-play-state: paused;
    }

    /* ---- Individual flag card ---- */
    .flag-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
      transition: transform 0.2s;
    }

    .flag-item:hover { transform: translateY(-5px); }

    .flag-item img {
      width: 72px;
      height: 48px;
      object-fit: cover;
      border-radius: 7px;
      box-shadow: 0 3px 12px rgba(0, 0, 0, 0.14);
      border: 1px solid rgba(0, 0, 0, 0.07);
      display: block;
    }

    .flag-item span {
      font-size: 0.70rem;
      color: rgba(10, 22, 40, 0.50);
      font-weight: 600;
      white-space: nowrap;
      font-family: 'DM Sans', sans-serif;
    }

    /* ---- Keyframe (50% = one full set width because content is doubled) ---- */
    @keyframes scroll-flags {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }
  `]
})
export class FlagsSliderComponent {
  countries = input.required<Country[]>();
}
