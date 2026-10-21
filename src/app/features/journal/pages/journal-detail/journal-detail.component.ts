import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { JournalService } from '../../data-access/journal.service';
import { JournalArticle } from '../../models/journal-article.model';

@Component({
  selector: 'app-journal-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './journal-detail.component.html',
  styleUrl: './journal-detail.component.scss'
})
export class JournalDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly journalService = inject(JournalService);

  // Property referenced by template (@if (article))
  article: JournalArticle | null = null;

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.journalService.getArticleBySlug(slug).subscribe(foundArticle => {
        this.article = foundArticle ?? null;
      });
    }
  }
}