<script>
	import { fly } from 'svelte/transition';
	import {
		ArrowDownAZ,
		Bookmark,
		BookMarked,
		Calendar,
		Cpu,
		Palette,
		Settings,
		User,
		X
	} from '@lucide/svelte';

	import { dashboard } from '$lib/components/dashboard/dashboard.svelte';

	// Placeholder nav
	const categories = [
		{ icon: Bookmark, label: 'All Bookmarks' },
		{ icon: Palette, label: 'Design' },
		{ icon: Cpu, label: 'Tech' },
		{ icon: User, label: 'Personal' }
	];
</script>

<aside class="grid min-h-screen grid-rows-12">
	<div class="row-start-1">
		<div class="relative">
			<a href="/" class="flex items-center justify-center gap-2">
				<div class="flex size-10 items-center justify-center rounded-full bg-cyprus-400">
					<BookMarked class="size-5 text-cloud-100" />
				</div>
				<h2 class="tracking-light text-2xl font-bold">MarkIt</h2>
			</a>

			<div class="absolute top-1/2 -right-2 -translate-y-1/2 md:hidden">
				<button onclick={() => dashboard.toggle()} class="rounded-full p-3 hover:bg-cyprus-400/10">
					<X class="size-6" />
				</button>
			</div>
		</div>
	</div>

	<!-- Nav list -->
	<div class="row-span-9 mx-auto my-auto w-full space-y-1">
		<div class="space-y-1">
			<h4 class="text-sm font-bold tracking-wider text-power-100 uppercase">Categories</h4>
			{#each categories as category}
				<a
					href="#"
					class="flex w-full items-center gap-2 rounded-full p-3 text-cyprus-400/80 transition-colors hover:bg-cyprus-400/5 active:bg-cyprus-400 active:text-white"
				>
					<category.icon class="size-6 stroke-2 opacity-80" />
					<span class="text-2xl font-bold tracking-wide">{category.label}</span>
				</a>
			{/each}
		</div>

		<div class="mt-5 space-y-1">
			<h4 class="text-sm font-bold tracking-wider text-power-100 uppercase">Sort & Fitler</h4>

			<button
				class="flex w-full items-center gap-2 rounded-full p-3 text-cyprus-400/80 transition-colors hover:bg-cyprus-400/5 active:bg-cyprus-400 active:text-white"
			>
				<Calendar />
				<span class="text-2xl font-bold tracking-wide">Date Added</span>
			</button>
			<button
				class="flex w-full items-center gap-2 rounded-full p-3 text-cyprus-400/80 transition-colors hover:bg-cyprus-400/5 active:bg-cyprus-400 active:text-white"
			>
				<ArrowDownAZ />
				<span class="text-2xl font-bold tracking-wide">Date Added</span>
			</button>
		</div>
	</div>

	<!-- Footer -->
	<div class="row-end-13">
		<div>
			<a
				href="#"
				class="flex items-center justify-center gap-2 text-cyprus-400/60 transition-colors hover:text-cyprus-400"
			>
				<Settings />
				<span class="text-lg font-bold">Setting</span>
			</a>
		</div>
	</div>
</aside>
