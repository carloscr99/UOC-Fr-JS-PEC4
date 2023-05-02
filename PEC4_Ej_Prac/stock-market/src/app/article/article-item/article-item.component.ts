import { Component  } from '@angular/core';
import { IArticle } from './IArticle';

@Component({
  selector: 'article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})


export class Article implements IArticle{

  name: string = '';
  imageUrl: string = '';
  price: number = 0;
  isOnSale: boolean = false;
  quantityInCart: number = 0;

  // name: string;
  // imageUrl: string;
  // price: number;
  // isOnSale: boolean;
  // quantityInCart: number;
  
  // constructor({name = '', imageUrl = '', price = 0, isOnSale = false, quantityInCart = 0}){
  //   this.name = name;
  //   this.imageUrl = imageUrl;
  //   this.price = price;
  //   this.isOnSale = isOnSale;
  //   this.quantityInCart = quantityInCart;
  // }

  ngOnInit() {   

    this.name = 'Pizza';
    this.imageUrl = 'https://images.unsplash.com/photo-1613564834361-9436948817d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1343&q=80';
    this.price = 23;
    this.isOnSale = true;
    this.quantityInCart = 0;

  }




}
