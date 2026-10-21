import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      {
        path: '',
        loadChildren: () => import('./features/home/home.routes').then(m => m.HOME_ROUTES)
      },
      {
        path: 'journal',
        loadChildren: () => import('./features/journal/journal.routes').then(m => m.JOURNAL_ROUTES)
      },
      {
        path: 'architecture',
        loadChildren: () => import('./features/architecture/architecture.routes').then(m => m.ARCHITECTURE_ROUTES)
      },
      {
        path: 'about',
        loadChildren: () => import('./features/about/about.routes').then(m => m.ABOUT_ROUTES)
      },
      {
        path: 'contact',
        loadChildren: () => import('./features/contact/contact.routes').then(m => m.CONTACT_ROUTES)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];