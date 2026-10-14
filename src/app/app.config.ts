
import {
  ApplicationConfig,
  provideZoneChangeDetection
} from '@angular/core';

import { provideRouter, TitleStrategy } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { routes } from './app.routes';
import { CustomPageTitleStrategy } from './shared/page-title-strategy/page-title-strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    {
      provide: TitleStrategy,
      useClass: CustomPageTitleStrategy
    }
  ]
};
