import { Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [authGuard] }
];
