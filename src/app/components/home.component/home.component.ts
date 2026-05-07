import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { FlagsSliderComponent } from '../flags-slider/flags-slider.component';
import { LegalModalService } from '../../services/legal-modal.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, FlagsSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  langService  = inject(LanguageService);
  legalModal   = inject(LegalModalService);

  readonly countries = [
    { code: 'sa', name: 'Saudi Arabia' },
    { code: 'ae', name: 'UAE'          },
    { code: 'kw', name: 'Kuwait'       },
    { code: 'qa', name: 'Qatar'        },
    { code: 'bh', name: 'Bahrain'      },
    { code: 'om', name: 'Oman'         },
    { code: 'jo', name: 'Jordan'       },
    { code: 'iq', name: 'Iraq'         },
    { code: 'lb', name: 'Lebanon'      },
    { code: 'ps', name: 'Palestine'    },
    { code: 'ye', name: 'Yemen'        },
    { code: 'sy', name: 'Syria'        },
    { code: 'tr', name: 'Turkey'       },
    { code: 'eg', name: 'Egypt'        },
    { code: 'ly', name: 'Libya'        },
    { code: 'tn', name: 'Tunisia'      },
    { code: 'dz', name: 'Algeria'      },
    { code: 'ma', name: 'Morocco'      },
    { code: 'sd', name: 'Sudan'        },
    { code: 'so', name: 'Somalia'      },
    { code: 'pk', name: 'Pakistan'     },
  ];
}
