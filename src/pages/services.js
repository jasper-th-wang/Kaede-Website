import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';
import LeafSVG from '../assets/svgs/leaf.inline.svg';
import ArchitectSVG from '../assets/svgs/architect.inline.svg';
import BuildingSVG from '../assets/svgs/building.inline.svg';
import ConstructionSVG from '../assets/svgs/construction.inline.svg';
import SchedulingSVG from '../assets/svgs/scheduling.inline.svg';
import RevealBoxes from '../components/revealBoxes';

import SEO from "../components/seo"


const ServicePage = () => {
  const imageData = useStaticQuery(graphql`
      query {
        hero: file(relativePath: {eq: "services/20171002.jpg"}) {
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
  const servicesContents = [
    'taiyaki minim sint ex laborum food truck kinfolk farm-to-table. Banh mi health goth vinyl 8-bit whatever.',
    'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day.',
    'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.',
  ]


  return (

    <>
      <SEO title="Services" />
      <section className="hero">
        <Img fluid={ imageData.hero.childImageSharp.fluid } alt="Dream Home" className="hero__img" />
        <div className="hero__text">
          <h1>Services</h1>
        </div>
      </section>
      <section className="section section--white">
        <div className="section__content" style={ { marginBottom: '3rem' } }>
          <LeafSVG className="leaf" />
          <p>Our comprehensive range of services includes aluminum siding, cedar siding, fiber cement siding, insulation installation, siding installation, siding repair, siding sales, soffit installation, soffit repair, trim work, wood siding, hardi siding, flashings and metalwork, outsulation, nichia, al13, alucobond, custom decks & fences...etc.</p>
        </div>
        <RevealBoxes imageData={ imageData } servicesContents={ servicesContents } />
      </section>

      <section className="section section--grey">
        <h1 className="util-lh-1 util-shrink">Project Management.</h1>
        <div className="section__content">
          <p>Gochujang offal pok pok bushwick disrupt VHS consequat blue bottle prism. Brooklyn shabby chic hella whatever taiyaki minim sint ex laborum food truck kinfolk farm-to-table.</p>
        </div>
        <div className="project-management-list">
          <figure className="info-card">
            <ConstructionSVG className="info-card__img" />
            <figcaption className="info-card__text">Sourcing of Materials</figcaption>
          </figure>
          <figure className="info-card">
            <SchedulingSVG className="info-card__img" />
            <figcaption className="info-card__text">Scheduling of Work & Trades</figcaption>
          </figure>
          <figure className="info-card">
            <ArchitectSVG className="info-card__img" />
            <figcaption className="info-card__text">Design & Decoration</figcaption>
          </figure>
          <figure className="info-card">
            <BuildingSVG className="info-card__img" />
            <figcaption className="info-card__text">Completion of all Building Work</figcaption>
          </figure>
        </div>
      </section>
      <section className="section section--white">
        <h2>Ready For Your Next Project?</h2>
        <div className="section__content">
          <p>Let us help you plan, budget and complete your home reonovation ideas!</p>

        </div>
        <button className="small-button"><Link to="/contact-us">Contact Us</Link></button>
        <LeafSVG className="leaf" />
      </section>

    </>

  );
}

export default ServicePage;