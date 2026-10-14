import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class CustomPageTitleStrategy extends TitleStrategy {
  private readonly brandName = 'Noxolo Mandisa Mkhungo';

  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot): void {
    const pageTitle = this.buildTitle(routerState);

    if (pageTitle) {
      this.title.setTitle(`${pageTitle} | ${this.brandName}`);
    } else {
      this.title.setTitle(`${this.brandName} | Enterprise Java Engineer`);
    }
  }
}