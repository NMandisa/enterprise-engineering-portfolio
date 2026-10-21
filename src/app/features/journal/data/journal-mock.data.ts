import { JournalArticle } from '../models/journal-article.model';

export const JOURNAL_MOCK_ARTICLES: JournalArticle[] = [
  {
    id: '1',
    slug: 'deconstructing-java-persistence-stack',
    title: 'Deconstructing the Java Persistence Stack',
    summary: 'Analyzing HikariCP connection pool dynamics, Hibernate L2 caching, and SQL statement batching under high-concurrency loads.',
    category: 'Performance',
    publishedDate: '2026-03-15',
    readTime: '8 min read',
    featured: true,
    status: 'Published',
    tags: ['Java 21', 'Spring Data JPA', 'HikariCP', 'PostgreSQL'],
    intro: 'Database persistence bottlenecks frequently stem from improper connection pool sizing and unbatched SQL executions.',
    sections: [
      {
        heading: 'Connection Pool Sizing & HikariCP Defaults',
        body: 'HikariCP performs exceptionally well out of the box, but default pool sizing often leads to resource contention under burst traffic. Sizing pools based on CPU core counts and disk thread queues prevents resource starvation.',
        codeSnippet: 'spring.datasource.hikari.maximum-pool-size=10\nspring.datasource.hikari.minimum-idle=10\nspring.datasource.hikari.idle-timeout=300000',
        codeLanguage: 'properties'
      },
      {
        heading: 'SQL Statement Batching & JDBC Drivers',
        body: 'Without explicit batching configuration, Spring Data JPA executes insert and update operations sequentially. Enabling JDBC batching reduces network round-trips to PostgreSQL drastically during bulk operations.',
        codeSnippet: 'spring.jpa.properties.hibernate.jdbc.batch_size=25\nspring.jpa.properties.hibernate.order_inserts=true\nspring.jpa.properties.hibernate.order_updates=true',
        codeLanguage: 'properties'
      }
    ]
  },
  {
    id: '2',
    slug: 'hierarchical-vs-flat-json-api-design',
    title: 'Hierarchical JSON vs. Flat JSON in RESTful Web Services',
    summary: 'Evaluating payload size, client parsing complexity, and schema evolution strategies in enterprise Spring MVC APIs.',
    category: 'API Design',
    publishedDate: '2026-02-10',
    readTime: '6 min read',
    featured: true,
    status: 'Published',
    tags: ['Spring MVC', 'REST APIs', 'JSON Schema', 'Jackson'],
    intro: 'Designing web service payloads requires balancing domain expressiveness with wire efficiency and backward compatibility across microservice boundaries.',
    sections: [
      {
        heading: 'Payload Overhead & Wire Size',
        body: 'Nested JSON structures mirror domain aggregates directly, but flattened representations with foreign identifiers reduce duplicate context across API collection responses.'
      }
    ]
  },
  {
    id: '3',
    slug: 'multi-module-architecture-gradle-vs-maven',
    title: 'Multi-Module Architecture: Gradle vs. Maven',
    summary: 'Comparing build lifecycle isolation, dependency constraints, and incremental compilation performance in enterprise Java projects.',
    category: 'Build & Tooling',
    publishedDate: '2026-01-22',
    readTime: '10 min read',
    featured: true,
    status: 'Published',
    tags: ['Maven', 'Gradle', 'Build Tools', 'Java Modules'],
    intro: 'Modularizing large monorepos requires strict build graph separation to minimize compilation times and prevent accidental dependency leakage.'
  },
  {
    id: '4',
    slug: 'c4-model-enterprise-architecture-blueprints',
    title: 'Applying C4 Models to Backend Systems',
    summary: 'Structuring Context, Container, and Component diagrams for complex enterprise domain boundaries.',
    category: 'Architecture',
    publishedDate: '2025-12-18',
    readTime: '7 min read',
    featured: false,
    status: 'Published',
    tags: ['C4 Model', 'Architecture', 'System Design'],
    intro: 'Effective system documentation requires hierarchical abstraction levels that serve both executive stakeholders and software engineers.'
  }
];