const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
//const { createStore } = require('./utils');
const resolvers = require('./resolvers');

const ShowAPI = require('./datasources/shows');
//const userAPI = require('./datasources/user');

//const store = createStore();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        showAPI: new ShowAPI(),
        //userAPI: new userAPI({store})
    })
});

server.listen().then(({ url }) => {
    console.log(`Server is running at ${url}`);
})