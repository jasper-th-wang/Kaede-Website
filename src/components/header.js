import PropTypes from "prop-types"
import React, { useState } from "react"

import { useSpring, animated, config } from 'react-spring';
import MenuList from './menuList';
import classes from "./header.module.scss";
import logo from '../assets/images/logo/kaede_logo.png';
import logoLeaf from '../assets/images/logo/kaede_logo_leaf.png';



const Header = ({ siteTitle }) => {

  const [clicked, setClicked] = useState(false);

  const toggleMenu = () => {
    setClicked(prevState => !prevState);
  }

  const expandMenu = useSpring({
    config: config.molasses,
    delay: clicked ? 0 : 300,
    opacity: clicked ? 1 : 0.95,
    height: clicked ? '100vh' : '1rem',
    width: clicked ? '100vw' : '1rem',
  })

  return (
    <header className={ classes.header }>
      <picture>
        <source media="(max-width: 768px)" srcSet={ logo } />
        <source media="(min-width: 767px)" srcSet={ logoLeaf } />
        <img src={ logo } alt="Kaede Construction" className={ classes.logo } />
      </picture>
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
        <MenuList toggled={ clicked } toggleMenuHandler={ toggleMenu } />
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
