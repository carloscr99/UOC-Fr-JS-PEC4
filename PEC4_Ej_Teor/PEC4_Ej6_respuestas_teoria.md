1. ¿Cuáles son los  ``style encapsulation`` de los componentes? Pon un ejemplo
de uso de cada uno de ellos.: Hay 3 tipos:
   1. ``ShadowDom``: 
```TS
@Component({
  selector: 'app-shadow-dom-encapsulation',
  template: `
    <h2>ShadowDom</h2>
    <div class="shadow-message">Shadow DOM encapsulation</div>
    <app-emulated-encapsulation></app-emulated-encapsulation>
    <app-no-encapsulation></app-no-encapsulation>
  `,
  styles: ['h2, .shadow-message { color: blue; }'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ShadowDomEncapsulationComponent { }
```

   1. ``Emulated``: 

```TS
@Component({
  selector: 'app-emulated-encapsulation',
  template: `
    <h2>Emulated</h2>
    <div class="emulated-message">Emulated encapsulation</div>
    <app-no-encapsulation></app-no-encapsulation>
  `,
  styles: ['h2, .emulated-message { color: green; }'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class EmulatedEncapsulationComponent { }
```

   1. ``None``: 

```TS
@Component({
  selector: 'app-no-encapsulation',
  template: `
    <h2>None</h2>
    <div class="none-message">No encapsulation</div>
  `,
  styles: ['h2, .none-message { color: red; }'],
  encapsulation: ViewEncapsulation.None,
})
export class NoEncapsulationComponent { }

```

2. ¿Qué es el ``shadow DOM``?: Es un tipo de encapsulación, se utiliza el Shadow DOM nativo del navegador, para aislar los estilos del componente.
3. ¿Qué es el ``changeDetection``?: Es un proceso a través del cual, Angular comprueba si cualquier estado de la aplicación ha cambiado, y el DOM necesita ser actualizado.
4. ¿Qué diferencias existen entre las estrategias ``Default`` y ``OnPush``? ¿Cuándo
debes usar una y otra? Ventajas e inconvenientes.
    - ``Default``: Utiliza la estrategia ``CheckAlways``, donde la detección es automática hasta que se desactiva explícitamente.
    - ``OnPush``: Utiliza la estrategia de ``CheckOnce``, la detección automática de cambios está desactivada hasta que se reactive configurando la estrategia como ``Default`` 

La estrategia de ``Default``, puede llevar a una sobrecarga innecesaria de la detección de cambios, dado que verifica los cambios en cada ciclo de detección, independientemente de si los valores han cambiado o no, mientras que la estrategia de ``OnPush``, solo verifica los cambios en las propiedades si se ha producido un cambio en la referencia del objeto.

Por norma general y para un mejor rendimiento, se debería de usar la estrategia de ``OnPush``, dado que mejora notablemente el rendimiento de la aplicación, pero puede ser más difícil de entender para los que empezamos a usar Angular.

5. Explica con detalle el ciclo de vida de los componentes. Haz hincapié en cuándo
se disparan los ``hooks OnChanges, OnInit, AfterViewInit y OnDestroy``, puesto que son los más utilizados:

Las instancias de los componentes tienen un ciclo de vida que empieza cuando Angular instancia la clase del componente y renderiza la vista del mismo a través de sus vistas hijos.

El ciclo de vida sigue con la detección de cambios, donde Angular comprueba cuando las propiedades de los datos han cambiado, y actualiza tanto la vista como la instancia del componente.

El mismo termina cuando Angular destruye la instancia del componente y elimina la renderización del template del DOM.

Cuando se disparan los siguientes hooks:
- ``OnChanges``: Se llama antes del ``OnInit``, si el componente tiene inputs, y siempre que cambien los datos de los inputs.
- ``OnInit``: Se llama tras el ``OnChanges``, incluso cuando no hay inputs y no se llama a dicho hook, e inicializa los componentes.
- ``AfterViewInit``: Llamado una vez después del primer ``ngAfterContentChecked()``, y se ejecuta tras la inicialización de Angular de la vista de los componentes y las vistas hijos
- ``OnDestroy``: Se ejecuta inmediatamente antes de que Angular destruya el componente.