# workshop-testcafe

### Tabla de Contenido

1. [Initial project setup](#1-initial-project-setup)


### 1. Initial project setup

**Description**: Se configurará inicialmente el proyecto con [TypeScript](https://www.typescriptlang.org/) y se hará una prueba sobre la página de [Google](https://www.google.com/). Adicionalmente se creará la configuración necesaria básica para un repositorio de [Github](https://help.github.com/)

**Note:** Si no tiene conocimiento sobre Github se le recomienda realizar las [Guias de Github](https://guides.github.com/activities/hello-world/) o el lab de [Introduction to Github](https://lab.github.com/githubtraining/introduction-to-github)

1. Crear una cuenta en Github si no la tiene.
1. Crear un repositorio en limpio dentro de la página de GitHub con el nombre de “**protractor-workshop-2018**”
1. Crear una carpeta en su computador llamada `protractor-workshop-2018` y ubicarse en ella en una consola
1. Seguir las instrucciones para realizar el primer commit (use las que aparece en lá página de github)

    ``` shell
    echo "# protractor-workshop-2018" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git remote add origin git@github.com:<su-usuario>/protractor-workshop-2018.git
    git push -u origin master
    ```

1. En la configuración del repositorio de GitHub en la opción Branches proteja la rama Master indicando que los PR requieran revisión antes de mergear y que requiera la comprobación del estado antes de hacer merge
1. Dentro del menú colaboradores agregar a:
   * [germandavid85](https://github.com/germandavid85)
   * [yesidbalvin](https://github.com/yesidbalvin)
   * [Scot3004](https://github.com/Scot3004)
   * [santirogu](https://github.com/santirogu)
   * [leonleo997](https://github.com/leonleo997)
   * [holgiosalos](https://github.com/holgiosalos)
   * [renardete](https://github.com/renardete)
   * [valeryibarra](https://github.com/valeryibarra)

1. [Instalar JDK](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) en su equipo si no lo tiene instalado
1. [Instalar NodeJS](https://nodejs.org/es/download/package-manager/) en su equipo si no lo tiene instalado. **Nota:** Recomendamos el uso una versión igual o superio de NodeJS 6 y de NPM 5
1. Crear una rama **project-setup** en el repositorio

    ``` bash
    git checkout -b project-setup
    ```

1. Crear el archivo .editorconfig a raíz del proyecto con la siguiente información

    ```properties
    root = true

    [*]
    indent_style = space
    end_of_line = lf
    charset = utf-8
    trim_trailing_whitespace = true
    insert_final_newline = true
    indent_size = 2

    [*.md]
    indent_size = 4
    trim_trailing_whitespace = false
    ```

1. Instalar la extensión de Visual Studio Code `EditorConfig for VS Code` (Generalmente requiere reinicio del IDE)
1. Ejecutar en una consola `npm init` dentro de la ruta donde se encuentra el repositorio y colocar la siguiente información:

   | Parametro          | Valor |
   | ------------------ | ---------- |
   | **Name**           | workshop-protractor                           |
   | **Version**        | _[Por Defecto]_                               |
   | **Description**    | This is a Workshop about Protractor           |
   | **Entry Point**    | _[Por Defecto]_                               |
   | **Test Command**   | `protractor dist/protractor/local.config.js`        |
   | **Git Repository** | _[Por Defecto]_                               |
   | **Keywords**       | ui-testing, dojo, practice, protractor        |
   | **Author**         | _[Su nombre]_ <_[Su correo]_> (_[su github]_) |
   | **License**        | MIT                                           |

1. Instalar la dependencia de protractor
  `npm install --save protractor`

1. Instalar las dependencias de desarrollo de typescript
  `npm i --save-dev typescript`

1. Instalar los types de NodeJS
`npm install --save-dev @types/node`

1. Instalar los types de Jasmines
  `npm install --save-dev @types/jasminewd2`

1. Crear en la raíz del proyecto la carpeta **protractor** y dentro de ella el archivo  **local.config.ts** y agregar la siguiente información

    ``` ts
    import { Config } from 'protractor';

    export const config: Config = {
      framework: 'jasmine',
      specs: [ '../test/google.spec.js' ],
      seleniumAddress: 'http://localhost:4444/wd/hub'
    };
    ```

1. Actualizar los drivers con el comando

   ``` bash
   npx webdriver-manager update
   ```

1. En la consola ejecutar

   ``` bash
   npx webdriver-manager start
   ```

1. Crear la carpeta **test** en la raíz del proyecto y dentro de la carpeta crear el archivo **google.spec.ts**

   ``` ts
   import { browser } from 'protractor';

   describe('This is the first example of protractor', () => {
     it('should have a title', () => {
       browser.ignoreSynchronization = true;
       browser.get('http://www.google.com');
       expect(browser.getTitle()).toEqual('Google');
     });
   });
   ```

1. Crear el archivo **tsconfig.json** en la raíz del proyecto con el siguiente contenido

    ``` json
    {
      "compilerOptions": {
        "target": "es6",
        "sourceMap": true,
        "outDir": "dist",
        "module": "commonjs",
        "moduleResolution": "node",
        "noUnusedParameters": true,
        "noUnusedLocals": true
      }
    }
    ```

1. Modificar los scripts del package.json para que tengan el siguiente contenido:

    ``` json
    "clean": "rm -rf dist",
    "build": "npm run clean && tsc",
    "test": "npm run build && protractor dist/protractor/local.config.js"
    ```

1. Ejecutar el comando en una segunda consola `npm test` y comprobar que la prueba pasa de forma satisfactoria
1. Crear el archivo **.gitignore** en la raíz del proyecto. Ingresar a la página <https://www.gitignore.io/> y en el área de texto  agregar el _sistema operativo_, _IDE's_ y _NodeJS_, ejemplo _OSX Node VisualStudioCode_. Genere el archivo y cópielo dentro del archivo **.gitignore**
1. Agregar al final del **.gitignore** las siguientes líneas

    ``` bash
    # Typescript
    dist
    ```

1. Crear el archivo **LICENSE** en la raíz del proyecto con lo especificado en <https://en.wikipedia.org/wiki/MIT_License> (_Tenga en cuanta cambiar el año y el copyright holders_)
1. Crear la carpeta a nivel de raíz llamada **.github** y dentro de ella crear el archivo **CODEOWNERS** con el siguiente contenido

    ``` bash
    * @aperdomob @germandavid85 @luigisamurai @yesidbalvin @Scot3004 @santirogu
    ```

1. Realizar un commit donde incluya los 8 archivos modificados con el mensaje “setup protractor configuration” y subir los cambios al repositorio

    ```bash
    git add .
    git commit -m "setup protractor configuration"
    git push origin project-setup
    ```

1. Crear un PR, asignarle los revisores y esperar por la aprobación o comentarios de los revisores. Si no sabe como realizarlo siga las siguientes [instrucciones](https://help.github.com/articles/creating-a-pull-request/)
1. Una vez aprobado realizar el merge a master seleccionando la opción “squash and merge”
