<script lang="ts">
	import { Bookmark, Link2, Plus } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { popover } from '$lib/components/ui/popover/poooop.svelte';
	import { useAuth, useQuery } from '@mmailaender/convex-svelte';
	import { api } from '../../convex/_generated/api';
	import { normalizeTag } from '$lib/tags';

	const isFavorited = true;

	const auth = useAuth();
	const bookmarksResponse = useQuery(api.bookmarks.getBookmarks, () =>
		auth.isAuthenticated ? {} : 'skip'
	);
	let bookmarks = $derived(bookmarksResponse.data);
</script>

<div class="grid grid-cols-1 gap-4 py-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
	{#each bookmarks as bookmark}
		<article
			class="group min-h-48 rounded-xl border border-border p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
		>
			<div class="mb-3 flex items-center justify-between">
				<div class="flex w-full gap-2 truncate">
					{#if bookmark.tags?.length}
						{#each bookmark.tags.slice(0, 5) as tag}
							<div
								class="text-foreground-muted rounded bg-accent/30 px-2 py-0.5 text-xs font-bold tracking-wide"
							>
								{normalizeTag(tag!.slug)}
							</div>
						{/each}
					{:else}
						<div
							class="text-foreground-muted rounded bg-accent/30 px-2 py-0.5 text-xs font-bold tracking-wide"
						>
							URL
						</div>
					{/if}
				</div>

				<button>
					<Bookmark
						class="stroke-accent {isFavorited
							? 'fill-accent grayscale-60 transition-colors group-hover:grayscale-0'
							: ''}"
					/>
				</button>
			</div>

			<h3
				class="font-oxygen mb-2 text-lg font-bold text-primary decoration-2 underline-offset-4 group-hover:underline"
			>
				{bookmark.title}
			</h3>

			<p class="text-foreground-muted mb-4 text-sm leading-relaxed">
				{bookmark.description}
			</p>

			<div class="flex items-center gap-2 text-sm text-primary">
				<Link2 class="size-5 shrink-0" />
				<Button
					variant="link"
					href={bookmark.url}
					class="min-w-0 truncate p-0 text-xs font-normal text-primary"
					target="_blank"
				>
					{bookmark.url}
				</Button>
			</div>
		</article>
	{/each}

	<Button onclick={() => popover.toggleOpenState()} variant="ghost" class="bookmark-card min-h-56">
		<div class="rounded-full bg-accent/20 p-3">
			<Plus />
		</div>
		<span class="text-center font-bold tracking-wider">New Bookmark</span>
	</Button>
</div>
