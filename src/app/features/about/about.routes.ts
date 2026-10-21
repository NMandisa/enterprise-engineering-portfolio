import { Routes } from '@angular/router';

export const ABOUT_ROUTES: Routes = [
  {
    path: '',
    title: 'About & Experience',
    loadComponent: () => import('./pages/about.component').then(m => m.AboutComponent)
  }
];