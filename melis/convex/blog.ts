import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("blogPosts")
      .withIndex("by_published", (q) => q.eq("published", true))
      .order("desc")
      .collect();
  },
});

export const get = query({
  args: { id: v.id("blogPosts") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const initializeBlogPosts = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db.query("blogPosts").collect();
    if (existing.length > 0) return;

    const posts = [
      {
        title: "The Science Behind Protein Ice Cream",
        content: "Discover how protein ice cream can fit into your fitness routine and support your health goals...",
        excerpt: "Learn about the nutritional benefits of protein ice cream and how it compares to traditional desserts.",
        author: "Meli's Team",
        imageUrl: "/api/placeholder/400/250",
        published: true,
        tags: ["nutrition", "protein", "health"],
      },
      {
        title: "5 Post-Workout Treats That Actually Help Recovery",
        content: "Not all desserts are created equal. Here are five treats that can actually support your recovery...",
        excerpt: "Fuel your recovery with these delicious and nutritious post-workout treats.",
        author: "Dr. Sarah Johnson",
        imageUrl: "/api/placeholder/400/250",
        published: true,
        tags: ["recovery", "fitness", "nutrition"],
      },
    ];

    for (const post of posts) {
      await ctx.db.insert("blogPosts", post);
    }
  },
});
