import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

export const saveBookmark = mutation({
	args: {
		url: v.string(),
		title: v.string(),
		description: v.optional(v.string())
	},
	handler: async (ctx, args) => {
		const identity = await ctx.auth.getUserIdentity();
		if (!identity) {
			throw new Error('Unauthorized');
		}

		const existing = await ctx.db
			.query('bookmarks')
			.withIndex('by_url', (q) => q.eq('userId', identity.subject).eq('url', args.url))
			.unique();

		if (existing) {
			return existing._id;
		}

		return await ctx.db.insert('bookmarks', {
			userId: identity.subject,
			url: args.url,
			title: args.title,
			description: args.description ?? ''
		});
	}
});

export const getBookmarks = query({
	args: {},
	handler: async (ctx) => {
		const identity = await ctx.auth.getUserIdentity();
		if (!identity) {
			throw new Error('Unauthorized');
		}

		return await ctx.db
			.query('bookmarks')
			.withIndex('by_user', (q) => q.eq('userId', identity.subject))
			.collect();
	}
});
