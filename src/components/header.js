import PropTypes from "prop-types"
import React, { useState } from "react"

import MenuList from './menuList';
import classes from "./header.module.scss";
import logo from '../assets/images/logo/kaede_text-white.png';
import logoLeaf from '../assets/images/logo/kaede_logo_leaf.png';
import LeafSVG from '../assets/svgs/leaf.inline.svg';



const Header = ({ siteTitle }) => {

  const [clicked, setClicked] = useState(false); // background
  const [toggled, setToggled] = useState(false); // menuList, for delay animation 

  const toggleMenu = () => {
    //set time out for clicked
    setTimeout(() => setClicked(prevState => !prevState), 500)
    setToggled(prevState => !prevState);
  }

  const toggleMenuBackground = () => {
    setClicked(prevState => !prevState);
    setToggled(prevState => !prevState);
  }


  return (
    <header className={ classes.header }>
      <div className={ classes.logoBox }>
        <LeafSVG className={ classes.logoBox__leaf } />
        <picture>
          <source media="(max-width: 768px)" srcSet={ logo } />
          <source media="(min-width: 767px)" srcSet={ logoLeaf } />
          <img src={ logo } alt="Kaede Construction" className={ classes.logo } />
        </picture>
      </div>

      <nav>
        <div className={
          clicked ?
            `${ classes.menuBackground } ${ classes.menuBackgroundClicked }`
            : classes.menuBackground
        }>
        </div>
        <button
          className={
            `${ classes.hamburger } 
            ${ classes.hamburgerCollapse } 
            ${ clicked ? classes.isActive : null }
            ` }
          type="button"
          onClick={ toggleMenuBackground }>
          <span className={ classes.hamburgerBox }>
            <span className={ classes.hamburgerInner }></span>
          </span>
        </button>
        <MenuList toggled={ toggled } toggleMenuHandler={ toggleMenu } />
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
