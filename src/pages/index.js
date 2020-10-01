import React, { useState, useCallback, useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';
import LeafSVG from '../assets/svgs/leaf.inline.svg';

import Layout from "../components/layout"
import SEO from "../components/seo"
import RevealBox from '../components/revealBox';
import Carousel from '../components/carousel';

import '../assets/sass/main.scss';


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
    <Layout>
      <SEO title="Home" />
      <section className="hero">
        <Img fluid={ imageData.home1.childImageSharp.fluid } alt="Dream Home" className="hero__img" />
        <div className="hero__text">
          <h2>Building<br />Dreams</h2>
          <h3>from concept<br />to <span>completion</span></h3>
        </div>
      </section>
      <section className="section section--intro">
        <img src="" alt="" />
        <LeafSVG className="leaf" />
        <div className="section__content">
          <p>Based on the North Shore, Kaede Construction and its affiliates have been creating spectacular exterior finishing and cladding installs for over 20 years.</p>
          <p>We specialize in high end  custom homes and the extra ordinary. We have extensive knowledge and experience in building envelope science and air barrier installations as well.</p>
        </div>
      </section>
      <section className="section section--services" ref={ serviceSectionRef }>
        <h1>Services.</h1>
        <div className="section__content">
          <p>Gochujang offal pok pok bushwick disrupt VHS consequat blue bottle prism. Brooklyn shabby chic hella whatever taiyaki minim sint ex laborum food truck kinfolk farm-to-table. Banh mi health goth vinyl 8-bit whatever. Tofu ennui humblebrag subway tile gluten-free, bitters wayfarers +1 exercitation.</p>
        </div>

        {
          imageData.services.nodes.map((img, index) => (
            <RevealBox
              key={ img.childImageSharp.id }
              boxIndex={ index + 1 }
              currentIndex={ toggledService }
              clickHandler={ serviceToggleHandler }
            >
              <figure>
                <p>taiyaki minim sint ex laborum food truck kinfolk farm-to-table. Banh mi health goth vinyl 8-bit whatever.</p>
              </figure>
              <figure>
                <Img fluid={ img.childImageSharp.fluid } />
                <figcaption>{ img.name }</figcaption>
              </figure>
            </RevealBox>
          ))
        }

      </section>
      <section className="section section--projects">
        <h1>Projects.</h1>
        <div className="section__content">
          <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>

        </div>
        {

          <Carousel imageArray={ imageData.services.nodes } />

        }
      </section>
      <section className="section section--contact">
        <h1>Get in Touch!</h1>
        <div className="section__content">
          <p>Let us help you plan, budget and complete your home reonovation ideas!</p>

        </div>
        <button className="button--sm-red">Contact Us</button>
        <LeafSVG className="leaf" />
      </section>
    </Layout>

  );
}



export default IndexPage
