<script lang="ts">
	import Bookmarks from '$lib/components/Bookmarks.svelte';
	import { popover } from '$lib/components/ui/popover/poooop.svelte';
	import { Plus } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { useAuth, useQuery } from '@mmailaender/convex-svelte';
	import { api } from '$convex/_generated/api';
	import { normalizeTag } from '$lib/tags';

	const auth = useAuth();
	let selectedSlug: string | null = $state(null);

	const bookmarksResponse = useQuery(api.bookmarks.getBookmarks, () =>
		auth.isAuthenticated ? {} : 'skip'
	);

	const filteredBookmarksResponse = useQuery(api.bookmarks.getBookmarkBySlug, () =>
		selectedSlug ? { slug: selectedSlug } : 'skip'
	);

	let bookmarks = $derived(selectedSlug ? filteredBookmarksResponse.data : bookmarksResponse.data);

	const tagsResponse = useQuery(api.bookmarks.getTags);
	let tags = $derived(tagsResponse.data);
</script>

<!-- Main dashboard -->
<div class="relative flex h-screen flex-col">
	<section class="px-3 md:px-6">
		<div class="hide-scrollbar my-4 flex gap-3 overflow-x-auto pb-2 md:hidden">
			<Button
				size="sm"
				onclick={() => (selectedSlug = null)}
				variant="outline"
				class="rounded-full text-xs first:bg-primary first:text-background first:hover:bg-primary/80 first:hover:opacity-80"
			>
				All
			</Button>
			{#each tags as filter}
				<Button
					size="sm"
					onclick={() => (selectedSlug = filter.slug)}
					variant="outline"
					class="rounded-full text-xs first:bg-primary first:text-background first:hover:bg-primary/80 first:hover:opacity-80"
				>
					{normalizeTag(filter.slug)}
				</Button>
			{/each}
		</div>

		<Bookmarks {bookmarks} />

		<!-- ! Hovering button -->
		<div class="fixed right-4 bottom-4 z-40 -translate-4">
			<Button
				onclick={() => popover.toggleOpenState()}
				size="icon-lg"
				class="rounded-full drop-shadow-lg drop-shadow-accent/30"
			>
				<Plus />
			</Button>
		</div>
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
