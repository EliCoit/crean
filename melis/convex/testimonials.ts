import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("testimonials").collect();
  },
});

export const create = mutation({
  args: {
    name: v.string(),
    review: v.string(),
    rating: v.number(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("testimonials", {
      ...args,
      verified: false,
    });
  },
});

export const initializeTestimonials = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db.query("testimonials").collect();
    if (existing.length > 0) return;

    const testimonials = [
      {
        name: "Sarah M.",
        review: "Finally, ice cream I can enjoy without the guilt! The Chocolate Peanut Butter flavor is incredible.",
        rating: 5,
        verified: true,
      },
      {
        name: "Mike T.",
        review: "As a personal trainer, I recommend Meli's to all my clients. Great protein content and amazing taste!",
        rating: 5,
        verified: true,
      },
      {
        name: "Jessica L.",
        review: "The Biscoff flavor is my new obsession. Perfect post-workout treat that actually helps my goals.",
        rating: 5,
        verified: true,
      },
    ];

    for (const testimonial of testimonials) {
      await ctx.db.insert("testimonials", testimonial);
    }
  },
});
