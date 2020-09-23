import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
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
      }
  `);
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
        <h2>Excellence & Quality</h2>
        <p>Based on the North Shore, Kaede Construction and its affiliates have been creating spectacular exterior finishing and cladding installs for over 20 years.</p>
        <p>We specialize in high end  custom homes and the extra ordinary. We have extensive knowledge and  experience in building envelope science and air barrier installations as well.</p>
      </section>
      <section className={ classes.projectsSection }>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </section>
    </Layout>

  );
}



export default IndexPage
