/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import './reset.css';
import './global.css';
import classes from "./layout.module.scss";


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={ classes.gridContainer }>
      <header>
        <img src="" alt="" />
        <nav>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Projects</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </header>
      <div>
        <main>
          { children }
        </main>
        <footer></footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
