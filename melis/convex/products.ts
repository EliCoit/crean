import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { api } from "./_generated/api";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("products").collect();
  },
});

export const get = query({
  args: { id: v.id("products") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const create = mutation({
  args: {
    name: v.string(),
    flavor: v.string(),
    description: v.string(),
    price: v.number(),
    protein: v.number(),
    calories: v.number(),
    imageUrl: v.string(),
    inStock: v.boolean(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("products", args);
  },
});

// Initialize products if none exist
export const initializeProducts = mutation({
  args: {},
  handler: async (ctx) => {
    const existingProducts = await ctx.db.query("products").collect();
    if (existingProducts.length > 0) return;

    const products = [
      {
        name: "Vanilla Protein Ice Cream",
        flavor: "Vanilla",
        description: "Classic vanilla flavor with 20g of protein per serving. Smooth, creamy, and guilt-free indulgence.",
        price: 8.99,
        protein: 20,
        calories: 120,
        imageUrl: "/api/placeholder/300/300",
        inStock: true,
      },
      {
        name: "Cookies n Cream Protein Ice Cream",
        flavor: "Cookies n Cream",
        description: "Rich chocolate cookie pieces in creamy vanilla base. 22g protein, maximum flavor.",
        price: 9.99,
        protein: 22,
        calories: 140,
        imageUrl: "/api/placeholder/300/300",
        inStock: true,
      },
      {
        name: "Biscoff Protein Ice Cream",
        flavor: "Biscoff",
        description: "Indulgent Biscoff cookie flavor with caramelized notes. 21g protein for the ultimate treat.",
        price: 10.99,
        protein: 21,
        calories: 135,
        imageUrl: "/api/placeholder/300/300",
        inStock: true,
      },
      {
        name: "Chocolate Peanut Butter Protein Ice Cream",
        flavor: "Chocolate Peanut Butter",
        description: "Rich chocolate with creamy peanut butter swirls. 24g protein, pure satisfaction.",
        price: 10.99,
        protein: 24,
        calories: 150,
        imageUrl: "/api/placeholder/300/300",
        inStock: true,
      },
    ];

    for (const product of products) {
      await ctx.db.insert("products", product);
    }
  },
});

// Initialize all sample data
export const initializeAllData = mutation({
  args: {},
  handler: async (ctx) => {
    // Initialize products
    await ctx.runMutation(api.products.initializeProducts, {});
    
    // Initialize testimonials
    await ctx.runMutation(api.testimonials.initializeTestimonials, {});
    
    // Initialize blog posts
    await ctx.runMutation(api.blog.initializeBlogPosts, {});
  },
});
