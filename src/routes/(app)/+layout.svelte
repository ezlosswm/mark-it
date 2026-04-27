<script lang="ts">
	import { page } from '$app/state';
	import Popover from '$lib/components/ui/popover/Popover.svelte';
	let { children } = $props();
</script>

{@render children()}
<Popover data={page.data} />
