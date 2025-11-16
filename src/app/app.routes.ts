import { Routes } from '@angular/router';
import { ExternalRedirectComponent } from './external-redirect/external-redirect.component';

export const routes: Routes = [
  {
    path: 'discord',
    component: ExternalRedirectComponent,
    pathMatch: 'full' // Ensures only '/discord' matches, not '/discord/something'
  },
];
