module.exports = {
  siteMetadata: {
    siteUrl: `https://websiteshot.app`
  },
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/logo.png`,
        name: `Websiteshot`,
        short_name: `Websiteshot`,
        start_url: `/`,
        background_color: `#106ed0`,
        theme_color: `#106ed0`,
        display: `standalone`
      }
    },
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`
  ]
};
