const { forwardTo } = require('prisma-binding');

const Query = {
	async hi(parent, args, ctx, info) {
		return "Hello world: query";
	},

	// item: forwardTo('db'),
	async item(parent, args, ctx, info) {
		if (!args.where || !args.where.id) {
			throw new Error('Item ID is missing');
		}

		return ctx.db.query.item(
			{
				where: {
					id: args.where.id, 
				},
			},
			info // return value (passed in from client side)
		);
	},

	items: forwardTo('db'),
	// async items(parent, args, ctx, info) {
	//   console.log('Getting Items!!');

	//   // We can just use forwardTo because it is identical
	//   const items = await ctx.db.query.items();
	//   return items;
	// },
};

module.exports = Query;
