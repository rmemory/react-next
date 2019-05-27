const { forwardTo } = require('prisma-binding');

const Query = {
	async hi(parent, args, ctx, info) {
		return "Hello world: query";
	},
	item: forwardTo('db'),
	items: forwardTo('db'),
	// async items(parent, args, ctx, info) {
	//   console.log('Getting Items!!');

	//   // We can just use forwardTo because it is identical
	//   const items = await ctx.db.query.items();
	//   return items;
	// },
};

module.exports = Query;
