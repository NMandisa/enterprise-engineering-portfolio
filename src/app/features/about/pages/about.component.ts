import { Component } from '@angular/core';

export interface EnterpriseCapability {
  title: string;
  icon: string;
  description: string;
}

export interface EngineeringFocusArea {
  title: string;
  description: string;
  icon: string;
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

  readonly backgroundNarrative = `I am an enterprise software engineer focused on Java-based application development, SAP Commerce, backend integration, and maintainable business systems. My engineering interests extend beyond implementation to include system architecture, API contracts, data integrity, and the relationship between technical design and business requirements. Through this portfolio, I explore engineering decisions, demonstrate practical implementations, and document the reasoning behind the systems I build.`;

  readonly focusAreas: EngineeringFocusArea[] = [
    {
      title: 'Enterprise Systems Integration',
      description: 'Exploring reliable integration between enterprise applications, backend services, web interfaces, and external systems through well-defined contracts and clear system boundaries.',
      icon: 'bi-diagram-2'
    },
    {
      title: 'Commerce Domain Engineering',
      description: 'Understanding how catalogue structures, pricing, inventory, promotions, and order workflows translate into maintainable e-commerce application design.',
      icon: 'bi-cart-check'
    },
    {
      title: 'API and Service Design',
      description: 'Designing service interfaces that establish clear responsibilities, predictable error handling, and maintainable contracts between system components.',
      icon: 'bi-code-square'
    },
    {
      title: 'Data Integrity and Reliability',
      description: 'Applying transactional consistency, appropriate persistence models, and explicit data constraints to protect business rules and maintain reliable application behaviour.',
      icon: 'bi-database-check'
    }
  ];

  readonly capabilities: EnterpriseCapability[] = [
    {
      title: 'Backend Core & Frameworks',
      icon: 'bi-cpu',
      description: 'Building robust, maintainable backend services with Java EE / Jakarta EE and Spring Boot. Skilled in dependency injection, layered architecture, and DTO mapping.'
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
      description: 'Designing RESTful API contracts with explicit status codes, OpenAPI/Swagger specifications, and CORS/Security interceptor configurations.'
    }
  ];

  readonly engineeringPrinciples: string[] = [
    'Domain-Driven Design (DDD) to keep business rules isolated from transport and persistence layers.',
    'Schema-first database migrations to ensure clean persistence evolutions across environments.',
    'Explicit error contracts using RFC 7807 Problem Details to make client integrations predictable.',
    'Containerization with multi-stage Docker builds to ensure consistent build and runtime environments.'
  ];
}