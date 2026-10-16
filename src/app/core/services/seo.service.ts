import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoConfig {
  title: string;
  description: string;
  path?: string;
  ogType?: 'website' | 'article';
  image?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly siteName = 'Noxolo Mandisa Mkhungo';
  private readonly defaultBaseUrl = 'https://noxolomandisamkhungo.co.za';
  private readonly defaultOgImage = 'https://noxolomandisamkhungo.co.za/assets/og-preview.png';

  updateMetaTags(config: SeoConfig): void {
    // 1. Set explicit document title
    this.titleService.setTitle(config.title);

    // 2. Primary Meta Description & Author
    this.metaService.updateTag({ name: 'description', content: config.description });
    this.metaService.updateTag({ name: 'author', content: 'Noxolo Mandisa Mkhungo' });

    // 3. Clean & Normalized Canonical URL
    const canonicalUrl = this.buildCanonicalUrl(config.path);
    this.setCanonicalUrl(canonicalUrl);

    // 4. Open Graph Meta Tags
    const ogImageUrl = config.image || this.defaultOgImage;
    this.metaService.updateTag({ property: 'og:site_name', content: this.siteName });
    this.metaService.updateTag({ property: 'og:title', content: config.title });
    this.metaService.updateTag({ property: 'og:description', content: config.description });
    this.metaService.updateTag({ property: 'og:url', content: canonicalUrl });
    this.metaService.updateTag({ property: 'og:type', content: config.ogType || 'website' });
    this.metaService.updateTag({ property: 'og:image', content: ogImageUrl });

    // 5. Twitter Card Meta Tags
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: config.title });
    this.metaService.updateTag({ name: 'twitter:description', content: config.description });
    this.metaService.updateTag({ name: 'twitter:image', content: ogImageUrl });
  }

  private buildCanonicalUrl(path: string = ''): string {
    const cleanPath = path.split(/[?#]/)[0].replace(/^\/+|\/+$/g, '');
    return cleanPath
      ? `${this.defaultBaseUrl}/${cleanPath}`
      : `${this.defaultBaseUrl}/`;
  }

  private setCanonicalUrl(url: string): void {
    let link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}