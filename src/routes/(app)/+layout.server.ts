import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url }) => {
	// OAuth completes with a one-time token; the client verifies it in onMount.
	if (url.searchParams.has('ott')) {
		return { user: null };
	}

	return { user: null };
};
