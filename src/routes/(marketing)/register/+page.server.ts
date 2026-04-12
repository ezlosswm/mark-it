import { superValidate } from 'sveltekit-superforms';
import type { PageServerLoad } from './$types';
import { zod4 } from 'sveltekit-superforms/adapters';
import { registerUserSchema } from '$lib/components/forms/schema';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod4(registerUserSchema))
	};
};

export const actions = {
	login: async (event) => {
		console.log('workign');
		const form = await superValidate(event, zod4(registerUserSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		return { form };
	}
};
