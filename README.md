# JSON Placeholder Albums App

### Overview

The app consumes the [JSONPlaceholder Album API](https://jsonplaceholder.typicode.com/) and has the main goal of displaying albums, selected albums and their owners, information about the owner and information about each photo through a modal.

It is currently [deployed on Netlify](https://jsonplaceholderalbums.netlify.app/).

### Stack

* [Nuxt 3](https://v3.nuxtjs.org/)
* Tailwind - [why?](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/)
* TypeScript

## Nuxt Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
