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

2. Me han parecido confusas las imágenes del último apartado del ejercicio 3, dado que da a entender que se han de visualizar dos artículos, por lo que ya en este apartado había creado un array con dos productos, y mostrados con un ``ngFor``, hasta que he visto en el ejercicio 7 que había que crear un ``article-list`` y recorrer un array ahí, por lo que he modificado el código.

3. Siguiendo con este ejercicio, en el 3r apartado, no entiendo el porque del objeto ``ArticleQuantityChange``, dado que el ``Article``, ya contiene una propiedad quantityInCart, por lo que bajo mi punto de vista, lo veo innecesario y redundante

4. En cuanto al punto 4t de dicho ejericio, no estoy seguro de haber hecho lo que se pide con la funcionalidad de incrementar y decrementar la cantidad, pero el resultado si que incrementa y disminuye la cantidad.