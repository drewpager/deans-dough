import React from 'react';
import { graphql } from 'gatsby';
import img from 'gatsby-image';

export default function SinglePizzaPage({ data }) {
  const singlePizza = data.pizza;
  return (
    <div>
      <img src={singlePizza.image.asset} alt={singlePizza.name} />
      <p>{singlePizza.name}</p>
    </div>
  );
  // return <p>Single Pizza Coming Soon!!!</p>;
}

export const query = graphql`
  query($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      toppings {
        name
        id
        vegetarian
      }
    }
  }
`;
