import { createAuthClient } from 'better-auth/svelte';
import { convexClient } from '@convex-dev/better-auth/client/plugins';

// Register Better Auth route handlers on your Convex deployment.
export const authClient = createAuthClient({
	plugins: [convexClient()]
});
