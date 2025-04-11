import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
  },
  {
    path: 'Transaction',
    loadComponent: () =>
      import('./pages/transaction/transaction.component').then(
        (c) => c.TransactionComponent
      ),
  },
];
