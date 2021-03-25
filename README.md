# Svelte PWA Template

This is a Svelte starter template, it uses:

-   [Svelte](https://svelte.dev/)
-   [Svelte Routing](https://www.npmjs.com/package/svelte-routing)
-   [PWA](https://web.dev/progressive-web-apps/?gclid=CjwKCAiAyc2BBhAaEiwA44-wW-Vw_ssdahpnvPwgx3wS-x5kh-pyvjAVXV2x8I9UQW0JNDSdarEdJRoCADMQAvD_BwE)
-   [Cypress](https://www.cypress.io/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [PostCSS](https://postcss.org/)
-   [Prettier](https://prettier.io/)
-   [Svelte Icons](https://svelte-icons.vercel.app/)
-   [i18n](https://github.com/kaisermann/svelte-i18n/tree/main/docs)
-   [Storybook](https://storybook.js.org/)

Like my work? Will you buy me a coffee? https://www.buymeacoffee.com/analu
Special thanks to: (Cristovão Trevisan)[https://github.com/cristovao-trevisan]
For something using version refer to: (SvelteKit Tailwind Starter)[https://github.com/analubarreto/sveltekit-tailwind-starter]

## Get started

### Starter templates

1. Open a terminal
2. Type:

```
npx degit analubarreto/new-svelte-starter my-project
```

3. cd into folder
4. Install dependencies with

```
yarn
```

-   Run project with:

```
yarn dev
```

-   Build project with:

```
yarn build
```

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

### Amplify

To use amplify, you have to:

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

### Storybook

Seems like the fix I used to make storybook work only works with yarn. I don't know if that's true as I didn't test it with npm.
You'll need the .storybook folder in your directory, so add it to the main src folder with the following documents:

To start storybook:

1. Run

```
yarn storybook
```

2. Go to http://localhost:6006/

-   Build storybook with:

```
yarn build-storybook
```

!!! There is a problem in production, some styles are not applied !!!

## Cypress

All config is made for you in this template, if you need a good source to learn cypress click [here](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements).

-   Run cypress:

```
yarn cypress
```

# (PT-BR) - Template Svelte com PWA

Esse é um template para início de projeto com Svelte, ele usa:

-   [Svelte](https://svelte.dev/)
-   [Svelte Routing](https://www.npmjs.com/package/svelte-routing)
-   [PWA](https://web.dev/progressive-web-apps/?gclid=CjwKCAiAyc2BBhAaEiwA44-wW-Vw_ssdahpnvPwgx3wS-x5kh-pyvjAVXV2x8I9UQW0JNDSdarEdJRoCADMQAvD_BwE)
-   [Cypress](https://www.cypress.io/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [PostCSS](https://postcss.org/)
-   [Prettier](https://prettier.io/)
-   [Svelte Icons](https://svelte-icons.vercel.app/)
-   [i18n](https://github.com/kaisermann/svelte-i18n/tree/main/docs)
-   [Storybook](https://storybook.js.org/)

Gosta do meu trabalho? Compra um café para mim? https://www.buymeacoffee.com/analu
Agradeciomento especial para: (Gustavo Trevisan)[https://github.com/cristovao-trevisan]
Para algo usando SvelteKit vá para: (SvelteKit Tailwind Starter)[https://github.com/analubarreto/sveltekit-tailwind-starter]

## Inicie

!!! Aviso !!!
Se você deseja usar o Amplify, deve manter @ rollup / plugin-common-js na versão 16.0.0 no package.json, a versão 17.0.0 quebra todas as dependências do amplify.

1. Abra um terminal
2. Digite:

```
npx degit analubarreto/new-svelte-starter my-project
```

3. cd para a pasta
4. Instale as dependências com:

```
yarn
```

5. Rode o projeto com:

```
yarn dev
```

6. Vá a http://localhost:5000/

-   Builde o projeto com:

```
yarn build
```

### Modelo inicial

1. Crie um novo projeto clicando em "Usar este modelo"
2. Clone o projeto criado
3. Instale dependências

```
yarn
```

4. Rode o app

```
yarn
```

5. Visualize o projeto em http://localhost:5000

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

### Storybook

Parece que a correção que usei para fazer o Storybook funcionar só funciona com yarn. Não sei se isso é verdade porque não testei com o npm.
Você precisará da pasta .storybook em seu diretório, portanto, adicione-a à pasta src principal com os seguintes documentos:

Para executar o storybook:

1. Rode:

```
yarn storybook
```

2. Vá até: http://localhost:6006/

-   Para buildar o storybook:

```
yarn build-storybook
```

!!! Tem um problema em produção alguns estilos não são aplicados !!!

## Cypress

Toda a configuração está feita para você, mas se você precisar de um lugar para aprender a usar o Cypress clique [aqui](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements).

-   Rode cypress:

```
yarn cypress
```

# (ES-ES) - Template Svelte con PWA

Esta es una plantilla de inicio de Svelte, utiliza:

-   [Svelte](https://svelte.dev/)
-   [Svelte Routing](https://www.npmjs.com/package/svelte-routing)
-   [PWA](https://web.dev/progressive-web-apps/?gclid=CjwKCAiAyc2BBhAaEiwA44-wW-Vw_ssdahpnvPwgx3wS-x5kh-pyvjAVXV2x8I9UQW0JNDSdarEdJRoCADMQAvD_BwE)
-   [Cypress](https://www.cypress.io/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [PostCSS](https://postcss.org/)
-   [Prettier](https://prettier.io/)
-   [Svelte Icons](https://svelte-icons.vercel.app/)
-   [i18n](https://github.com/kaisermann/svelte-i18n/tree/main/docs)
-   [Storybook](https://storybook.js.org/)

¿Te gusta mi trabajo? ¿Me invitas a un café? https://www.buymeacoffee.com/analu
Un agradecimiento especial a: (Gustavo Trevisan)[https://github.com/cristovao-trevisan]
Para utilizar SvelteKit vá a: (SvelteKit Tailwind Starter)[https://github.com/analubarreto/sveltekit-tailwind-starter]

## Plantilla de inicio

!!! Advertencia !!!
Si espera usar Amplify, debe mantener @rollup/plugin-common-js en la versión 16.0.0 en package.json, la versión 17.0.0 rompe todas las dependencias de amplify.

1. Abrir una terminal
2. Escribe:

```
npx degit analubarreto/new-svelte-starter my-project
```

3. cd en la carpeta
4. Instalar dependencias con:

```
yarn
```

5. Ejecutar proyecto con:

```
yarn dev
```

6. Vá a http://localhost:5000/

-   Construir proyeto con:

```
yarn build
```

### Empeze

1. Cree un nuevo proyecto haciendo clic en "Usar esta plantilla"
2. Clona el proyecto creado
3. Instalar dependencias

```
yarn
```

4. Ejecuta el proyecto

```
yarn dev
```

5. Obtenga una vista previa del proyecto en http://localhost:5000

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

### Storybook

Parece que la solución que usé para hacer que el Storybook funcione solo funciona con hilo. No sé si eso es cierto ya que no lo probé con npm.
Necesitará la carpeta .storybook en su directorio, así que agréguela a la carpeta principal src con los siguientes documentos:

Para ejecutar Storybook:

1. Ejecuta

```
yarn storybook
```

2. Va a: http://localhost:6006/

-   Construir storybook con:

```
yarn build-storybook
```

!!! Hay un problema en la producción, algunos estilos no se aplican !!!

## Cypress

Toda la configuración está hecha por usted, pero si necesita un lugar para aprender a usar Cypress, haga clic [aquí](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements).

-   Rode cypress:

```
yarn cypress
```
