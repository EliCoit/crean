/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as auth from "../auth.js";
import type * as blog from "../blog.js";
import type * as http from "../http.js";
import type * as orders from "../orders.js";
import type * as products from "../products.js";
import type * as router from "../router.js";
import type * as subscriptions from "../subscriptions.js";
import type * as testimonials from "../testimonials.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  auth: typeof auth;
  blog: typeof blog;
  http: typeof http;
  orders: typeof orders;
  products: typeof products;
  router: typeof router;
  subscriptions: typeof subscriptions;
  testimonials: typeof testimonials;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
