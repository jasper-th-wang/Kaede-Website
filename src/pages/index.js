import React, { useState, useCallback, useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';
import LeafSVG from '../assets/svgs/leaf.inline.svg';

import Layout from "../components/layout"
import SEO from "../components/seo"
import RevealBox from '../components/revealBox';
import Carousel from '../components/carousel';

import classes from "./index.module.scss";


const IndexPage = () => {
  const imageData = useStaticQuery(graphql`
      query {
        home1: file(relativePath: {eq: "home/home1.jpg"}) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        services: allFile(filter: {name: {in: ["framing", "foaming", "finishing"]}}) {
          nodes {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG,
              }
              id
            }
            name
          }
        }
      }
  `);

  // 0: non is clicked, 1: first one is clicked... etc.
  const [toggledService, setToggledService] = useState(0);

  const serviceToggleHandler = (index) => {
    setToggledService(index);
  }

  const serviceSectionRef = useRef(null);

  const clickToCloseService = useCallback(event => {
    console.log(event.target);
    if (serviceSectionRef.current.contains(event.target)) return;
    console.log('Its not in service section!');
    console.log(toggledService);
    setToggledService(0);
  }, []);
  useEffect(() => {
    document.body.addEventListener('click', clickToCloseService);
    return () => {
      document.body.removeEventListener('click', clickToCloseService);
    }
  }, [clickToCloseService]);

  return (
    <Layout>
      <SEO title="Home" />
      <section className={ classes.hero }>
        <Img fluid={ imageData.home1.childImageSharp.fluid } alt="Dream Home" className={ classes.heroImg } />
        <div className={ classes.heroText }>
          <h2>Building<br />Dreams</h2>
          <h3>from concept<br />to <span>completion</span></h3>
        </div>
      </section>
      <section className={ classes.introSection }>
        <img src="" alt="" />
        <LeafSVG className={ classes.leaf } />
        <h2>Excellence & Quality</h2>
        <p>Based on the North Shore, Kaede Construction and its affiliates have been creating spectacular exterior finishing and cladding installs for over 20 years.</p>
        <p>We specialize in high end  custom homes and the extra ordinary. We have extensive knowledge and  experience in building envelope science and air barrier installations as well.</p>
      </section>
      <section className={ classes.servicesSection } ref={ serviceSectionRef }>
        <h1>Services.</h1>
        <p>Gochujang offal pok pok bushwick disrupt VHS consequat blue bottle prism. Brooklyn shabby chic hella whatever taiyaki minim sint ex laborum food truck kinfolk farm-to-table. Banh mi health goth vinyl 8-bit whatever. Tofu ennui humblebrag subway tile gluten-free, bitters wayfarers +1 exercitation.</p>
        {
          imageData.services.nodes.map((img, index) => (
            <RevealBox
              key={ img.childImageSharp.id }
              boxIndex={ index + 1 }
              currentIndex={ toggledService }
              clickHandler={ serviceToggleHandler }
            >
              <figure>
                <p className={ classes.serviceContent }>taiyaki minim sint ex laborum food truck kinfolk farm-to-table. Banh mi health goth vinyl 8-bit whatever.</p>
              </figure>
              <figure>
                <Img fluid={ img.childImageSharp.fluid } />
                <figcaption>{ img.name }</figcaption>
              </figure>
            </RevealBox>
          ))
        }
      </section>
      <section className={ classes.projectSection }>
        <h1>Projects.</h1>
        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
        {

          <Carousel imageArray={ imageData.services.nodes } />
          // imageData.services.nodes.map((img) => (
          //   <figure key={ img.childImageSharp.id }>
          //     <Img fluid={ img.childImageSharp.fluid } />
          //     <figcaption>
          //       { img.name }
          //       <button>See More</button>
          //     </figcaption>
          //   </figure>

          // ))
        }
      </section>
    </Layout>

  );
}



export default IndexPage
