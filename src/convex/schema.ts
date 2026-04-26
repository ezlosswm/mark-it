import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
	bookmarks: defineTable({
		userId: v.string(),
		url: v.string(),
		title: v.string(),
		description: v.optional(v.string())
	})
		.index('by_user', ['userId'])
		.index('by_url', ['userId', 'url'])
});
