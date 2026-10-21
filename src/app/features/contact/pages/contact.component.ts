import { Component, inject } from '@angular/core';
import { AnalyticsService } from '../../../core/analytics/analytics.service';
import { ContactChannel, EngagementCategory } from '../models/contact.model';
import { CONTACT_CHANNELS, ENGAGEMENT_CATEGORIES } from '../data/contact.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private readonly analyticsService = inject(AnalyticsService);

  readonly channels: ContactChannel[] = CONTACT_CHANNELS;
  readonly engagementCategories: EngagementCategory[] = ENGAGEMENT_CATEGORIES;

  readonly emailAddress = 'contact@noxolomandisamkhungo.co.za';
  readonly linkedinUrl = 'https://linkedin.com/in/NoxoloMkhungo';
  readonly githubUrl = 'https://github.com/NMandisa';

  selectedCategoryId = 'mentorship';

  selectCategory(categoryId: string): void {
    this.selectedCategoryId = categoryId;
    this.analyticsService.trackCustomEvent('select_engagement_category', {
      category_id: categoryId
    });
  }

  get activeCategory(): EngagementCategory {
    return (
      this.engagementCategories.find(c => c.id === this.selectedCategoryId) ||
      this.engagementCategories[0]
    );
  }

  get formattedMailtoLink(): string {
    const category = this.activeCategory;
    const subject = encodeURIComponent(`Enquiry: ${category.title}`);
    const body = encodeURIComponent(
      `Hi Noxolo,\n\nI am reaching out regarding a potential ${category.title.toLowerCase()} engagement.\n\n` +
      `Organization / Institution:\n` +
      `Proposed Date / Timeframe:\n` +
      `Format (Online / In-Person):\n` +
      `Brief Description & Objectives:\n\n` +
      `Kind regards,`
    );
    return `mailto:${this.emailAddress}?subject=${subject}&body=${body}`;
  }

  trackContactClick(channel: 'email' | 'linkedin' | 'github'): void {
    this.analyticsService.trackCustomEvent('contact_click', {
      channel_type: channel,
      selected_category: this.selectedCategoryId
    });
  }
}