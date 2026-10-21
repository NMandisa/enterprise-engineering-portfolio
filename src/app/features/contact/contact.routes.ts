import { Routes } from '@angular/router';

export const CONTACT_ROUTES: Routes = [
  {
    path: '',
    title: 'Contact & Collaboration',
    loadComponent: () => import('./pages/contact.component').then(m => m.ContactComponent)
  }
];