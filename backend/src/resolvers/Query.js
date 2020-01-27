const { forwardTo } = require('prisma-binding');

const Query = {
  users: forwardTo('db'),
  user: forwardTo('db'),

  // async items(parent, args, ctx, info) {
  //   const items = await ctx.db.query.items();
  //   return items;
  // }

  // async users(parent, args, ctx, info) {
  //   const users = await ctx.db.query.users();
  //   return users;
  // },
};

module.exports = Query;
