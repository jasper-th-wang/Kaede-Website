import React, { useEffect, useState } from "react"

import MenuList from './menuList';
import MenuListDesktop from './menuListDesktop';
import classes from "./header.module.scss";
import logo from '../assets/images/logo/kaede_text-white.png';
import logoLeaf from '../assets/images/logo/kaede_logo_leaf-white.png';
import LeafSVG from '../assets/svgs/leaf.inline.svg';
import ArrowSVG from '../assets/svgs/double-arrow.inline.svg';
import { motion } from 'framer-motion';


const Header = ({ siteTitle, location, showArrow, setShowArrow }) => {

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

  const desktopHeaderAnimation = {
    hidden: {
      x: '-13rem',
    },
    onHover: {
      x: 0,
    },
    transition: {
      type: 'tween',
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1],
    }
  }



  const arrowVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    }
  }

  return (
    <motion.header
      className={ classes.header }
      variants={ desktopHeaderAnimation }
      initial="hidden"
      transition="transition"
      whileHover={ isDesktopState ? "onHover" : null }
      onHoverStart={ () => isDesktopState ? setShowArrow(false) : null }
      onHoverEnd={ () => isDesktopState ? setShowArrow(true) : null }
    >
      <motion.div
        className={ classes.arrowContainer }
        variants={ arrowVariants }
        animate={ showArrow ? "show" : "hidden" }
      >
        <ArrowSVG className={ classes.arrow } />
      </motion.div>
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
            <MenuListDesktop
              location={ location }
              menuClosed={ showArrow }
              setMenuClosed={ setShowArrow }
            /> :
            <MenuList toggled={ menuListState } toggleMenuHandler={ closeMenuList } />
        }
      </nav>

    </motion.header>
  );

}


export default Header
