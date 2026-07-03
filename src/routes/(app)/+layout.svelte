<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import Popover from '$lib/components/ui/popover/poooop.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import SiteHeader from '$lib/components/site-header.svelte';
	import { authClient } from '$lib/auth-client';
	import { useAuth } from '@mmailaender/convex-better-auth-svelte/svelte';
	import { LoaderCircle } from '@lucide/svelte';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();

	const auth = useAuth();
	const session = authClient.useSession();
	const isCompletingOAuth = $derived(page.url.searchParams.has('ott'));
	const isAuthPending = $derived(auth.isLoading || isCompletingOAuth);

	const user = $derived.by(() => {
		const sessionUser = $session.data?.user;
		if (!sessionUser) return null;

		return {
			name: sessionUser.name,
			email: sessionUser.email,
			avatar: sessionUser.image ?? '/avatars/shadcn.jpg'
		};
	});

	$effect(() => {
		if (isAuthPending || auth.isAuthenticated) return;
		goto(resolve('/login'));
	});
</script>

{#if isAuthPending || !user}
	<div class="flex min-h-screen items-center justify-center">
		<LoaderCircle class="size-8 animate-spin text-muted-foreground" />
	</div>
{:else}
	<div class="[--header-height:calc(--spacing(14))]">
		<Sidebar.Provider>
			<AppSidebar {user} />

			<Sidebar.Inset>
				<SiteHeader />

				<div class="flex flex-1 flex-col">
					{@render children()}
				</div>
			</Sidebar.Inset>

			<Popover data={page.data} />
		</Sidebar.Provider>
	</div>
{/if}
<ModeWatcher />
