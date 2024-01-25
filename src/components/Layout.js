import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./Navbar"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/global.css"

/*export default function Layout({ children }) {
  return  <div className="layout">
            <Navbar/>
            <div className="content">
              { children }
            </div>
            <footer>
              <div className="container">
                <p className="text-center">Copyright bla bla</p>
              </div>
            </footer>
          </div>
}*/

const Layout = ({ location, children }) => {
    const data = useStaticQuery(graphql`
      query SiteInfoQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `)
    const {title, menuLinks} = data.site.siteMetadata
    return (
      <>
        <Navbar location={location || ''} title={title} menuLinks={menuLinks} />
        <main className="content">{ children }</main>
        <footer className="footer">
            <div className="container">
                <p className="text-center"></p>
            </div>
        </footer>
      </>
    )
  }
  
  export default Layout
