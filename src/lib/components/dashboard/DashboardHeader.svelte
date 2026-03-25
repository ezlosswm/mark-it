<script>
	import { fly } from 'svelte/transition';
	import { BookMarked, Menu } from '@lucide/svelte';

	import { dashboard } from '$lib/components/dashboard/dashboard.svelte';
	import SidebarContent from './SidebarContent.svelte';
	import { onMount } from 'svelte';

	let isDesktop = $state(false);
	onMount(() => {
		const check = () => (isDesktop = window.innerWidth >= 768);
		check();
		window.addEventListener('resize', check);
		return () => window.removeEventListener('resize', check);
	});
	let isMenuOpen = $derived(isDesktop || dashboard.isOpen);
</script>

<div>
	<!-- Header -->
	<div
		class="sticky inset-x-0 top-0 z-10 mb-8 w-full border-b border-cyprus-400/10 bg-cloud-100 px-6 py-3 md:py-0"
	>
		<div class="flex items-center justify-between md:hidden">
			<button
				onclick={() => dashboard.toggle()}
				class="inline-block rounded-xl p-2 transition-colors hover:bg-power-400/5"
			>
				<Menu />
			</button>

			<a href="/" class="mx-auto flex items-center gap-2">
				<div class="flex size-8 items-center justify-center rounded-full bg-cyprus-400">
					<BookMarked class="size-4 text-cloud-100" />
				</div>
				<h2 class="tracking-light text-xl font-bold">MarkIt</h2>
			</a>
		</div>
	</div>

	{#if !isDesktop && dashboard.isOpen}
		<!-- Mobile menu -->
		<div
			in:fly={{ x: -300, duration: 250 }}
			out:fly={{ x: -300, duration: 200 }}
			class="fixed inset-y-0 left-0 z-30 w-3/4 max-w-lg bg-cloud-200 p-6"
		>
			<SidebarContent />
		</div>
	{:else if isDesktop}
		<aside class="fixed inset-y-0 left-0 z-20 w-96 border-r border-cyprus-400/10 bg-cloud-200 p-6">
			<SidebarContent />
		</aside>
	{/if}
</div>
