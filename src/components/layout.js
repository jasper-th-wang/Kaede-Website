import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import classes from "./layout.module.scss";
import '../assets/sass/main.scss';


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
      <Header siteTitle={ data.site.siteMetadata.title } />
      <div>
        <main>
          { children }
        </main>
        <footer>Copyright &#169; 2020 Kaede Construction Ltd. All rights reserved.</footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
