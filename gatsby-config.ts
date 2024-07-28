import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `chefyeum.github.io`,
    siteUrl: `https://chefyeum.github.io`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-emotion",
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     "trackingId": ""
    //   }
    // },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    // TODO: Add Favicon
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     "icon": "src/images/icon.png"
    //   }
    // },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "blogs",
        "path": "./blogs/"
      },
      __key: "blogs"
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options : {
        google: {
          families: ['Crimson Pro', 'Open Sans', 'Raleway']
        }
      }
    }
  ]
};

export default config;
