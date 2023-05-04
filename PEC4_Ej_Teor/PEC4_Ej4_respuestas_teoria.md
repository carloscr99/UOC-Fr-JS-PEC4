1. Variables locales ``NgFor``:
   - ``index``: Es de tipo number y nos dice en índice del elemento actual en la iteración
   - ``even``: Es de tipo boolean, y nos devuelve true cuando el index es par
   - ``odd``: Es de tipo boolean, y nos devuelve true cuando el index es impar
   - ``first``: Es de tipo boolean, y nos devuelve true cuando es el primer elemento en la iteración 
   - ``last``: Es de tipo boolean, y nos devuelve true cuando es el último elemento en la iteración 

2. La opción ``trackBy`` sirve para customizar el algoritmo de rasteo de los items, lo cual ayuda para mejorar la eficiencia y el rendimiento al renderizar listas, para que no se actuale el DOM cuando los datos no se han modificado, haciendo uso de una función que tiene dos argumentos: index y item.<br/>Esta directiva se puede usar en varias ocasiones, como puede ser:
   1. Listas de objetos grandes
   2. Listas con elementos cambiantes
   3. Listas que se pueden reordenar

3. No es posible ejecutar dos directivas estructurales al mismo tiempo, dado que manipulan en DOM, y no puedes aplicar, por ejemplo, un ``ngFor`` y un ``ngIf`` o ``ngCase`` sobre un mismo elemento