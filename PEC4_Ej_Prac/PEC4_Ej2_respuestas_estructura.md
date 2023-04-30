
## Hola Mundo con Angular

### Pregunta 1:

Para crear un nuevo proyecto en Angular, se debe de ejecutar el comando ``ng new <nombre proyecto>``. 

En mi caso, he seguido las instrucciones del libro, por lo que mi proyecto se llama ``stock-market``, y al ejecutar el comando dentro de la carpeta PEC4_Ej_Prac, se ha generado una sub-carpeta, con el mismo nombre que hemos indicado en el comando.

La estructura de ficheros que se ha generado es la siguiente:
- Ficheros de configuración en la raíz del proyecto:
  - ``tsconfig.app.json``: Configuración TypeScript específico para la compilación de la aplicación Angular.
  - ``tsconfig.json``: Configuración del compilador TypeScript
  - ``tsconfig.spec.json``: Configuración del compilador TypeScript que se utiliza para la especificar cómo se compilan los archivos TypeScript para las pruebas unitarias.
  - ``angular.json``: Define la configuración del proyecto
  - ``package.json``: Archivo de configuración de Node.Js
  - ``package-lock.json``: Se utiliza para bloquear las versiones de las dependencias instaladas en el proyecto
  - ``.editconfig``: Es un archivo de configuración que se utiliza para mantener la consistencia en el estilo de un poryecto.
  - ``.gitignore``: Fichero de configuración Git, que se utiliza para omitir que ficheros no queremos que se suban al repositorio
- Directorio ``node_modules``: Contiene todas las dependencias del proyecto que ha sido generado mediante npm
- Directorio ``src``:
  - ``index.html``: Es el fichero que el navegador abre, solo contiene un tag nuevo, llamado ``<app-root>``, el cual  es el marcador para cargar el código de nuestra aplicación.
  - ``main.ts``: Identifica que modulos de Angular tienen que ser cargados cuando arranca la aplicación.
  - ``styles.css``: Archivo donde definimos los estilos css
  - ``test.ts``:
  - ``polyfills.ts``: Archivo de configuración que se utiliza para cargar los polifills necesarios para que la aplicación pueda ser ejecutada en navegadores antiguos.
  - Directorio environments?
  - Directorio ``assets``: Almacenamos los recursos que utilizamos en la aplicación, como imágenes, fuentes, iconos... 
  - Directorio ``app``:
    - Ficheros ``app.component.*``: Dan toda la funcionalidad a nuestro componente.
    - ``app.module.ts``: Comienza el código fuente específico de nuestra aplicación. Carga todas las dependencias y declara que componentes se utilizarán dentro de la aplicación.

### Pregunta 2:

- ``app.module.ts``
    - ``@NgModule``: Anotación TypeScript para marcar esta definición de clase como un módulo de Angular
    - ``Declarations``: Marca que componentes y directivas que son parte de este módulo
    - ``Imports``: Importa otros modulos que proporcionan la funcionalidad necesitada
    - ``Providers``: Permite definir los serviciones que se van a utilizar en el módulo
    - ``Bootstrap``: Define el componente que se va a utilizar como raíz de la aplicación

- ``app.component.ts``:
  - ``@Component``: Permite definir un componente de la aplicación
  - ``selector``: El selector DOM que traduce la instáncia de ese componente
  - ``templateUrl``: Define la ruta al archivo html que contiene la plantilla del componente
  - ``styleUrls``: Define la ruta al archivo css que contiene los estilos que se aplican a la plantilla

### Pregunta 3:

Si que es posible inyectar el template y los estilos en línea de un componente, en ``template`` y ``styles`` respectivamente, pero esto no se considera buena práctica, dado que es más mantenible y escalable hacerlo en ficheros por separado