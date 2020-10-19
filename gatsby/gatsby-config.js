import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Dean's Dough`,
    siteUrl: 'http://deansdough.com',
    description: `The best dough in Dean's world`,
    instagram: `@deankneadsdough`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '9l4muuxj',
        dataset: 'production',
        watchmode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
