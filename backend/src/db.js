/* This file connects to the remote prisma DB and gives 
	us the ability to query the with JS from the Yoga 
	server. There are other language bindings for Prisma
	other than JS ... here we are using JS bindings.
	 
	In basic terms, this file creates the DB. It is used by
	createServer.js
	
	Any Yoga resolver will need this guy in order to access
	the DB
	*/

const { Prisma } = require('prisma-binding');

const db = new Prisma({
	typeDefs: 'src/generated/prisma.graphql', // Tells Prisma what our types are
	endpoint: process.env.PRISMA_ENDPOINT, // Our GraphQL endpoint
	secret: process.env.PRISMA_SECRET, 
	debug: false,
});

module.exports = db;
