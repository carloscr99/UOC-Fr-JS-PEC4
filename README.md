## PEC 4

### ccolomerrev

#### Carlos Colomer revert


En esta práctica, hemos aprendido a generar nuestro primer proyecto Angular, con la ayuda de Angular CLI.
En cuanto de dificultades encontradas, me he encontrado las siguientes:
1.  La inicialización del constructor me daba problemas si lo ponía como en las prácticas de TS realizadas:
  ```TypeScript
  name: string;
  imageUrl: string;
  price: number;
  isOnSale: boolean;
  quantityInCart: number;
  
  constructor({name = '', imageUrl = '', price = 0, isOnSale = false, quantityInCart = 0}){
    this.name = name;
    this.imageUrl = imageUrl;
    this.price = price;
    this.isOnSale = isOnSale;
    this.quantityInCart = quantityInCart;
  }
  ```

  Me aparecía el siguiente error:

  ![image info](./img/ErrorConstructor.png)

Por lo que finalmente lo he hecho como se puede ver en el código.

2. Mostrar multiples artículos, por lo que necesitaba almacenar la información en un Array, para luego recorrerlo y mostrar la información en el front.
