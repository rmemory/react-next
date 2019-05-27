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
			info // return value, in this an Item
		);
	
		console.log(item);
	
		return item;
	},
};

module.exports = mutations;
