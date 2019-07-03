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
        name: 'Victor Ollervidez | Front-End Developer',
        short_name: 'portfolio',
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
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "headlesspress.xyz",
        protocol: "https",
        hostingWPCOM: false,
        useACF: true,
        acfOptionPageIds: ['home-page-content'],
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
          "**/work",
        ],
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
};