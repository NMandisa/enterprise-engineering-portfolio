import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Overview'
  },
  {
    path: 'architecture',
    loadComponent: () =>
      import('./pages/architecture/architecture.component').then(m => m.ArchitectureComponent),
    title: 'Architecture & Case Studies'
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About & Resume'
  },
  {
    path: '**',
    redirectTo: ''
  }
];