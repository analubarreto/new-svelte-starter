# Svelte PWA Template

This is a Svelte starter template, it uses:

-   [Svelte](https://svelte.dev/)
-   [Svelte_Routing](https://www.npmjs.com/package/svelte-routing)
-   [PWA](https://web.dev/progressive-web-apps/?gclid=CjwKCAiAyc2BBhAaEiwA44-wW-Vw_ssdahpnvPwgx3wS-x5kh-pyvjAVXV2x8I9UQW0JNDSdarEdJRoCADMQAvD_BwE)
-   [Jest](https://jestjs.io/en/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [PostCSS](https://postcss.org/)
-   [Prettier](https://prettier.io/)

Like my work? Will you buy me a coffee? https://www.buymeacoffee.com/analu

## Get started

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

# (PT-BR) - Template Svelte com PWA

Esse é um template para início de projeto com Svelte, ele usa:

-   [Svelte](https://svelte.dev/)
-   [Svelte_Routing](https://www.npmjs.com/package/svelte-routing)
-   [PWA](https://web.dev/progressive-web-apps/?gclid=CjwKCAiAyc2BBhAaEiwA44-wW-Vw_ssdahpnvPwgx3wS-x5kh-pyvjAVXV2x8I9UQW0JNDSdarEdJRoCADMQAvD_BwE)
-   [Jest](https://jestjs.io/en/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [PostCSS](https://postcss.org/)
-   [Prettier](https://prettier.io/)

Gosta do meu trabalho? https://www.buymeacoffee.com/analu

## Modelo inicial

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

# (ES-ES) - Template Svelte con PWA

Esta es una plantilla de inicio de Svelte, utiliza:

-   [Svelte](https://svelte.dev/)
-   [Svelte_Routing](https://www.npmjs.com/package/svelte-routing)
-   [PWA](https://web.dev/progressive-web-apps/?gclid=CjwKCAiAyc2BBhAaEiwA44-wW-Vw_ssdahpnvPwgx3wS-x5kh-pyvjAVXV2x8I9UQW0JNDSdarEdJRoCADMQAvD_BwE)
-   [Jest](https://jestjs.io/en/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [PostCSS](https://postcss.org/)
-   [Prettier](https://prettier.io/)
    ¿Te gusta mi trabajo?
    ¿Me invitas a un café? https://www.buymeacoffee.com/analu

## Plantilla de inicio

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
