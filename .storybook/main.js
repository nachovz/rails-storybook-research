/** @type { import('@storybook/server-webpack5').StorybookConfig } */
const config = {
  // stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(json|yaml|yml)"],
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(json|yaml|yml)",
    "../test/components/**/*stories.json",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-styling-webpack",
    ({
      name: "@storybook/addon-styling-webpack",

      options: {
        rules: [{
      test: /\.css$/,
      sideEffects: true,
      use: [
          require.resolve("style-loader"),
          {
              loader: require.resolve("css-loader"),
              options: {
                  
                  
              },
          },
      ],
    },],
      }
    })
  ],
  framework: {
    name: "@storybook/server-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
