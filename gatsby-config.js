/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
const {applyxslt} = require('./scripts/applyxslt')

module.exports = {
  pathPrefix: "/Seminar_WS2023-24",
  siteMetadata: {
    title: `Briefe von und an Arnold Schönberg`,
    menuLinks: [
      {
        name: "Home",
        link: "/"
      },
      {
        name: "Briefe",
        link: "/letters"
      },
      {
        name: "Impressum",
        link: "/about"
      }
    ]
  },
  plugins: [
    // `gatsby-theme-ceteicean`, // USE THIS IF YOU DON'T NEED THE OPTIONS BELOW
    {
      resolve: `gatsby-theme-ceteicean`,
      options: {
        applyBefore: [(obj) => applyxslt(obj, "notenumbers.sef.json")],
        applyAfter: [],
        namespaces: {
          "http://www.tei-c.org/ns/1.0": "tei",
          "http://www.tei-c.org/ns/Examples": "teieg",
          "http://www.w3.org/2001/XInclude": "xi"
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tei-files`,
        path: `${__dirname}/static/tei/`,
      },
    },
    `gatsby-transformer-xml`
  ],
}
