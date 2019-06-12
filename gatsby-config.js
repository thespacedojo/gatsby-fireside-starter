module.exports = {
  siteMetadata: {
    title: `Gatsby Fireside Podcast app`,
    description: `Kick off your next, great podcast with this default Gatsby app. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@joshowens`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "https://catholicanglican.fireside.fm/json",
        rootKey: "podcast",
        schemas: {
          podcast: `
            title: String
            items: [items]
          `,
          items: `
            title: String
            content_html: String
            attachments: [attachments]
          `,
          attachments: `
            url: String
            mime_type: String
            size_in_bytes: Int
            duration_in_seconds: Int
          `
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
