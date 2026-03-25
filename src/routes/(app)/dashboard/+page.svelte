<script>
	import Bookmarks from '$lib/components/dashboard/Bookmarks.svelte';
	import DashboardHeader from '$lib/components/dashboard/DashboardHeader.svelte';
	import DashboardPageTitle from '$lib/components/dashboard/DashboardPageTitle.svelte';
	import BookmarkSearchForm from '$lib/components/forms/bookmark-search-form.svelte';

	const filterButton = ['All', 'Design', 'Tech', 'Finance', 'Architecture', 'Anime'];
</script>

<!-- Main dashboard -->
<div class="flex min-h-screen flex-1 flex-col">
	<DashboardHeader />

	<section class="px-6 md:ml-96">
		<!-- <p class="text-foreground-muted">dummy text</p> -->

		<DashboardPageTitle />

		<!-- Filter  -->
		<div class="hide-scrollbar mb-8 flex gap-3 overflow-x-auto pb-2">
			{#each filterButton as filter}
				<!-- pill -->
				<button
					class="rounded-3xl border border-cyprus-400/20 bg-power-400/5 px-5 py-1 transition-colors first:bg-cyprus-400 first:text-cloud-100 hover:bg-power-400/10 first:hover:bg-cyprus-400/90"
				>
					{filter}
				</button>
			{/each}
		</div>

		<!-- Bookmarks -->
		<Bookmarks />
	</section>
</div>

<style>
	.hide-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
		&::-webkit-scrollbar {
			display: none;
		}
	}
</style>
