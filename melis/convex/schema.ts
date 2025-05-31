import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  products: defineTable({
    name: v.string(),
    flavor: v.string(),
    description: v.string(),
    price: v.number(),
    protein: v.number(),
    calories: v.number(),
    imageUrl: v.string(),
    inStock: v.boolean(),
  }),
  
  orders: defineTable({
    userId: v.optional(v.id("users")),
    customerEmail: v.string(),
    customerName: v.string(),
    items: v.array(v.object({
      productId: v.id("products"),
      quantity: v.number(),
      price: v.number(),
    })),
    total: v.number(),
    status: v.string(), // "pending", "processing", "shipped", "delivered"
    shippingAddress: v.object({
      street: v.string(),
      city: v.string(),
      state: v.string(),
      zipCode: v.string(),
      country: v.string(),
    }),
  }).index("by_user", ["userId"]),
  
  testimonials: defineTable({
    name: v.string(),
    review: v.string(),
    rating: v.number(),
    verified: v.boolean(),
  }),
  
  blogPosts: defineTable({
    title: v.string(),
    content: v.string(),
    excerpt: v.string(),
    author: v.string(),
    imageUrl: v.string(),
    published: v.boolean(),
    tags: v.array(v.string()),
  }).index("by_published", ["published"]),
  
  emailSubscriptions: defineTable({
    email: v.string(),
    subscribed: v.boolean(),
  }).index("by_email", ["email"]),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
