export class Article {

    public name: string;
    public imageUrl: string;
    public price: number;
    public isOnSale: boolean;
    public quantityInCart: number;

    constructor() {
        this.name = '';
        this.imageUrl = '';
        this.price = 0;
        this.isOnSale = false;
        this.quantityInCart = 0;
    }


    increaseCart() {
        this.quantityInCart++;
    }

    decreaseCart() {
        this.quantityInCart--;
    }

}