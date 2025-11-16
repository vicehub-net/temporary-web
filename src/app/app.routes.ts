import { Routes } from '@angular/router';
import { DiscordLink } from './discord-link/discord-link';
import { AppComponent } from './app';

export const routes: Routes = [
  {
    path: 'discord',
    component: DiscordLink,
    pathMatch: 'full' // Ensures only '/discord' matches, not '/discord/something',
  },
];
