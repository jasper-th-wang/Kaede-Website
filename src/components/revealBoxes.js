import React, { useState, useCallback, useEffect, useRef } from 'react';
import RevealBox from './revealBox';
import Img from 'gatsby-image';
import classes from './revealBoxes.module.scss';


const RevealBoxes = ({ imageData }) => {
  //props: receive imageData as imageNodes

  const servicesContents = [
    ['Project Management', 'taiyaki minim sint ex laborum food truck kinfolk farm-to-table. Banh mi health goth vinyl 8-bit whatever.'],
    ['Residential New Builds', 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day.'],
    ['Basement Design & Construction', 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.'],
  ]

  // 0: non is clicked, 1: first one is clicked... etc.
  const [toggledService, setToggledService] = useState(0);

  const serviceToggleHandler = (index) => {
    setToggledService(index);
  }

  const serviceSectionRef = useRef(null);

  const clickToCloseService = useCallback(event => {
    if (serviceSectionRef.current.contains(event.target)) return;
    setToggledService(0);
  }, []);
  useEffect(() => {
    document.body.addEventListener('click', clickToCloseService);
    return () => {
      document.body.removeEventListener('click', clickToCloseService);
    }
  }, [clickToCloseService]);

  return (
    <div className={ classes.boxContainer } ref={ serviceSectionRef }>
      {
        imageData.services.nodes.map((img, index) => (
          <RevealBox
            key={ img.childImageSharp.id }
            boxIndex={ index + 1 }
            currentIndex={ toggledService }
            clickHandler={ serviceToggleHandler }
          >
            <figure>
              <p>{ servicesContents[index][1] }</p>
            </figure>
            <figure>
              <Img fluid={ img.childImageSharp.fluid } />
              <figcaption>{ servicesContents[index][0] }</figcaption>
            </figure>
          </RevealBox>
        ))
      }
    </div>

  );

}

export default RevealBoxes;