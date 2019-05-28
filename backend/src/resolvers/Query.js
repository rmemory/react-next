const { forwardTo } = require('prisma-binding');

const Query = {
	async hi(parent, args, ctx, info) {
		return "Hello world: query";
	},

	item: forwardTo('db'),
	// async item(parent, args, ctx, info) {
	// 	if (!args.where || !args.where.id) {
	// 		throw new Error('Item ID is missing');
	// 	}

	// 	return ctx.db.query.item(
	// 		{
	// 			where: {
	// 				id: args.where.id, 
	// 			},
	// 		},
	// 		info // return value (passed in from client side)
	// 	);
	// },

	items: forwardTo('db'),
	// async items(parent, args, ctx, info) {
	//	 console.log('Getting Items!!');

	//	 // We can just use forwardTo because it is identical
	//	 const items = await ctx.db.query.items();
	//	 return items;
	// },

	itemsConnection: forwardTo('db'),
	// async this.itemsConnection(parent, args, ctx, info) {
	// 	itemsConnection(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ItemConnection!
	// }

	me(parent, args, ctx, info) {
		// check if there is a current user ID
		if (!ctx.request.userId) {
			return null;
		}
		
		return ctx.db.query.user({
				where: { id: ctx.request.userId },
			},
			info
		);
	},
};

module.exports = Query;
