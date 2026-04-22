<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { PUBLIC_CONVEX_URL } from '$env/static/public';
	import { setupConvex } from 'convex-svelte';
	import { onMount } from 'svelte';
	import { popover } from '$lib/components/ui/popover/Popover.svelte';
	import { createSvelteAuthClient } from '@mmailaender/convex-better-auth-svelte/svelte';
	import { authClient } from '$lib/auth-client';

	// Closes the popover component
	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape' && popover.isOpen) {
			popover.toggleOpenState();
		}
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeydown);

		return () => {
			window.removeEventListener('keydown', handleKeydown);
		};
	});

	let { children } = $props();

	setupConvex(PUBLIC_CONVEX_URL);
	createSvelteAuthClient({ authClient });
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

{@render children()}
