import { Routes } from '@angular/router';

export const JOURNAL_ROUTES: Routes = [
  {
    path: '',
    title: 'Engineering Journal',
    loadComponent: () => import('./pages/journal-list/journal-list.component').then(m => m.JournalListComponent)
  },
  {
    path: ':slug',
    loadComponent: () => import('./pages/journal-detail/journal-detail.component').then(m => m.JournalDetailComponent)
  }
];