import { Component, inject, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/ui/header/header.component';
import { FooterComponent } from './shared/ui/footer/footer.component';
import { SeoConfig, SeoService } from './core/services/seo.service';
import { AnalyticsService } from './core/services/analytics.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly seoService = inject(SeoService);
  private readonly analyticsService = inject(AnalyticsService);

  private readonly routeMetadata: Record<string, SeoConfig> = {
    '/': {
      title: 'Noxolo Mandisa Mkhungo | Enterprise Java Engineer',
      description: 'Portfolio of Noxolo Mandisa Mkhungo. Showcasing enterprise Java 21, Spring Boot 3, PostgreSQL, Flyway, and systems architecture.',
      path: '/'
    },
    '/architecture': {
      title: 'Architecture & Case Studies | Noxolo Mandisa Mkhungo',
      description: 'System design blueprints, C4 container models, domain boundaries, and case studies for backend enterprise services.',
      path: '/architecture'
    },
    '/journal': {
      title: 'Engineering Journal | Noxolo Mandisa Mkhungo',
      description: 'In-depth articles covering Java persistence performance, REST API design, multi-module builds, and database connection pools.',
      path: '/journal'
    },
    '/about': {
      title: 'About Noxolo Mkhungo | Enterprise Software Engineer',
      description: 'Professional background, core enterprise capabilities, technical toolkit, and career focus of Noxolo Mandisa Mkhungo.',
      path: '/about'
    },
    '/contact': {
      title: 'Contact Noxolo Mkhungo | Professional Enquiries',
      description: 'Get in touch with Noxolo Mandisa Mkhungo for recruitment enquiries, architecture consulting, and technical collaboration.',
      path: '/contact'
    }
  };

  ngOnInit(): void {
    // 1. Initialize GA4 script and dataLayer synchronously
    this.analyticsService.init();

    // 2. Listen to router navigations (handles initial load, SSR pre-rendering, and client SPA routing)
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const path = event.urlAfterRedirects.split(/[?#]/)[0];
        const config = this.routeMetadata[path] || this.routeMetadata['/'];

        this.seoService.updateMetaTags(config);
        this.analyticsService.trackPageView(path, config.title);
      });
  }
}