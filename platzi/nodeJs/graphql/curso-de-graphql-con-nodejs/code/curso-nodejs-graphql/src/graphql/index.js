const { ApolloServer } = require("apollo-server-express");
const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");
const { buildContext } = require("graphql-passport");
const { loadFiles } = require("@graphql-tools/load-files");
const { typeDefs: scalarsTypeDefs, resolvers: scalarsResolvers } = require("graphql-scalars");

const resolvers = require('./resolvers');

const useGraphql = async (app) => {
  const typeDefs = [
    ...await loadFiles('./src/**/*.graphql'),
    scalarsTypeDefs
  ];

  const allResolvers = [
    scalarsResolvers,
    resolvers
  ];

  const server = new ApolloServer({
    typeDefs,
    resolvers: allResolvers,
    context: ({ req, res }) => buildContext({ req, res }),
    playground: true,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground
    ]
  })
  await server.start();
  server.applyMiddleware({ app });
}

module.exports = useGraphql;
