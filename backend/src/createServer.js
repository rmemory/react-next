const { GraphQLServer } = require('graphql-yoga');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const db = require('./db');

/* This file is used to create the GraphQL Yoga Server.
   It takes in the DB from db.js, defines the client facing
   graphql schema (as opposed to the Prisma DB facing graphql
   schema defined in datamodel.prisma or more accurately
   src/generated/prisma.graphql), and it assigns resolvers
   to the client facing mutations and queries.

   This file is sandwiched inbetween db.js and index.js
*/

function createServer() {
	return new GraphQLServer({
		// Endpoint or client facing types
		typeDefs: 'src/schema.graphql', 
		// Each type defined in the schema must be matched up by a mutation or query
		resolvers: {
			Mutation: Mutation,
			Query: Query,
		},
		resolverValidationOptions: {
			requireResolversForResolveType: false, // magic: Turns of warnings
		},
		context: req => ({ ...req, db }), // Allows us to access the DB from the resolvers, from each Node request
	});
}

module.exports = createServer;
