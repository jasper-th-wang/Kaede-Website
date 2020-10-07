// layout inspired by https://gmcontractors.co.uk/about/

import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';
import LeafSVG from '../assets/svgs/leaf.inline.svg';
import SEO from "../components/seo"
import Carousel from '../components/carousel';


const AboutUsPage = () => {
  const imageData = useStaticQuery(graphql`
      query {
        hero: file(relativePath: {eq: "about-us/20170908.jpg"}) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        about1: file(relativePath: {eq: "about-us/20170809.jpg"}) {
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

    <>
      <SEO title="About Us" />
      <section className="hero">
        <Img fluid={ imageData.hero.childImageSharp.fluid } alt="About-us" className="hero__img" />
        <div className="hero__text">
          <h1>About Us.</h1>
        </div>
      </section>
      <section className="section section--white section--about-us">
        <div className="section__content section__content--no-heading section__content--grey-lg section__content--about-us">
          <p>Working for numerous construction companies based on the North Shore since 1986,
          in 1996 Kaede Construction was formed. Using a base of contacts and clients from previous
          jobs Kaede began to grow. For 10 years we have employed many different craftsmen,
          some who have branched off on their own or those who have choose to continue to work
faithfully and diligently.</p>
          <p>We continue to use North Shore trades and suppliers whenever possible for our continuing
          growing client base.
          Also by keeping up to date with the ever changing building codes and standards we always
          hope to achieve the best possible results within our clients’ budgets and needs.</p>
        </div>
      </section>
      <Img fluid={ imageData.about1.childImageSharp.fluid } alt="House" />
      <section className="section section--white section--about-us">
        <div className="section__content section__content--no-heading section__content--grey-lg section__content--about-us">
          <p>In June of 1996 I was approached by a Japanese company looking for Canadian carpenters
to build western style 2x4 houses within Japan.</p>
          <p>At that time Japan seemed a million miles away but choosing it was the right time, we were off.
          Now 10 years later we have built over 55 homes for numerous companies in Japan and continue
          to make new and keep old relationships with our Pacific Rim neighbors while continuing to
renovate and build in Vancouver.</p>
        </div>
      </section>
      <Carousel imageArray={ imageData.services.nodes } mode={ 2 } />
      <section className="section section--grey section--about-us">
        <div className="section__content section__content--no-heading section__content--white-lg section__content--about-us">
          <p>While the Japanese market has slowed somewhat in the recent years, Vancouver continues
          to grow with new housing starts and numerous renovations beginning every day.
          As Kaede continues to grow and build on the North Shore we always look forward to meeting
new clients, tradesmen and building suppliers living in the Greater Vancouver area.</p>
          <p>Kaede is committed to always learning and using the best trades and building suppliers
          available. This helps us to achieve our clients’ goals and also to further our standing
in the building community.</p>
        </div>
      </section>
      <section className="section section--white section--about-us">
        <h2>Ready For Your Next Project?</h2>
        <div className="section__content section__content--about-us">
          <p>Let us help you plan, budget and complete your home reonovation ideas!</p>

        </div>
        <button className="small-button"><Link to="/contact-us">Contact Us</Link></button>
        <LeafSVG className="leaf" />
      </section>
    </>

  );
}

export default AboutUsPage;