// import React from "react";
// import PropTypes from "prop-types";
// import { useStaticQuery, graphql } from "gatsby";
// import Img from "gatsby-image";

// /*
//  * This component is built using `gatsby-image` to automatically serve optimized
//  * images with lazy loading and reduced file sizes. The image is loaded using a
//  * `useStaticQuery`, which allows us to load the image from directly within this
//  * component, rather than having to pass the image data down from pages.
//  *
//  * For more information, see the docs:
//  * - `gatsby-image`: https://gatsby.dev/gatsby-image
//  * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
//  */

// const Image = ({ folder, name }) => {
//   const data = useStaticQuery(graphql`
//   query {
//     homePhotos: allFile(filter: {relativeDirectory: {eq: "home"}}) {
//       nodes {
//         childImageSharp {
//           fluid {
//             ...GatsbyImageSharpFluid
//           }
//         }
//         name
//       }
//     }
//   }
//   `)

//   if (!data?.[folder]?.[name]) {
//     return <div>Picture not found</div>
//   }

//   return <Img fluid={ data[folder].nodes[name].fluid } />
// }

// export default Image

// Image.defaultProps = {
//   folder: 'placeholder',
//   name: 'placeholder',
// }

// Image.propTypes = {
//   folder: PropTypes.string,
//   name: PropTypes.string,
// }