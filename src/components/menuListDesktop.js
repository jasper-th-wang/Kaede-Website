import React from 'react';
import { motion } from 'framer-motion';

import classes from './menuListDesktop.module.scss';


const menuItems = [['Home', ''], ['Services', 'services'], ['Projects', 'projects'], ['About us', 'about-us'], ['Contact us', 'contact-us']];

const MenuListDesktop = () => {


  return (
    <ul className={ classes.menuListDesktop }>
      {menuItems.map((item, index) => (
        <li key={ item[0] }>{ item[0] }</li>
      )) }
    </ul>
  );
}

export default MenuListDesktop;