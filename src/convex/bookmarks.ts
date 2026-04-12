import { mutation } from './_generated/server';
import { v } from 'convex/values';

// Create a new bookmark
export const createBookmark = mutation({
	args: {
		url: v.string(),
		title: v.string(),
		description: v.optional(v.string())
	},
	handler: async (ctx, args) => {
		const newBookmark = await ctx.db.insert('bookmarks', {
			url: args.url,
			title: args.url,
			description: args.url
		});

		return newBookmark;
	}
});
