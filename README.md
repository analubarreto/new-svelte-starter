# Svelte PWA Template

This is a Svelte starter template, it uses:

-   [Svelte](https://svelte.dev/)
-   [Svelte Routing](https://www.npmjs.com/package/svelte-routing)
-   [PWA](https://web.dev/progressive-web-apps/?gclid=CjwKCAiAyc2BBhAaEiwA44-wW-Vw_ssdahpnvPwgx3wS-x5kh-pyvjAVXV2x8I9UQW0JNDSdarEdJRoCADMQAvD_BwE)
-   [Jest](https://jestjs.io/en/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [PostCSS](https://postcss.org/)
-   [Prettier](https://prettier.io/)
-   [Svelte Icons](https://svelte-icons.vercel.app/)
-   [i18n](https://github.com/kaisermann/svelte-i18n/tree/main/docs)

Like my work? Will you buy me a coffee? https://www.buymeacoffee.com/analu

## Get started

!!! Warning !!!
If you're hoping on using Amplify, you should keep @rollup/plugin-common-js in version 16.0.0 in package.json, version 17.0.0 breaks all amplify dependencies.

1. Add .babelrc to your root folder

```
{
  "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
}
```

2. Add .prettierrc to your root folder

```
{
  "singleQuote": true,
  "trailingComma": "all",
  "useTabs": true,
  "tabWidth": 4,
  "printWidth": 100
}
```

### Starter templates

1. Create a new project clicking "Use this template"
2. Clone the created project
3. Install dependencies

```
npm i
```

4. Run the project

```
npm run dev
```

5. Preview the project in https://localhost:5000

### Folder Structure

-   Components folder:
    This is not a necessary folder, but it is advised you put your components here.
-   Pages folder: This is where you should put your page components
-   Stores folder: This can be used to put your stores but you don't need to put them there

### Lazy Image Loading

Lazy image loading has been added, the file lazySize.js inside util is responsible for it. It is rendered inside index.html. To use it in your images follow the example below:

```
<img src="image-source" alt="alt-text" class="lazyload" />
```

### PWA

Enable PWA by going to index.html and removing the comments from the lines:

```
<!-- <script>
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/service-worker.js')
            .then((reg) => {
              console.log('Service worker registered.', reg);
            });
        });
      }
    </script> -->
```

### Font Awesome

Font awesome is used by making use of the following pattern:

```
<i class="far fa-copyright" />
```

### Amplify

Para usar o amplify, você tem que:

1. Install AWS CLI
2. Configure the AWS CLI
3. Start amplify in the project with:

```
amplify init
```

4. Add the aws dependencies you want to use with (for example):

```
amplify add auth
amplify add api
```

5. Uncomment the following lines in main.js:

```
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);
```

# (PT-BR) - Template Svelte com PWA

Esse é um template para início de projeto com Svelte, ele usa:

-   [Svelte](https://svelte.dev/)
-   [Svelte_Routing](https://www.npmjs.com/package/svelte-routing)
-   [PWA](https://web.dev/progressive-web-apps/?gclid=CjwKCAiAyc2BBhAaEiwA44-wW-Vw_ssdahpnvPwgx3wS-x5kh-pyvjAVXV2x8I9UQW0JNDSdarEdJRoCADMQAvD_BwE)
-   [Jest](https://jestjs.io/en/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [PostCSS](https://postcss.org/)
-   [Prettier](https://prettier.io/)
-   [Svelte Icons](https://svelte-icons.vercel.app/)
-   [i18n](https://github.com/kaisermann/svelte-i18n/tree/main/docs)

Gosta do meu trabalho? Compra um café para mim? https://www.buymeacoffee.com/analu

## Inicie

!!! Aviso !!!
Se você deseja usar o Amplify, deve manter @ rollup / plugin-common-js na versão 16.0.0 no package.json, a versão 17.0.0 quebra todas as dependências do amplify.

1. Adicione na sua pasta root .babelrc

```
{
  "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
}
```

2. Adicione na sua pasta root .prettierrc

```
{
  "singleQuote": true,
  "trailingComma": "all",
  "useTabs": true,
  "tabWidth": 4,
  "printWidth": 100
}
```

### Modelo inicial

1. Crie um novo projeto clicando em "Usar este modelo"
2. Clone o projeto criado
3. Instale dependências

```
npm i
```

4. Rode o app

```
npm run dev
```

5. Visualize o projeto em https://localhost:5000

## Iniciando

!!! Aviso !!!
Se você deseja usar o Amplify, deve manter @rollup/plugin-common-js na versão 16.0.0 no package.json, a versão 17.0.0 quebra todas as dependências do amplify.

### Estrutura da pasta

-   Pasta de componentes:
    Esta não é uma pasta necessária, mas é aconselhável que você coloque seus componentes aqui.
-   Pasta de páginas: é onde você deve colocar os componentes da página
-   Pasta de lojas: pode ser usada para colocar suas lojas, mas você não precisa colocá-las lá

### Carregamento lento da imagem

O carregamento lento da imagem foi adicionado, o arquivo lazySize.js dentro do util é responsável por isso. Ele é renderizado dentro de index.html. Para utilizá-lo em suas imagens siga o exemplo abaixo:

```
<img src="image-source" alt="alt-text" class="lazyload" />
```

### PWA

Habilite o PWA acessando index.html e removendo os comentários das linhas:

```
<!-- <script>
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/service-worker.js')
            .then((reg) => {
              console.log('Service worker registered.', reg);
            });
        });
      }
    </script> -->
```

### Font Awesome

O Font Awesome é usado seguindo o seguinte padrão no seu html:

```
<i class="far fa-copyright" />
```

### Amplify

Para usar o amplify, você tem que:

1. Instalar AWS CLI
2. Configurar o AWS CLI
3. Iniciar o amplify no projeto com:

```
amplify init
```

4. Adicionar as dependências do aws que você quer usar com (por exemplo):

```
amplify add auth
amplify add api
```

5. Retirar o comentário no arquivo main.js:

```
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);
```

# (ES-ES) - Template Svelte con PWA

Esta es una plantilla de inicio de Svelte, utiliza:

-   [Svelte](https://svelte.dev/)
-   [Svelte_Routing](https://www.npmjs.com/package/svelte-routing)
-   [PWA](https://web.dev/progressive-web-apps/?gclid=CjwKCAiAyc2BBhAaEiwA44-wW-Vw_ssdahpnvPwgx3wS-x5kh-pyvjAVXV2x8I9UQW0JNDSdarEdJRoCADMQAvD_BwE)
-   [Jest](https://jestjs.io/en/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [PostCSS](https://postcss.org/)
-   [Prettier](https://prettier.io/)
-   [Svelte Icons](https://svelte-icons.vercel.app/)
-   [i18n](https://github.com/kaisermann/svelte-i18n/tree/main/docs)

    ¿Te gusta mi trabajo? ¿Me invitas a un café? https://www.buymeacoffee.com/analu

## Plantilla de inicio

!!! Advertencia !!!
Si espera usar Amplify, debe mantener @rollup/plugin-common-js en la versión 16.0.0 en package.json, la versión 17.0.0 rompe todas las dependencias de amplify.

1. Adicione .babelrc à sua pasta raiz

```
{
  "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
}
```

2.Adicione .prettierrc à sua pasta raiz

```
{
  "singleQuote": true,
  "trailingComma": "all",
  "useTabs": true,
  "tabWidth": 4,
  "printWidth": 100
}
```

### Estructura de carpetas

-   Carpeta de componentes:
    Esta no es una carpeta necesaria, pero se recomienda que coloque sus componentes aquí.
-   Carpeta de páginas: aquí es donde debe colocar los componentes de su página
-   Carpeta de tiendas: se puede utilizar para poner sus tiendas, pero no es necesario que las ponga allí.

### Carga lenta de imágenes

Se ha agregado la carga diferida de imágenes, el archivo lazySize.js dentro de util es responsable de ello. Se representa dentro de index.html. Para usarlo en tus imágenes sigue el siguiente ejemplo:

```
<img src="image-source" alt="alt-text" class="lazyload" />
```

### PWA

Habilite PWA yendo a index.html y eliminando los comentarios de las líneas:

```
<!-- <script>
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/service-worker.js')
            .then((reg) => {
              console.log('Service worker registered.', reg);
            });
        });
      }
    </script> -->
```

### Font Awesome

La Font Awesome se usa haciendo uso del siguiente patrón:

```
<i class="far fa-copyright" />
```

### Amplify

Para usar o amplify, você tem que:

1. Instale AWS CLI
2. Configure la AWS CLI
3. Empiece a amplificar en el proyecto con:

```
amplify init
```

4. Agregue las dependencias de aws con las que desea usar (por ejemplo):

```
amplify add auth
amplify add api
```

5. Descomente el archivo main.js:

```
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);
```
