import { query } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
handler: async (ctx) => {
    const stories = await ctx.db.query('stories').collect();
    return stories;
}
})
