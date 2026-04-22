import type { PageServerLoad } from './$types';
import { zod4 } from 'sveltekit-superforms/adapters';
import { bookmarkSchema } from '$lib/components/forms/schema';
import { superValidate } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';
import { convex } from '$lib';
import { api } from '$convex/_generated/api.js';

export const load: PageServerLoad = async (event) => {
	return {
		form: await superValidate(zod4(bookmarkSchema))
	};
};

export const actions = {
	createBookmark: async (event) => {
		const form = await superValidate(event, zod4(bookmarkSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const { url, title, description } = form.data;

		await convex.mutation(api.bookmarks.createBookmark, { url, title, description });

		return {
			form
		};
	}
};
