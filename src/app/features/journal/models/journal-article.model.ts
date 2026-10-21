/**
 * Journal Article Domain Contract & Interfaces
 * Path: src/app/features/journal/models/journal-article.model.ts
 */

export const JOURNAL_CATEGORIES = [
  'Architecture',
  'API Design',
  'Build & Tooling',
  'Performance'
] as const;

export type JournalCategory = (typeof JOURNAL_CATEGORIES)[number];

export type ArticleStatus = 'Published' | 'Draft';

export interface JournalSection {
  heading: string;
  body: string;
  codeSnippet?: string;
  codeLanguage?: string;
}

export interface JournalArticle {
  /** Unique entity identifier (UUID or database primary key) */
  id: string;

  /** Human-readable URL slug (e.g., 'deconstructing-java-persistence-stack') */
  slug: string;

  title: string;
  summary: string;
  category: JournalCategory;

  /** Publication date formatted as ISO 8601 string (YYYY-MM-DD) */
  publishedDate: string;

  /** Estimated reading time (e.g., '8 min read') */
  readTime: string;

  /** Promotes article to the homepage / hero banner */
  featured: boolean;

  /** Publication status for CMS/API filtering */
  status: ArticleStatus;

  /** Technical tags for filtering and indexing */
  tags: string[];

  /** Lead italic paragraph for detail view */
  intro?: string;

  /** Structured body content blocks */
  sections?: JournalSection[];

  // ---------------------------------------------------------------------------
  // TODO: Future Spring Boot REST DTO & CMS Integration Fields
  // ---------------------------------------------------------------------------
  // updatedAt?: string;          // ISO 8601 timestamp for audit tracking
  // author?: string;             // Multi-author / guest contribution support
  // viewCount?: number;          // Analytics / popular articles sorting
  // coverImageUrl?: string;      // Open Graph / Social share preview card asset
}