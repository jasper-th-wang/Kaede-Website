import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { useSpring, animated } from 'react-spring';
import MenuList from './menuList';
import classes from "./header.module.scss";


const Header = ({ siteTitle }) => {

  const [clicked, setClicked] = useState(false);

  const toggleMenu = () => {
    setClicked(prevState => !prevState);
  }

  const expandMenu = useSpring({
    opacity: clicked ? 1 : 0,
    height: clicked ? '100vh' : '1rem',
    width: clicked ? '100vw' : '1rem',
  })

  return (
    <header>
      <img src="" alt={ siteTitle } />
      <nav>
        <animated.div className={ classes.menuBackground } style={ expandMenu }>
        </animated.div>
        <button
          className={
            `${ classes.hamburger } 
            ${ classes.hamburgerCollapse } 
            ${ clicked ? classes.isActive : null }
            ` }
          type="button"
          onClick={ toggleMenu }>
          <span className={ classes.hamburgerBox }>
            <span className={ classes.hamburgerInner }></span>
          </span>
        </button>
        <MenuList toggled={ clicked } />
      </nav>
    </header>
  );

}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
