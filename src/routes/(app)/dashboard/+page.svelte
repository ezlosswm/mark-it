<script lang="ts">
	import Bookmarks from '$lib/components/Bookmarks.svelte';
	import DashboardHeader from '$lib/components/dashboard/DashboardHeader.svelte';
	import DashboardPageTitle from '$lib/components/dashboard/DashboardPageTitle.svelte';
	import Popover, { popover } from '$lib/components/ui/popover/Popover.svelte';
	import Button from '$lib/components/ui/button/Button.svelte';
	import { Plus } from '@lucide/svelte';
	import type { PageData } from './$types';

	const filterButton = ['All', 'Design', 'Tech', 'Finance', 'Architecture', 'Anime'];

	const { data }: { data: PageData } = $props();
</script>

<!-- Main dashboard -->
<div class="relative flex h-screen flex-col">
	<DashboardHeader name={data.user.name} />

	<section class="px-6 md:ml-96">
		<DashboardPageTitle />

		<div class="hide-scrollbar mb-4 flex gap-3 overflow-x-auto pb-2 md:hidden">
			{#each filterButton as filter}
				<Button
					size="sm"
					variant="outline"
					class="rounded-full first:bg-primary first:text-background first:hover:opacity-80"
				>
					{filter}
				</Button>
			{/each}
		</div>

		<Bookmarks />

		<!-- ! Hovering button -->
		<div class="fixed right-8 bottom-8 z-40 -translate-8">
			<Button
				onclick={() => popover.toggleOpenState()}
				class="rounded-full p-4 drop-shadow-lg drop-shadow-accent/30"
			>
				<Plus />
			</Button>
		</div>
	</section>
</div>

<!-- Popover -->
<Popover {data} />

<style>
	.hide-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
		&::-webkit-scrollbar {
			display: none;
		}
	}
</style>
