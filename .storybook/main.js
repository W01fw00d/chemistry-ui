module.exports = {
  stories: [
    '../src/components/atoms/stories/**/*.stories.jsx',
    '../src/components/molecules/stories/**/*.stories.jsx',
    '../src/components/organisms/stories/**/*.stories.jsx',
    '../src/components/templates/stories/**/*.stories.jsx',
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addons',
    '@storybook/react',
    '@storybook/theming',
  ],
  webpackFinal: async config => config,
};
