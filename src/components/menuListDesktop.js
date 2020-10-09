import React from 'react';

import classes from './menuListDesktop.module.scss';
// import DelayedLink from './delayedLink';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';


const menuItems = [['Home', ''], ['Services', 'services'], ['Projects', 'projects'], ['About us', 'about-us'], ['Contact us', 'contact-us']];

const MenuListDesktop = ({ location, menuClosed, setMenuClosed }) => {
  console.log(location.pathname);

  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      }
    }
  }

  const itemVariants = {
    hidden: {
      x: '-100%',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        mass: 5,
        damping: 100,
      }
    }
  }

  return (
    <motion.ul
      variants={ parentVariants }
      initial="hidden"
      animate={ menuClosed ? "hidden" : "visible" }
      className={ classes.menuListDesktop }
    >
      {menuItems.map((item, index) => (
        <motion.li
          variants={ itemVariants }
          key={ item[0] }
          className={ location.pathname === `/${ item[1] }` ? classes.currentPage : null }
        >
          <Link
            to={ `/${ item[1] }` }
          // onClick={ () => setMenuClosed(true) }
          >{ item[0] }</Link>
        </motion.li>
      )) }
    </motion.ul>
  );
}

export default MenuListDesktop;