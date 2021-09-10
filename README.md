<div align="center">
  <img alt="Chemistry-UI Logo" src="https://github.com/W01fw00d/chemistry-ui/blob/master/public/chemistry-ui-logo.png?raw=true" width="350" title="by Marta Ximenis">
</div>

<div align="center">
  <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/eslint-old.svg"/>
  <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/eslint.svg"/>
  <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/glint.svg"/>
  <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/loader.svg"/>
  <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/marko.svg"/>
  <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/material-ui.svg"/>
  <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/preact.svg"/>
  <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/prettier.svg"/>
  <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/react-router.svg"/>
  <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/react.svg"/>
  <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/webpack.svg"/>
</div>

[![npm version](https://badge.fury.io/js/chemistry-ui.svg)](//npmjs.com/package/chemistry-ui)

## How to use

A link to a simple usage example project will be added soon...

## How to launch Storybook

1. Install dependencies

```
npm install
```

2. Launch Storybook

```
npm run storybook
```

## Other commands

- Launch eslint autofix

```
npm run eslint
```

- Launch prettier autofix

```
npm run prettier
```

## Functional description

- When Storybook is launched, a catalogue will appear with all the App components. A component will be rendered with its default material-ui theme, if our custom theme isn't explicitly defined on its story (templates themes are defined to help visualization).

## Technical Stack

- React

- Babel (compilation)
- Webpack (bundling)

- Prettier, ESLint (code style tools, based on airbnb conventions), Husky (pre-commit automated formatting tool)

- Material-ui (this custom design system is based on this one)
- Storybook (tool that helps implementing [atomic design](https://bradfrost.com/blog/post/atomic-web-design/))

- Netlify: deploying free site for this App Demo

## Technical discusion

- A pre-commit has been added to this repository to help maintain a coherent code style, even if new developers were added to this project in the future.

- Material-ui components have been "wrapped" with custom components to allow changing to another design system with ease in a potential future.

- Literals are not hardcoded but instead passed down to components by props in order to implement a multilanguage support system in the future.

- Two color themes have been defined in order to allow the different colored buttons to coexist on the same design system.

## Atribution

- Logo created by [Marta Ximenis](https://www.domestika.org/es/projects/686589-chemistry-ui)

- Favicon formatted from logo with [favicon-generator](https://www.favicon-generator.org/)

- Editor's choice banner from [original image](https://pixabay.com/illustrations/tape-red-decor-for-the-web-plate-2410588/), which is under Pixabay License, free for commercial use.

- Fake item image from [pixabay](https://pixabay.com/photos/wall-furniture-design-apartment-416060/).

## Projects using this library

- [Escaping Boredom, a blog about Escape Rooms](https://github.com/W01fw00d/escaping_boredom)
- [Cooking with Amateurs, a cooking recipes Web App](https://github.com/W01fw00d/cooking-with-amateurs)
