import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';
// import LeafSVG from '../assets/svgs/leaf.inline.svg';

import Layout from "../components/layout"

import SEO from "../components/seo"
import classes from './projects.module.scss';

const ProjectsPage = () => {
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

  return (

    <Layout>
      <SEO title="Projects" />
      <section className={ classes.hero }>
        <Img fluid={ imageData.home1.childImageSharp.fluid } alt="Dream Home" className={ classes.heroImg } />
        <div className={ classes.heroText }>
          <h1>Projects</h1>
        </div>
      </section>

    </Layout>

  );
}

export default ProjectsPage;