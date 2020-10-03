import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';
// import LeafSVG from '../assets/svgs/leaf.inline.svg';
import FacebookIcon from '../assets/svgs/facebook.inline.svg';
import InstagramIcon from '../assets/svgs/instagram.inline.svg';

import Layout from "../components/layout"
import ContactForm from '../components/ContactForm';
import SEO from "../components/seo"


const ContactUsPage = () => {
  const imageData = useStaticQuery(graphql`
      query {
        home1: file(relativePath: {eq: "contact-us/20171017.jpg"}) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        mainLogo: file(relativePath: {eq: "logo/kaede_logo_leaf.png"}) {
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
      <SEO title="Contact Us" />
      <section className="hero">
        <Img fluid={ imageData.home1.childImageSharp.fluid } alt="Dream Home" className="hero__img" />
        <div className="hero__text">
          <h1>Build<br />with Us!</h1>
        </div>
      </section>
      <section className="section section--grey">
        <div className="section__content section__content--no-heading section__content--white-lg">
          {/* <h1 className="util-lh-1 util-shrink">Build with Us!</h1> */ }
          <p>We would love to hear from you.</p>
          <p>Whether you are planning a project, interested in getting involved with our mission, or inquiring about a job opportunity, please don’t hesitate to reach out. </p>
        </div>
      </section>
      <section className="section section--white">
        <Img fluid={ imageData.mainLogo.childImageSharp.fluid } />
        <div className="contact-info">
          <p className="contact-info__company-name">Kaede Construction Ltd.</p>
          <div className="contact-info__address">
            <p>242 4th Street</p>
            <p>North Vancouver, BC</p>
            <p>Canada V7M 1H7</p>
          </div>
          <div className="contact-info__connect">
            <p>brian@kaedeconstruction.com</p>
            <p>604-970-5240</p>
            <div className="social-media-icons">
              <a href="https://www.facebook.com/kaedeconstruction" className="social-media-icons__icon">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/kaedeconstruction/" className="social-media-icons__icon">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--grey">
        <ContactForm />
      </section>




    </Layout>

  );
}

export default ContactUsPage;