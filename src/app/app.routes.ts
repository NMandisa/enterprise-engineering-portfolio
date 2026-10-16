import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Overview | Noxolo Mandisa Mkhungo'
  },
  {
    path: 'architecture',
    loadComponent: () =>
      import('./pages/architecture/architecture.component').then(m => m.ArchitectureComponent),
    title: 'Architecture & Case Studies'
  },
  {
    path: 'journal',
    loadComponent: () =>
      import('./pages/journal/journal.component').then(m => m.JournalComponent),
    title: 'Engineering Journal | Technical Articles'
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About & Experience'
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact | Noxolo Mandisa Mkhungo'
  },
  {
    path: '**',
    redirectTo: ''
  }
];