import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private readonly platformId = inject(PLATFORM_ID);
  
  // Replace G-XXXXXXXXXX with your actual GA4 Measurement ID when property is created
  private readonly measurementId = 'G-XXXXXXXXXX'; 
  private isInitialized = false;

  init(): void {
    if (!isPlatformBrowser(this.platformId) || this.isInitialized) {
      return;
    }

    // Initialize dataLayer and stub function synchronously before script injection
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
    
    // Disable default automatic page views to prevent double counting in SPA
    window.gtag('config', this.measurementId, { send_page_view: false });

    // Load Google Tag script asynchronously
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
    document.head.appendChild(script);

    this.isInitialized = true;
  }

  trackPageView(path: string, title?: string): void {
    if (!isPlatformBrowser(this.platformId) || !this.isInitialized) {
      return;
    }

    const cleanPath = path.split(/[?#]/)[0];
    window.gtag('event', 'page_view', {
      page_location: `https://noxolomandisamkhungo.co.za${cleanPath}`,
      page_path: cleanPath,
      page_title: title || document.title
    });
  }

  trackCustomEvent(eventName: string, params: Record<string, any> = {}): void {
    if (!isPlatformBrowser(this.platformId) || !this.isInitialized) {
      return;
    }

    window.gtag('event', eventName, params);
  }
}