import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JournalArticle } from '../models/journal-article.model';
import { JOURNAL_MOCK_ARTICLES } from '../data/journal-mock.data';

@Injectable({
  providedIn: 'root'
})
export class JournalService {
  getPublishedArticles(): Observable<JournalArticle[]> {
    return of(JOURNAL_MOCK_ARTICLES.filter(a => a.status === 'Published'));
  }

  getFeaturedArticles(): Observable<JournalArticle[]> {
    return of(JOURNAL_MOCK_ARTICLES.filter(a => a.featured && a.status === 'Published'));
  }

  getArticleBySlug(slug: string): Observable<JournalArticle | undefined> {
    return of(JOURNAL_MOCK_ARTICLES.find(a => a.slug === slug && a.status === 'Published'));
  }
}