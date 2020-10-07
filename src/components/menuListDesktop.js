import React from 'react';

import classes from './menuListDesktop.module.scss';
// import DelayedLink from './delayedLink';
import { Link } from 'gatsby';


const menuItems = [['Home', ''], ['Services', 'services'], ['Projects', 'projects'], ['About us', 'about-us'], ['Contact us', 'contact-us']];

const MenuListDesktop = ({ location }) => {
  console.log(location.pathname);

  return (
    <ul className={ classes.menuListDesktop }>
      {menuItems.map((item, index) => (
        <li
          key={ item[0] }
          className={ location.pathname === `/${ item[1] }` ? classes.currentPage : null }
        ><Link to={ `/${ item[1] }` } >{ item[0] }</Link></li>
      )) }
    </ul>
  );
}

export default MenuListDesktop;