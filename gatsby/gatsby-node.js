import path from 'path';

async function turnPizzasIntoPages({ graphql, actions }) {
  // 1. Get Template
  const pizzaTemplate = path.resolve('./src/templates/Pizza.js');
  // 2. query all pizzas
  const { data } = await graphql(`
    query {
      pizzas: allSanityPizza {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  console.log(data);
  // 3. loop over each pizza and create page for it
  data.pizzas.nodes.forEach((pizza) => {
    actions.createPage({
      path: `pizza/${pizza.slug.current}`,
      component: pizzaTemplate,
      context: {
        slug: pizza.slug.current,
      },
    });
  });
}

export async function CreatePages(params) {
  // 1. pizzas
  await turnPizzasIntoPages(params);
  // 2. toppings

  // 3. slicemasters
}