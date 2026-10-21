// src/app/features/journal/pages/journal-list/journal-list.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JournalService } from '../../data-access/journal.service';
import { JOURNAL_CATEGORIES, JournalArticle, JournalCategory } from '../../models/journal-article.model';

@Component({
  selector: 'app-journal-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './journal-list.component.html',
  styleUrl: './journal-list.component.scss'
})
export class JournalListComponent implements OnInit {
  private readonly journalService = inject(JournalService);

  readonly categories = ['All', ...JOURNAL_CATEGORIES];
  selectedCategory = 'All';
  articles: JournalArticle[] = [];
  featuredArticle?: JournalArticle;

  ngOnInit(): void {
    this.journalService.getPublishedArticles().subscribe(data => {
      this.articles = data;
      this.featuredArticle = data.find(a => a.featured);
    });
  }

  get filteredArticles(): JournalArticle[] {
    if (this.selectedCategory === 'All') {
      return this.articles;
    }
    return this.articles.filter(a => a.category === this.selectedCategory as JournalCategory);
  }

  setCategory(category: string): void {
    this.selectedCategory = category;
  }
}