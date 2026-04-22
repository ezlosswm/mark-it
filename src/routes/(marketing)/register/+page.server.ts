import { superValidate } from 'sveltekit-superforms';
import type { PageServerLoad } from './$types';
import { zod4 } from 'sveltekit-superforms/adapters';
import { registerUserSchema } from '$lib/components/forms/schema';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod4(registerUserSchema))
	};
};
