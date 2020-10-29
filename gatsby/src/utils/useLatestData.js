import { useState, useEffect } from 'react';

const gql = String.raw;

const deets = gql`
  name
    _id
    image {
      asset {
        url
        metadata {
          lqip
        }
      }
    }
`;

export function useLatestData() {
  const [hotSlices, setHotSlices] = useState();
  const [slicemasters, setSlicemasters] = useState();

  useEffect(() => {
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
        query {
          StoreSettings(id: "downtown") {
            name
            slicemaster {
              ${deets}
            }
            hotslices {
              ${deets}
            }
          }
        }
      `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setHotSlices(res.data.StoreSettings.hotslices);
        setSlicemasters(res.data.StoreSettings.slicemaster);
      })
      .catch((err) => {
        console.log('Shooots!');
        console.log(err);
      });
  }, []);
  return {
    slicemasters,
    hotSlices,
  };
}
