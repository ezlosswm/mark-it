import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

function normalizeTag(input: string) {
	return input.trim().toLowerCase().replace(/\s+/g, '-');
}

export const saveBookmark = mutation({
	args: {
		url: v.string(),
		title: v.string(),
		description: v.optional(v.string()),
		tags: v.optional(v.array(v.string()))
	},
	handler: async (ctx, args) => {
		const identity = await ctx.auth.getUserIdentity();
		if (!identity) {
			throw new Error('Unauthorized');
		}

		const userId = identity.subject;

		const existing = await ctx.db
			.query('bookmarks')
			.withIndex('by_url', (q) => q.eq('userId', userId).eq('url', args.url))
			.unique();

		let bookmarkId;

		if (existing) {
			return existing._id;
		} else {
			bookmarkId = await ctx.db.insert('bookmarks', {
				userId: identity.subject,
				url: args.url,
				title: args.title,
				description: args.description ?? ''
			});
		}

		for (const rawTag of args.tags ?? []) {
			const slug = normalizeTag(rawTag);

			let tag = await ctx.db
				.query('tags')
				.withIndex('by_slug', (q) => q.eq('userId', userId).eq('slug', slug))
				.unique();

			let tagId;

			if (!tag) {
				tagId = await ctx.db.insert('tags', {
					userId,
					name: rawTag.trim(),
					slug,
					usageCount: 1
				});
			} else {
				tagId = tag._id;

				await ctx.db.patch(tag._id, {
					usageCount: tag.usageCount++
				});
			}

			const existingJoin = await ctx.db
				.query('bookmarkTags')
				.withIndex('by_bookmark_tag', (q) => q.eq('bookmarkId', bookmarkId).eq('tagId', tagId))
				.unique();

			if (!existingJoin) {
				await ctx.db.insert('bookmarkTags', {
					bookmarkId,
					tagId
				});
			}
		}

		return bookmarkId;
	}
});

export const getBookmarks = query({
	args: {},
	handler: async (ctx) => {
		const identity = await ctx.auth.getUserIdentity();
		if (!identity) {
			throw new Error('Unauthorized');
		}

		const bookmarks = await ctx.db
			.query('bookmarks')
			.withIndex('by_user', (q) => q.eq('userId', identity.subject))
			.collect();

		return await Promise.all(
			bookmarks.map(async (bookmark) => {
				const joins = await ctx.db
					.query('bookmarkTags')
					.withIndex('by_bookmark', (q) => q.eq('bookmarkId', bookmark._id))
					.collect();

				const tags = await Promise.all(joins.map((join) => ctx.db.get(join.tagId)));

				return {
					...bookmark,
					tags: tags.filter(Boolean)
				};
			})
		);
	}
});

export const getTags = query({
	args: {},
	handler: async (ctx) => {
		const identity = await ctx.auth.getUserIdentity();

		if (!identity) {
			throw new Error('Unauthorized');
		}

		return await ctx.db
			.query('tags')
			.withIndex('by_user', (q) => q.eq('userId', identity.subject))
			.collect();
	}
});
