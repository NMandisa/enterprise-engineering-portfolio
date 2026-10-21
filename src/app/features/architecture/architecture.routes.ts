import { Routes } from '@angular/router';

export const ARCHITECTURE_ROUTES: Routes = [
  {
    path: '',
    title: 'Architecture & Case Studies',
    loadComponent: () => import('./pages/architecture.component').then(m => m.ArchitectureComponent)
  }
];