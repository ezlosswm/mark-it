import type { PageServerLoad } from './$types';
import { zod4 } from 'sveltekit-superforms/adapters';
import { bookmarkSchema } from '$lib/components/forms/schema';
import { superValidate } from 'sveltekit-superforms';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod4(bookmarkSchema))
	};
};
