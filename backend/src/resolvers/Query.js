const { forwardTo } = require('prisma-binding');

const Query = {
  users: forwardTo('db'),
  user: forwardTo('db'),

  me(parent, args, ctx, info) {
    // check if there is a current userID

    if (!ctx.request.email) {
      return null;
    }

    return ctx.db.query.user(
      {
        where: {
          email: ctx.request.email,
        },
      },
      info
    );
  },

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
