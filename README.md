Published on [npm](https://www.npmjs.com/package/chemistry-ui).

## How to use

A link to an usage example project will be added soon...

## How to launch Storybook

1. Install dependencies

```
npm install
```

2. Launch Storybook

```
npm run storybook
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

## Technical discusion

- A pre-commit has been added to this repository to help maintain a coherent code style, even if new developers were added to this project in the future.

- Material-ui components have been "wrapped" with custom components to allow changing to another design system with ease in a potential future.

- Literals are not hardcoded but instead passed down to components by props in order to implement a multilanguage support system in the future.

- Two color themes have been defined in order to allow the different colored buttons to coexist on the same design system.

## Atribution

- Favicon generated from original image (https://pixabay.com/photos/leuchtkasten-shield-output-note-1773916/), which is under Pixabay License, free for commercial use

- Editor's choice banner from original image (https://pixabay.com/illustrations/tape-red-decor-for-the-web-plate-2410588/), which is under Pixabay License, free for commercial use

- Fake room image from https://pixabay.com/photos/wall-furniture-design-apartment-416060/
