module.exports = {
  plugins: [
    {
      resolve: `@progital/gatsby-theme-wp-source-one`,
      options: {
        wordPressUrl: `https://news-5964b3.easywp.com/`,
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
