import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export type SkillCategory = 'Professional Experience' | 'Portfolio Development';
export type PocStatus = 'Planned' | 'In Progress' | 'Implemented';

export interface TechSkill {
  name: string;
  category: string;
  status: SkillCategory;
  icon: string;
}

export interface FeaturedPoc {
  id: string;
  title: string;
  domain: string;
  summary: string;
  tags: string[];
  status: PocStatus;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly name = 'Noxolo Mandisa Mkhungo';
  readonly headline = 'Enterprise Java Engineer | Backend Systems & Architecture';
  readonly summary = 'Engineering enterprise applications with Java, Spring, relational data systems, and reliable integration patterns.';

  readonly competencies: TechSkill[] = [
    { name: 'Java EE / Jakarta EE', category: 'Backend Core', status: 'Professional Experience', icon: 'bi-cup-hot' },
    { name: 'Spring Boot', category: 'REST APIs & Web Services', status: 'Professional Experience', icon: 'bi-box-seam' },
    { name: 'PostgreSQL & SQL', category: 'Relational Persistence', status: 'Professional Experience', icon: 'bi-database' },
    { name: 'SAP Commerce Cloud', category: 'Enterprise E-Commerce', status: 'Professional Experience', icon: 'bi-bag-check' },
    { name: 'Docker & Containers', category: 'Runtime & Deployment', status: 'Portfolio Development', icon: 'bi-terminal' },
    { name: 'Kafka & Messaging', category: 'Event-Driven Architectures', status: 'Portfolio Development', icon: 'bi-diagram-3' }
  ];

  readonly featuredPocs: FeaturedPoc[] = [
    {
      id: 'pcm-pim',
      title: 'PCM / PIM Core Engine',
      domain: 'Catalog & Master Data',
      summary: 'Product information management backend handling hierarchical catalogs, attribute inheritance, and localized data models.',
      tags: ['Java 21', 'Spring Boot 3', 'PostgreSQL', 'Flyway'],
      status: 'In Progress'
    },
    {
      id: 'commerce-fulfilment',
      title: 'Fulfilment & Order Processing',
      domain: 'Transactional Systems',
      summary: 'Order orchestration service focusing on state management, idempotent API design, and resilient transaction handling.',
      tags: ['Jakarta EE', 'Spring Boot', 'REST API', 'Docker'],
      status: 'Planned'
    }
  ];
}