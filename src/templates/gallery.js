import React from 'react';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import Wrapper from '../components/Wrapper/Wrapper';
import GalleryHead from '../components/Gallery/GalleryHead';
import GalleryComposition from '../components/Gallery/GalleryComposition';
import styles from '../components/Post/Post.module.scss';

const GalleryTemplate = ({ data, location }) => {
  const gallery = data.contentfulGallery;
  return (
    <Layout location={location}>
      <Link className={styles['post__home-button']} to="/">All Articles</Link>
      <Helmet></Helmet>
      <GalleryHead title={gallery.title} desc={gallery.body} tags={gallery.tags} />
      <Wrapper>
      <GalleryComposition
        photos={gallery.images}
      />
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query {
    contentfulGallery {
      title
      tags
      images {
        title
        description
        fluid(maxWidth: 1800, quality: 90) {
          ...GatsbyContentfulFluid_withWebp
          src
        }
      }
    }
  }
`;
export default GalleryTemplate;

//      publishDate(formatString: "MMMM DD, YYYY")