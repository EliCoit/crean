import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const subscribe = mutation({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("emailSubscriptions")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (existing) {
      if (!existing.subscribed) {
        await ctx.db.patch(existing._id, { subscribed: true });
      }
      return existing._id;
    }

    return await ctx.db.insert("emailSubscriptions", {
      email: args.email,
      subscribed: true,
    });
  },
});
