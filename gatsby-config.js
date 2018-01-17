module.exports = {
  siteMetadata: {
    title: "Portfolio v3",
    description: "Personal WebSite",
    author: "@amanhimself",
    siteUrl: `http://www.amanhimself.me`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Aman Mittal Portfolio",
        short_name: "Aman Mittal",
        start_url: "/",
        icons: [
          {
            src: `/src/assets/favicon.ico`,
            sizes: `32x32`,
            type: `image/ico`
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-96738144-3",
        // Setting this parameter is optional (requried for some countries such as Germany)
        anonymize: true
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    }
  ]
};
