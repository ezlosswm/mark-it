<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	import { onMount } from 'svelte';
	import { popover } from '$lib/components/popover/Popover.svelte';

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
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

{@render children()}
