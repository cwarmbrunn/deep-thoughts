const resolvers = {
  Query: {
    helloWorld: () => {
      return `Hello World!`;
    },
  },
};

// Export
module.exports = resolvers;
