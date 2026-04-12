import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

export const createBookmark = mutation({
	args: {
		url: v.string(),
		title: v.string(),
		description: v.optional(v.string())
	},
	handler: async (ctx, args) => {
		const newBookmark = await ctx.db.insert('bookmarks', {
			url: args.url,
			title: args.title,
			description: args.description
		});

		return newBookmark;
	}
});

export const getBookmarks = query({
	args: {},
	handler: async (ctx) => {
		const bookmarks = await ctx.db.query('bookmarks').collect();
		return bookmarks;
	}
});
