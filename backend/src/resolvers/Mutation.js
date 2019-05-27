const mutations = {
	async hi(parent, args, ctx, info) {
		return "Hello world: mutation";
	},
	
	async createItem(parent, args, ctx, info) {
		// TODO: Check if user is logged in
	
		/*
		 * Here is where we interact with Prisma DB
		 * see ./generated/prisma.graphql for the createItem function defintion
		 */
		const item = await ctx.db.mutation.createItem(
			{
				data: {
					...args, // title, description, image, largeImage, price
				},
			},
			info // return value (passed in from client side)
		);
	
		console.log(item);
	
		return item;
	},

	updateItem(parent, args, ctx, info) {
		// first take a copy of the variables being updated
		const updates = { ...args };
		
		// remove the ID from the updates because the id isn't changing
		delete updates.id;
		
		// run the update method
		return ctx.db.mutation.updateItem(
		  {
			data: updates,
			where: {
			  id: args.id, // unmodified ID
			},
		  },
		  info // return value (passed in from client side)
		);
	  },
};

module.exports = mutations;
