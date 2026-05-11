<script lang="ts">
	import { Bookmark, Link2, Plus } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { popover } from '$lib/components/ui/popover/poooop.svelte';
	import { useAuth, useQuery } from '@mmailaender/convex-svelte';
	import { api } from '../../convex/_generated/api';
	import { normalizeTag } from '$lib/tags';
	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card';

	const isFavorited = true;

	const auth = useAuth();
	const bookmarksResponse = useQuery(api.bookmarks.getBookmarks, () =>
		auth.isAuthenticated ? {} : 'skip'
	);
	let bookmarks = $derived(bookmarksResponse.data);
</script>

<div class="grid grid-cols-1 gap-4 py-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
	{#each bookmarks as bookmark}
		<Card.Root>
			<Card.Header>
				<Card.Description class="mb-3 flex gap-2 truncate">
					{#if bookmark.tags?.length}
						{#each bookmark.tags.slice(0, 5) as tag}
							<Badge>
								{normalizeTag(tag!.slug)}
							</Badge>
						{/each}
					{:else}
						<Badge>URL</Badge>
					{/if}
				</Card.Description>
				<div class="flex items-center justify-between">
					<Card.Title class="flex-1">
						<h4>
							{bookmark.title}
						</h4>
					</Card.Title>
					<Button variant="ghost" size="icon-lg">
						<Bookmark
							class="stroke-primary {isFavorited
								? ''
								: 'fill-primary grayscale-60 transition-colors group-hover:grayscale-0'}"
						/>
					</Button>
				</div>
			</Card.Header>

			<Card.Content class="text-muted-foreground">{bookmark.description}</Card.Content>
			<Card.Footer>
				<Button
					variant="link"
					class="w-full min-w-0 justify-start overflow-hidden px-0"
					href={bookmark.url}
					target="_blank"
				>
					<Link2 class="size-5 shrink-0" />

					<span class="truncate">
						{bookmark.url.toString()}
					</span>
				</Button>
			</Card.Footer>
		</Card.Root>
	{/each}
	<Button
		onclick={() => popover.toggleOpenState()}
		variant="outline"
		class="bookmark-card min-h-48"
	>
		<div class="rounded-full bg-primary/10 p-3">
			<Plus />
		</div>
		<span class="text-center font-bold tracking-wider">New Bookmark</span>
	</Button>
</div>
