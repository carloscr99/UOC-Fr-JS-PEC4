import { Component, OnInit } from '@angular/core';
import { IArticle } from './IArticle';

@Component({
  selector: 'article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})


export class Article implements OnInit, IArticle {

  name: string = '';
  imageUrl: string = '';
  price: number = 0;
  isOnSale: boolean = false;
  quantityInCart: number = 0;

  articles: Article[] = new Array<Article>();



  constructor() {

  }

  ngOnInit() {

    

    let articulo: Article = new Article();

    articulo.name = 'Pizza';
    articulo.imageUrl = 'https://images.unsplash.com/photo-1613564834361-9436948817d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1343&q=80';
    articulo.price = 23;
    articulo.isOnSale = true;
    articulo.quantityInCart = 0;

    this.articles.push(articulo);

    articulo = new Article();

    articulo.name = 'Pan';
    articulo.imageUrl = 'https://images.unsplash.com/photo-1559811814-e2c57b5e69df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';
    articulo.price = 23;
    articulo.isOnSale = false;
    articulo.quantityInCart = 0;

    this.articles.push(articulo);


  }

  increaseCart(){
    this.quantityInCart++;
  }

  decreaseCart(){
    this.quantityInCart--;
  }








}
