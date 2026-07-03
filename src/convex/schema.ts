import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
	bookmarks: defineTable({
		userId: v.string(),
		url: v.string(),
		title: v.string(),
		isFavorite: v.optional(v.boolean()),
		description: v.optional(v.string())
	})
		.index('by_user', ['userId'])
		.index('by_url', ['userId', 'url']),

	tags: defineTable({
		userId: v.string(),
		name: v.string(),
		slug: v.string(),
		usageCount: v.number()
	})
		.index('by_user', ['userId'])
		.index('by_slug', ['userId', 'slug']),

	bookmarkTags: defineTable({
		bookmarkId: v.id('bookmarks'),
		tagId: v.id('tags')
	})
		.index('by_bookmark', ['bookmarkId'])
		.index('by_tag', ['tagId'])
		.index('by_bookmark_tag', ['bookmarkId', 'tagId'])
});
