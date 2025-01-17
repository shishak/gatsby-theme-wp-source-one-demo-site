module.exports = {
  plugins: [
    {
      resolve: `@progital/gatsby-theme-wp-source-one`,
      options: {
        wordPressUrl: `http://3.120.187.86.xip.io/`,
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
