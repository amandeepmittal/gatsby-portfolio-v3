module.exports = {
  siteMetadata: {
    title: "Portfolio v3",
    description: "Personal WebSite",
    author: "@amanhimself"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-96738144-3",
        // Setting this parameter is optional (requried for some countries such as Germany)
        anonymize: true
      }
    }
  ]
};
