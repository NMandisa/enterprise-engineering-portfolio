import { Component } from '@angular/core';

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  technologies: string[];
}

export interface EnterpriseCapability {
  title: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly name = 'Noxolo Mandisa Mkhungo';
  readonly title = 'Enterprise Java Engineer | Backend Systems';
  readonly location = 'South Africa';
  readonly resumePath = 'assets/Noxolo_Mandisa_Mkhungo_CV.pdf';

  readonly capabilities: EnterpriseCapability[] = [
    {
      title: 'Backend Core & Frameworks',
      icon: 'bi-cpu',
      description: 'Building robust, maintainable backend services with Java EE / Jakarta EE and Spring Boot 3. Skilled in dependency injection, layered architecture, and DTO mapping.'
    },
    {
      title: 'Enterprise E-Commerce Platforms',
      icon: 'bi-bag-check',
      description: 'Hands-on experience with SAP Commerce Cloud (Hybris), working on catalog structures, order management flows, and custom extension development.'
    },
    {
      title: 'Relational Data & Schema Migrations',
      icon: 'bi-database',
      description: 'Designing normalized relational schemas in PostgreSQL and managing database migrations using Flyway to guarantee version-controlled, reproducible deployments.'
    },
    {
      title: 'API Design & Integration',
      icon: 'bi-diagram-3',
      description: 'Creating clean RESTful API contracts with explicit status codes, OpenAPI/Swagger specifications, and CORS/Security interceptor configurations.'
    }
  ];

  readonly engineeringPrinciples: string[] = [
    'Domain-Driven Design (DDD) to keep business rules isolated from transport and persistence layers.',
    'Schema-first database migrations to ensure clean persistence evolutions across environments.',
    'Explicit error contracts using RFC 7807 Problem Details to make client integrations predictable.',
    'Containerization with multi-stage Docker builds to ensure consistent build and runtime environments.'
  ];

  readonly experience: ExperienceItem[] = [
    {
      role: 'Software Engineer (Backend Focus)',
      company: 'Enterprise Systems Consultancy',
      period: '2023 – Present',
      location: 'South Africa',
      highlights: [
        'Developed and maintained backend services for enterprise e-commerce applications built on Java and SAP Commerce Cloud.',
        'Engineered backend REST endpoints, mapping enterprise domain entities to clean client-facing JSON representations.',
        'Collaborated with cross-functional teams using Angular frontends to ensure seamless end-to-end API integrations.',
        'Participated in code reviews, database schema design discussions, and system refactoring sprints.'
      ],
      technologies: ['Java EE', 'Spring Boot', 'SAP Commerce', 'PostgreSQL', 'Angular', 'Git']
    }
  ];
}