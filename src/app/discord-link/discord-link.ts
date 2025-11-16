import { Component, OnInit } from '@angular/core';

const DISCORD_URL = 'https://discord.gg/6dz8CSmNrq';

@Component({
  selector: 'discord-link',
  imports: [],
  templateUrl: './discord-link.html'
})
export class DiscordLink implements OnInit {
  ngOnInit(): void {
    // Perform the browser-level redirect
    // This stops the Angular application and loads the new URL
    window.location.href = DISCORD_URL;
  }
}
