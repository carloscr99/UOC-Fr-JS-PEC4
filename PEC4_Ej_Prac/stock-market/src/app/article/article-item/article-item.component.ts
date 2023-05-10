import { Component, Input  } from '@angular/core';
import { Article } from './Article';

@Component({
  selector: 'article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})


export class ArticleItemComponent {

  @Input()  public article!: Article;

  constructor() { }


}
