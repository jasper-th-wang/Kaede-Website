import React, { useEffect, useState } from "react"

import MenuList from './menuList';
import MenuListDesktop from './menuListDesktop';
import classes from "./header.module.scss";
import logo from '../assets/images/logo/kaede_text-white.png';
import logoLeaf from '../assets/images/logo/kaede_logo_leaf-white.png';
import LeafSVG from '../assets/svgs/leaf.inline.svg';


const Header = ({ siteTitle, location }) => {

  // Detect whether the screen size is over 1200px
  const [isDesktopState, setIsDesktopState] = useState(false);

  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 1200px)');
    console.log(isDesktop);

    isDesktop.matches ? setIsDesktopState(true) : setIsDesktopState(false);

    const isDesktopCallback = (e) => {
      e.matches ? setIsDesktopState(true) : setIsDesktopState(false);
    }

    isDesktop.addEventListener('change', isDesktopCallback);

    return () => isDesktop.removeEventListener('change', isDesktopCallback);

  }, [setIsDesktopState])

  // handling hamburger button and menu background animation
  const [backgroundState, setBackgroundState] = useState(false); // background
  const [menuListState, setMenuListState] = useState(false); // menuList, for delay animation 
  const [disableHamburgerBtn, setDisableHamburgerBtn] = useState(false);

  useEffect(() => {
    console.log(location.action);
    if (location.action === 'PUSH') {
      closeMenuBackground();
    }
  }, [location]);

  const closeMenuBackground = () => {

    setTimeout(() => {
      setBackgroundState(false);
      setDisableHamburgerBtn(false);

    }, 300);
  }

  const closeMenuList = () => {
    setDisableHamburgerBtn(true);
    setMenuListState(false);
  }

  const hamburgerToggle = () => {
    setBackgroundState(prevState => !prevState);
    setMenuListState(prevState => !prevState);
  }


  return (
    <header className={ classes.header }>

      <div className={ classes.logoBox }>
        <LeafSVG className={ classes.logoBox__leaf } />
        <picture>
          <source media="(max-width: 1199px)" srcSet={ logo } />
          <source media="(min-width: 1200px)" srcSet={ logoLeaf } />
          <img src={ logo } alt="Kaede Construction" className={ classes.logo } />
        </picture>
      </div>

      <nav>
        <div className={
          backgroundState ?
            `${ classes.menuBackground } ${ classes.menuBackgroundClicked }`
            : classes.menuBackground
        }>
        </div>
        <button
          className={
            `${ classes.hamburger } 
            ${ classes.hamburgerCollapse } 
            ${ backgroundState ? classes.isActive : null }
            ` }
          type="button"
          onClick={ hamburgerToggle }
          disabled={ disableHamburgerBtn }
        >
          <span className={ classes.hamburgerBox }>
            <span className={ classes.hamburgerInner }></span>
          </span>
        </button>
        {
          isDesktopState ?
            <MenuListDesktop location={ location } /> :
            <MenuList toggled={ menuListState } toggleMenuHandler={ closeMenuList } />
        }
      </nav>

    </header>
  );

}


export default Header
