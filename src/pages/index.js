import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import classes from "./index.module.scss";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className={ classes.hero }>
      <img src="" alt="" />
      <h2>Building Dreams from concept to completion</h2>
    </section>
    <section className={ classes.introSection }>
      <img src="" alt="" />
      <h2>Excellence & Quality</h2>
      <p>Based on the North Shore, Kaede Construction and its affiliates have been creating spectacular exterior finishing and cladding installs for over 20 years. We specialize in high end  custom homes and the extra ordinary. We have extensive knowledge and  experience in building envelope science and air barrier installations as well.</p>
    </section>
    <section className={ classes.projectsSection }>
      <img src="" alt="" />
      <img src="" alt="" />
      <img src="" alt="" />
    </section>
  </Layout>
)

export default IndexPage
