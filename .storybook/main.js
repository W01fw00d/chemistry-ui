module.exports = {
  stories: [
    '../src/components/atoms/**/*.stories.jsx',
    '../src/components/molecules/**/*.stories.jsx',
    '../src/components/organisms/**/*.stories.jsx',
    '../src/components/templates/**/*.stories.jsx',
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addons',
    '@storybook/react',
    '@storybook/theming',
    '@storybook/theming/create',
  ],
  webpackFinal: async (config) => config,
};
