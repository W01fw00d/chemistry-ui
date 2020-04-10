module.exports = {
  stories: [
    '../src/atoms/stories/**/*.stories.jsx',
    '../src/molecules/stories/**/*.stories.jsx',
    '../src/organisms/stories/**/*.stories.jsx',
    '../src/templates/stories/**/*.stories.jsx',
  ],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async config => {
    // do mutation to the config

    return config;
  },
};
