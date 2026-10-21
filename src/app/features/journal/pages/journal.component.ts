import { Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ArticleCategory = 'Architecture' | 'API Design' | 'Build & Tooling' | 'Performance';
export type ArticleStatus = 'Published' | 'Draft';

export interface JournalArticleSection {
  heading: string;
  body: string;
  codeSnippet?: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  slug: string;
  summary: string;
  intro: string;
  publishedDate?: string;
  readTime: string;
  category: ArticleCategory;
  status: ArticleStatus;
  tags: string[];
  featured?: boolean;
  sections: JournalArticleSection[];
}

@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [],
  templateUrl: './journal.component.html',
  styleUrl: './journal.component.scss'
})
export class JournalComponent {
  private readonly platformId = inject(PLATFORM_ID);

  readonly pageTitle = 'Engineering Journal';
  readonly pageSubtitle = 'In-depth technical articles exploring architectural trade-offs, API contract design, persistence abstractions, and build toolchain evaluations.';

  selectedCategory: ArticleCategory | 'All' = 'All';
  activeArticle: JournalArticle | null = null;

  readonly articles: JournalArticle[] = [
    {
      id: 'java-persistence-stack',
      title: 'Deconstructing the Java Persistence Stack: Raw SQL, JPQL, Hibernate, and HikariCP',
      slug: 'java-persistence-stack-sql-hibernate-hikaricp',
      summary: 'Tracing query execution costs from native SQL to Spring Data JPA, evaluating ORM abstraction overhead, and tuning connection pools for concurrent workloads.',
      intro: 'Abstraction layers accelerate feature delivery, but unexamined indirection carries hidden latency and memory costs. This analysis traces database access patterns through the Java persistence stack to identify where ORM convenience ends and explicit performance tuning begins.',
      publishedDate: 'Oct 2026',
      readTime: '9 min read',
      category: 'Performance',
      status: 'Published',
      featured: true,
      tags: ['PostgreSQL', 'Spring Data JPA', 'Hibernate', 'HikariCP', 'SQL'],
      sections: [
        {
          heading: '1. The Abstraction Spectrum & Execution Path',
          body: 'Spring Data JPA repositories derive queries from method signatures, generating JPQL, which Hibernate translates into SQL before JDBC execution. While excellent for standard OLTP operations, unoptimized entity graphs can trigger N+1 select patterns and unnecessary dirty-checking overhead during large batch operations.'
        },
        {
          heading: '2. Workload-Dependent Query Optimization',
          body: 'For heavy analytical or bulk data processing, ORM entity hydration introduces measurable garbage collection overhead. Utilizing DTO projections, Spring JDBC Template, or native SQL queries bypasses the Hibernate L1/L2 cache, significantly reducing heap memory pressure during bulk reads.'
        },
        {
          heading: '3. Connection Pool Saturation & HikariCP Tuning',
          body: 'Connection pool exhaustion is a common symptom under high concurrent load. Rather than arbitrarily increasing pool limits, HikariCP parameters (maximumPoolSize, minimumIdle, connectionTimeout) should be tuned based on database core capacity, disk I/O limits, and measured query execution latencies.'
        }
      ]
    },
    {
      id: 'hierarchical-vs-flat-json',
      title: 'Hierarchical JSON vs. Flat JSON: API Payload Trade-offs in Enterprise Systems',
      slug: 'hierarchical-vs-flat-json-api-payload-tradeoffs',
      summary: 'Analyzing payload size, Jackson deserialization CPU overhead, and client state consumption patterns across deeply nested versus normalized flat JSON contracts.',
      intro: 'Designing REST API contracts requires balancing human readability, client consumption models, and wire efficiency. Here we evaluate how payload structure impacts system boundaries and Jackson serialization throughput.',
      publishedDate: 'Oct 2026',
      readTime: '6 min read',
      category: 'API Design',
      status: 'Published',
      featured: false,
      tags: ['REST API', 'JSON', 'Jackson', 'API Design', 'DTO'],
      sections: [
        {
          heading: '1. Payload Context vs. Data Redundancy',
          body: 'Hierarchical JSON provides rich domain context in a single request by nesting child entities. However, deep nesting can lead to duplicate data across arrays, inflating payload size and tightening coupling between server models and UI components.'
        },
        {
          heading: '2. Client State Normalization & Wire Efficiency',
          body: 'Flat or normalized JSON contracts separate resources into indexed collections. This structure can streamline state management in clients using reactive stores (such as NgRx or Redux) while reducing payload duplication on wide resource graphs.'
        },
        {
          heading: '3. Jackson Serialization & Dynamic Views',
          body: 'Deeply nested object trees increase CPU cycle requirements during Jackson serialization. Employing Jackson JSON Views or custom DTO projections allows servers to deliver context-specific payloads without duplicating underlying domain classes.'
        }
      ]
    },
    {
      id: 'multi-module-gradle-vs-maven',
      title: 'Multi-Module Architecture: Modular Monoliths, Gradle, and Maven',
      slug: 'multi-module-architecture-gradle-vs-maven',
      summary: 'Evaluating when to split a monolithic repository into domain modules, enforcing module boundaries, and comparing Maven dependency management with Gradle build caching.',
      intro: 'A well-structured multi-module architecture prevents domain erosion and enforces clean boundaries. Choosing between Maven and Gradle depends on organizational stability needs, build complexity, and caching requirements.',
      publishedDate: 'Sep 2026',
      readTime: '8 min read',
      category: 'Build & Tooling',
      status: 'Published',
      featured: false,
      tags: ['Maven', 'Gradle', 'Multi-Module', 'Architecture', 'Java 21'],
      sections: [
        {
          heading: '1. Modular Monolith Boundaries',
          body: 'As codebases expand, single-module projects risk circular dependencies across packages. Multi-module structures (e.g., core, api, persistence, integration) enforce strict compile-time boundaries between system layers.'
        },
        {
          heading: '2. Tooling Trade-offs: Declarative Maven vs. Flexible Gradle',
          body: 'Maven offers strict, XML-driven predictability and standardized lifecycle plugins—ideal for conservative enterprise compliance. Gradle provides fine-grained task avoidance, incremental compilation, and flexible build caching for large, complex codebases.'
        }
      ]
    },
    {
      id: 'multi-datasource-routing',
      title: 'Evaluating Multi-Datasource Routing Patterns in Spring Boot',
      slug: 'evaluating-multi-datasource-routing-spring-boot',
      summary: 'Exploring read/write replica separation, dynamic routing via AbstractRoutingDataSource, and multi-tenant database isolation strategies.',
      intro: 'When a single database instance approaches I/O or connection limits, routing traffic across multiple data sources can improve read throughput and isolate tenant data.',
      publishedDate: 'Sep 2026',
      readTime: '7 min read',
      category: 'Architecture',
      status: 'Published',
      featured: false,
      tags: ['Spring Boot 3', 'PostgreSQL', 'Multi-Datasource', 'Architecture'],
      sections: [
        {
          heading: '1. Identifying Bottlenecks Before Splitting Data Sources',
          body: 'Introducing multi-datasource routing increases system complexity. Before splitting connections, diagnostic profiling must confirm whether database saturation is caused by unindexed queries, connection leaks, or true read-I/O limits.'
        },
        {
          heading: '2. Dynamic Routing Implementation',
          body: 'Spring AbstractRoutingDataSource allows applications to dynamically select connection pools at runtime based on transactional context (e.g., routing `@Transactional(readOnly = true)` calls to read replicas).'
        }
      ]
    }
  ];

  get publishedArticles(): JournalArticle[] {
    return this.articles.filter(a => a.status === 'Published');
  }

  get filteredArticles(): JournalArticle[] {
    const list = this.publishedArticles;
    if (this.selectedCategory === 'All') {
      return list;
    }
    return list.filter(a => a.category === this.selectedCategory);
  }

  get featuredArticle(): JournalArticle | undefined {
    return this.publishedArticles.find(a => a.featured);
  }

  setCategory(category: ArticleCategory | 'All'): void {
    this.selectedCategory = category;
  }

  openArticle(article: JournalArticle): void {
    this.activeArticle = article;
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  closeArticle(): void {
    this.activeArticle = null;
  }
}