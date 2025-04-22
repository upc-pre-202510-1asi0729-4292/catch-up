import {Component, Input} from '@angular/core';
import {Article} from '../../model/article.entity';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-article-item',
  imports: [],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent {
  @Input() article!: Article;

  constructor(private snackBar: MatSnackBar) {}

  async shareArticle() {
    const articleShareInfo = {
      title: this.article.title,
      url: this.article.url
    };

    // TODO: Implement the share functionality
  }

}
