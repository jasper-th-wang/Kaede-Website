import React, { useState, useCallback, useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';
import LeafSVG from '../assets/svgs/leaf.inline.svg';

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicePage = () => {


  return (

    <Layout>
      <SEO title="Services" />

    </Layout>

  );
}