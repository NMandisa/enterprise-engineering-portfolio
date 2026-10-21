import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export type PocStatus = 'Planned' | 'In Progress' | 'Implemented';

export interface ArchitecturePoc {
  id: string;
  title: string;
  domain: string;
  status: PocStatus;
  problemStatement: string;
  architecturalHighlights: string[];
  techStack: string[];
  c4DiagramType: string;
  repoUrl?: string;
  apiEndpoint?: string;
}

@Component({
  selector: 'app-architecture',
  standalone: true,
  //imports: [RouterLink],
  templateUrl: './architecture.component.html',
  styleUrl: './architecture.component.scss'
})
export class ArchitectureComponent {
  readonly pageTitle = 'System Architecture & Engineering Case Studies';
  readonly pageSubtitle = 'Detailed architectural blueprints, domain boundaries, and backend proof-of-concepts.';

  readonly pocList: ArchitecturePoc[] = [
    {
      id: 'pcm-pim',
      title: 'PCM / PIM Core Engine',
      domain: 'Catalog & Master Data Management',
      status: 'In Progress',
      problemStatement: 'Managing complex product catalogs with multi-level attribute inheritance, localized variants, and high-read/low-write master data access patterns.',
      architecturalHighlights: [
        'Hierarchical category tree mapping using PostgreSQL Adjacency List / Materialized Path pattern.',
        'Version-controlled schema migrations managed via Flyway.',
        'Redis caching layer for high-throughput product attribute resolution.',
        'RESTful API contracts with OpenAPI 3.0 specs and DTO validation.'
      ],
      techStack: ['Java 21', 'Spring Boot 3', 'PostgreSQL', 'Flyway', 'Redis', 'Docker'],
      c4DiagramType: 'Component & Entity Diagram'
    },
    {
      id: 'commerce-fulfilment',
      title: 'Fulfilment & Order Processing Engine',
      domain: 'Transactional Processing',
      status: 'Planned',
      problemStatement: 'Orchestrating state transitions across checkout, inventory reservation, and order fulfilment with strict idempotency and transaction boundaries.',
      architecturalHighlights: [
        'State machine orchestration for order lifecycle handling (CREATED -> RESERVED -> PAID -> FULFILLED).',
        'Idempotent API endpoint design with request-hash deduplication.',
        'Optimistic locking on inventory balance tables to prevent over-allocation.',
        'Asynchronous event publication hooks for notification services.'
      ],
      techStack: ['Jakarta EE', 'Spring Boot', 'PostgreSQL', 'Docker', 'REST API'],
      c4DiagramType: 'Sequence & State Machine Blueprint'
    },
    {
      id: 'dam-integration',
      title: 'Digital Asset Management (DAM) Core',
      domain: 'Media & Binary Data Pipeline',
      status: 'Planned',
      problemStatement: 'Decoupling binary storage operations from core product metadata processing while providing fast, secure media asset linking.',
      architecturalHighlights: [
        'Asynchronous processing pipeline for image metadata extraction and variant generation.',
        'Presigned URL authorization pattern for secure asset upload and retrieval.',
        'Decoupled storage abstraction supporting local S3-compatible object stores.'
      ],
      techStack: ['Java 21', 'Spring Cloud', 'S3 API', 'PostgreSQL'],
      c4DiagramType: 'Container Blueprint'
    },
    {
      id: 'storefront-context',
      title: 'Multi-Tenant Storefront Context Engine',
      domain: 'Multi-Tenant Channel Architecture',
      status: 'Planned',
      problemStatement: 'Resolving channel-specific pricing, currency formats, and catalog visibility rules based on inbound request context headers.',
      architecturalHighlights: [
        'Thread-local Context Resolver pattern for dynamic tenant identification.',
        'Isolated tenant configuration caching with TTL-based eviction.',
        'Spring Security interceptors validating API keys against multi-tenant policy rules.'
      ],
      techStack: ['Spring Security', 'Jakarta EE', 'Redis', 'REST API'],
      c4DiagramType: 'Context & Security Diagram'
    },
    {
      id: 'dynamic-api-rep',
      title: 'Context-Driven API Representation Engine',
      domain: 'Integration & API Gateway Layer',
      status: 'Planned',
      problemStatement: 'Delivering tailored JSON payloads for mobile and web channels without exposing internal entity data models directly.',
      architecturalHighlights: [
        'Custom Jackson Jackson2ObjectMapper serialization filters for dynamic field projection.',
        'Strict DTO mapping layer suppressing sensitive database schema details.',
        'OpenAPI documentation generation reflecting context-dependent payload structures.'
      ],
      techStack: ['Spring Boot 3', 'Jackson', 'OpenAPI / Swagger', 'JUnit 5'],
      c4DiagramType: 'Integration Architecture Blueprint'
    }
  ];
}