import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';
import LeafSVG from '../assets/svgs/leaf.inline.svg';
import SEO from "../components/seo"
import RevealBoxes from '../components/revealBoxes';
import Carousel from '../components/carousel';



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

  const servicesContents = [
    'taiyaki minim sint ex laborum food truck kinfolk farm-to-table. Banh mi health goth vinyl 8-bit whatever.',
    'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day.',
    'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.',
  ]

  return (
    <>
      <SEO title="Home" />
      <section className="hero">
        <Img fluid={ imageData.home1.childImageSharp.fluid } alt="Dream Home" className="hero__img" />
        <div className="hero__text hero__text--home">
          <h2>Building<br className="hero__text--home__br1" /> Dreams</h2>
          <h3>from concept<br className="hero__text--home__br2" /> to <span>completion</span></h3>
        </div>
      </section>
      <section className="section section--white section--intro">
        <LeafSVG className="leaf" />
        <div className="section__content section__content--no-heading">
          <p>Based on the North Shore, Kaede Construction and its affiliates have been creating spectacular exterior finishing and cladding installs for over 20 years.</p>
          <p>We specialize in high end  custom homes and the extra ordinary. We have extensive knowledge and experience in building envelope science and air barrier installations as well.</p>
        </div>
      </section>
      <section className="section section--red">
        <h1>Services.</h1>
        <div className="section__content">
          <p>Gochujang offal pok pok bushwick disrupt VHS consequat blue bottle prism. Brooklyn shabby chic hella whatever taiyaki minim sint ex laborum food truck kinfolk farm-to-table. Banh mi health goth vinyl 8-bit whatever. Tofu ennui humblebrag subway tile gluten-free, bitters wayfarers +1 exercitation.</p>
        </div>
        <RevealBoxes imageData={ imageData } servicesContents={ servicesContents } />
      </section>
      <section className="section section--grey">
        <h1>Projects.</h1>
        <div className="section__content">
          <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>

        </div>
        <Carousel imageArray={ imageData.services.nodes } />
      </section>
      <section className="section section--white">
        <h1 className="util-lh-1">Get in Touch!</h1>
        <div className="section__content">
          <p>Let us help you plan, budget and complete your home reonovation ideas!</p>

        </div>
        <button className="small-button"><Link to="/contact-us">Contact Us</Link></button>
        <LeafSVG className="leaf" />
      </section>
    </>
  );
}



export default IndexPage
