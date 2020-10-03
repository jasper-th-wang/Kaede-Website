import React, { useState, useCallback, useEffect, useRef } from 'react';
import RevealBox from './revealBox';
import Img from 'gatsby-image';


const RevealBoxes = ({ imageData, servicesContents }) => {
  //props: receive imageData as imageNodes

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
    <div className="services-gallery" ref={ serviceSectionRef }>
      {
        imageData.services.nodes.map((img, index) => (
          <RevealBox
            key={ img.childImageSharp.id }
            boxIndex={ index + 1 }
            currentIndex={ toggledService }
            clickHandler={ serviceToggleHandler }
          >
            <figure>
              <p>{ servicesContents[index] }</p>
            </figure>
            <figure>
              <Img fluid={ img.childImageSharp.fluid } />
              <figcaption>{ img.name }</figcaption>
            </figure>
          </RevealBox>
        ))
      }
    </div>

  );

}

export default RevealBoxes;