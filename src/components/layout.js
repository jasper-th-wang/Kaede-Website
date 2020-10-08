import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import classes from "./layout.module.scss";
import '../assets/sass/main.scss';
import { Location } from '@reach/router'
import { motion } from 'framer-motion';

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
  const [menuClosed, setMenuClosed] = useState(true);

  const overlayVariants = {
    initial: {
      // filter: 'brightness(1)',
      opacity: '0%',
    },
    animate: {
      // filter: 'brightness(40%)',
      opacity: '80%',
    }
  }

  const mainVariants = {
    initial: {
      filter: 'blur(0px)'
    },
    animate: {
      filter: 'blur(5px)',
    },
  }


  return (
    <div className={ classes.gridContainer }>
      <Location>
        {
          ({ location }) => (
            <Header
              siteTitle={ data.site.siteMetadata.title }
              location={ location }
              showArrow={ menuClosed }
              setShowArrow={ setMenuClosed }
            />
          )
        }
      </Location>
      <div className={ classes.mainArea }>
        <motion.div
          className={ classes.overlay }
          variants={ overlayVariants }
          initial="initial"
          animate={ menuClosed ? "initial" : "animate" }
        >
        </motion.div>
        <motion.main
          variants={ mainVariants }
          initial="initial"
          animate={ menuClosed ? "initial" : "animate" }
        >

          { children }
        </motion.main>
        <footer>Copyright &#169; 2020 Kaede Construction Ltd. All rights reserved.</footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
