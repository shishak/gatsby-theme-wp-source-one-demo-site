module.exports = {
  plugins: [
    {
      resolve: `@progital/gatsby-theme-wp-source-one`,
      options: {
        wordPressUrl: `http://18.204.169.216/`,
        processPostTypes: [`Page`, `Post`],
        useWebp: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WP Source Theme Demo`,
        short_name: `WP Source`,
        start_url: `/`,
        background_color: `#919191`,
        theme_color: `#484848`,
        display: `standalone`,
        icon: `src/images/favicon.jpg`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
