import { Component, inject } from '@angular/core';
import { AnalyticsService } from '../../core/services/analytics.service';

export interface EngagementCategory {
  id: string;
  title: string;
  badge: string;
  icon: string;
  description: string;
  targetAudience: string;
  suggestedTopics: string[];
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private readonly analyticsService = inject(AnalyticsService);

  readonly emailAddress = 'contact@noxolomandisamkhungo.co.za';
  readonly linkedinUrl = 'https://linkedin.com/in/NoxoloMkhungo';
  readonly githubUrl = 'https://github.com/NMandisa';

  selectedCategoryId = 'mentorship';

  readonly engagementCategories: EngagementCategory[] = [
    {
      id: 'talks',
      title: 'Speaking Engagements & Technical Talks',
      badge: 'Community & Events',
      icon: 'bi-mic-fill',
      description: 'Invited presentations for tech conferences, developer meetups, panel discussions, and community forums.',
      targetAudience: 'Conferences, Meetups, Developer Communities',
      suggestedTopics: ['Enterprise Java 21', 'Backend Systems Architecture', 'Career Transitions in Tech']
    },
    {
      id: 'mentorship',
      title: 'Student Mentorship & Career Guidance',
      badge: 'Talent Development',
      icon: 'bi-mortarboard-fill',
      description: '1-on-1 or group guidance for students, graduates, and early-career developers navigating software engineering.',
      targetAudience: 'University Students, Bootcamp Graduates, Junior Devs',
      suggestedTopics: ['Portfolio Architecture', 'Java/Spring Learning Paths', 'Industry Readiness']
    },
    {
      id: 'training',
      title: 'Technical Training & Workshops',
      badge: 'Skills & Bootcamps',
      icon: 'bi-easel-fill',
      description: 'Practical, hands-on learning clusters and structured workshops for developer teams and student groups.',
      targetAudience: 'Developer Cohorts, Student Guilds, Engineering Teams',
      suggestedTopics: ['REST API Design', 'Relational Database Migration', 'Clean Domain Modeling']
    },
    {
      id: 'schools',
      title: 'School & Educational Outreach',
      badge: 'Academic & STEM',
      icon: 'bi-building-fill-gear',
      description: 'Educational visits, career day talks, and STEM awareness sessions for schools and TVET colleges.',
      targetAudience: 'High Schools, Colleges, STEM Career Fairs',
      suggestedTopics: ['Careers in Software Engineering', 'Introduction to Coding', 'Building Digital Products']
    },
    {
      id: 'consulting',
      title: 'Enterprise Software Engineering & Consulting',
      badge: 'Engineering & Architecture',
      icon: 'bi-diagram-3-fill',
      description: 'Enterprise Java and Spring application engineering, REST API development, architecture reviews, performance profiling, database optimisation, and production troubleshooting.',
      targetAudience: 'Startups, SMEs, Enterprise Engineering Teams',
      suggestedTopics: [
        'Java & Spring Application Architecture',
        'Spring MVC & Spring Boot Development',
        'RESTful Web Services & API Engineering',
        'Production Troubleshooting & Root-Cause Analysis',
        'Performance Profiling & Persistence Optimisation',
        'Maven & Gradle Build Tooling',
        'System Integration & Microservice Boundaries'
      ]
    }
  ];

  selectCategory(categoryId: string): void {
    this.selectedCategoryId = categoryId;
    this.analyticsService.trackCustomEvent('select_engagement_category', {
      category_id: categoryId
    });
  }

  get activeCategory(): EngagementCategory {
    return this.engagementCategories.find(c => c.id === this.selectedCategoryId) || this.engagementCategories[0];
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