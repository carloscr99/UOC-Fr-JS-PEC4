import { Component, Input  } from '@angular/core';
import { Article } from './Article';

@Component({
  selector: 'article-item',
  template:`
  <div class="articles">

    <div class="article" [ngStyle]="{'background-color': article.isOnSale ? 'transparet' : 'rgb(255 173 154)'}">
        <div class="row">
            <img src={{article.imageUrl}} style="width: 20vw;">
        </div>
        <div class="row">
            <div class="col">
                <label>{{article.name}}</label>
            </div>
            <div class="col">
                <label [ngClass]="article.isOnSale ? '' : 'outOfStock'">{{article.price}}</label>
            </div>
        </div>
        <div *ngIf="article.isOnSale" class="row buttons">
            <div class="col">
                <button class="decrease" [disabled]="article.quantityInCart <= 0 ? true : false" (click)="article.decreaseCart()">-</button>
            </div>
            <div class="col">
                {{article.quantityInCart}}
            </div>
            <div class="col">
                <button class="increase" (click)="article.increaseCart()">+</button>
            </div>
        </div>
    </div>
  </div>
  
  `,
  styles: [`
  article-item{
    width: 100% !important;
        
    }

    .articles {
        width: 100%;
        display: flex;
        
    }

    .article{
        width: 30vw;
        border: 1px solid;
    }

    .row.buttons{
        width: 100%;
        display: flex;
    }

    button {

        font-weight: bolder;
        width: 3em;
        border-radius: 30px;
        margin: 0 0.5em 0 0.5em;
    }

    button.decrease{
        background-color: rgb(226, 82, 82);
    }

    button.increase{
        background-color: green;
    }

    label.outOfStock {
        color: gray;
    }
      

  `]
})


export class ArticleItemComponent {

  @Input()  public article!: Article;

  constructor() { }


}
