import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Img from 'gatsby-image';
import classes from './carousel.module.scss';

const Carousel = ({ imageArray }) => {

  const [currentImage, setCurrentImage] = useState(0);

  const imageVariants = {
    hidden: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        mass: 5,
      }
    }
  }
  const progressBarVariants = {
    empty: {
      width: 0,
    },
    full: {
      width: '100%',
      transition: {
        duration: 5,
      }
    }
  }

  useEffect(() => {
    const changeImage = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % imageArray.length);
    }, 5000);

    return () => {
      clearInterval(changeImage);
    }
  }, [imageArray.length])



  return (
    <AnimatePresence exitBeforeEnter>
      {
        imageArray.map((item, index) => (
          currentImage === index &&
          <motion.figure
            className={ classes.carousel }
            key={ item.childImageSharp.id }
            variants={ imageVariants }
            initial="hidden"
            animate="enter"
            exit="hidden"
          >
            <Img className={ classes.image } fluid={ item.childImageSharp.fluid } />
            <motion.span className={ classes.progressBar } variants={ progressBarVariants } initial="empty" animate="full"></motion.span>
            <div className={ classes.captionContainer }>
              <span className={ classes.slideCount }>{ `${ index + 1 } / ${ imageArray.length }` }</span>
              <figcaption>taiyaki minim sint ex laborum food truck</figcaption>
            </div>
          </motion.figure>
        ))
      }
    </AnimatePresence>
  )

}

export default Carousel;