import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

const PersonStyle = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

export default function Person({ data }) {
  const person = data.slicemaster;

  return (
    <>
      <SEO
        title={`Slicemaster ${person.name}`}
        image={person.image?.asset?.fluid?.src}
      />
      <PersonStyle>
        <Img fluid={person.image.asset.fluid} alt={person.name} />
        <div>
          <h2 className="mark">{person.name}</h2>
          <p>{person.description}</p>
        </div>
      </PersonStyle>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    slicemaster: sanityPerson(slug: { current: { eq: $slug } }) {
      name
      id
      description
      image {
        asset {
          fluid(maxWidth: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
