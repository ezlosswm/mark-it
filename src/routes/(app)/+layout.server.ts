import { redirect } from '@sveltejs/kit';

export const load = async (event) => {
	const session = await event.fetch('/api/auth/get-session').then((res) => res.json());

	if (!session?.user) {
		throw redirect(302, '/login');
	}

	return {
		user: session.user
	};
};
