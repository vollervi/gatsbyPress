module.exports = {
  siteMetadata: {
    title: "Personal Portfolio",
    author: "Victor Ollervidez",
    description: "Built using GatsbyJS"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto'],
          varients: ['300', '400', '500', '700']
        }
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
