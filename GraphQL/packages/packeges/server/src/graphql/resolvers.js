import { resolvers as demandResolvers } from "./Demand/Demand";
import { resolvers as listResolvers } from "./List/List";
import { resolvers as clientResolvers } from "./Client/Client";
import { resolvers as nodeResolvers } from "./Node/Node";

const resolvers = {
  ...nodeResolvers,
  ...listResolvers,
  ...clientResolvers,
  ...demandResolvers,

  Query: {
    ...clientResolvers.Query,
    ...demandResolvers.Query,
  },

  Mutation: {
    ...clientResolvers.Mutation,
  },
};

export default resolvers;
