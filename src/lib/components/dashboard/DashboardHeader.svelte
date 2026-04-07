<script>
	import { fly } from 'svelte/transition';
	import { Menu } from '@lucide/svelte';

	import { dashboard } from '$lib/components/dashboard/dashboard.svelte';
	import SidebarContent from './SidebarContent.svelte';
	import { onMount } from 'svelte';
	import Button from '../ui/button/Button.svelte';
	import Logo from '../ui/logo/Logo.svelte';

	let isDesktop = $state(false);
	onMount(() => {
		const check = () => (isDesktop = window.innerWidth >= 768);
		check();
		window.addEventListener('resize', check);
		return () => window.removeEventListener('resize', check);
	});
</script>

<div
	class="sticky inset-x-0 top-0 z-10 mb-8 w-full border-b border-border bg-background px-6 py-3 md:py-0"
>
	<div class="flex items-center justify-between md:hidden">
		<Button variant="ghost" class="p-2" onclick={() => dashboard.toggle()}>
			<Menu />
		</Button>

		<div class="mx-auto">
			<Logo />
		</div>
	</div>
</div>

{#if !isDesktop && dashboard.isOpen}
	<!-- Mobile menu -->
	<div
		in:fly={{ x: -300, duration: 250 }}
		out:fly={{ x: -300, duration: 200 }}
		class="fixed inset-y-0 left-0 z-30 w-3/4 max-w-lg border-r border-border bg-background shadow-2xl"
	>
		<SidebarContent />
	</div>
{:else if isDesktop}
	<aside class="fixed inset-y-0 left-0 z-20 w-96 border-r border-border bg-background shadow-sm">
		<SidebarContent />
	</aside>
{/if}
