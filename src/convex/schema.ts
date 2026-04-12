import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
	bookmarks: defineTable({
		url: v.string(),
		title: v.string(),
		description: v.optional(v.string())
	})
});
