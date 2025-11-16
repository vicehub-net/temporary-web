import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: '',
  standalone: true,
})
export class ExternalRedirectComponent implements OnInit {
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    const externalUrl = 'https://discord.gg/6dz8CSmNrq'; // The target URL

    // Perform the browser-level redirect
    // This stops the Angular application and loads the new URL
    window.location.href = externalUrl;
  }
}
