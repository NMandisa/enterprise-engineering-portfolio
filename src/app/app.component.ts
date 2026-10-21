import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AnalyticsService } from './core/analytics/analytics.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly analyticsService = inject(AnalyticsService);
  private readonly titleService = inject(Title);
  private readonly platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    // Only execute analytics and DOM tracking in the browser environment
    if (isPlatformBrowser(this.platformId)) {
      this.analyticsService.init();

      this.router.events
        .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => {
          const path = event.urlAfterRedirects.split(/[?#]/)[0];
          // Use Angular Title service instead of raw document.title
          const pageTitle = this.titleService.getTitle();
          this.analyticsService.trackPageView(path, pageTitle);
        });
    }
  }
}