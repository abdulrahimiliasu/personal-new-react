module.exports = {
  siteMetadata: {
    title: `Abdulrahim Iliasu Illo`,
    description: `Abdulrahim Iliasu Illo Personal Website`,
    author: `@abdulrahimiliasu`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
