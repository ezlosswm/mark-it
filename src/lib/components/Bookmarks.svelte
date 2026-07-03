<script lang="ts">
	import { Bookmark, Ellipsis, Link2, Plus } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import { popover } from '$lib/components/ui/popover/poooop.svelte';
	import { useAuth, useMutation, useQuery } from '@mmailaender/convex-svelte';
	import { api } from '../../convex/_generated/api';
	import { normalizeTag } from '$lib/tags';
	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card';
	import type { Id } from '$convex/_generated/dataModel';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';

	// const auth = useAuth();
	// const bookmarksResponse = useQuery(api.bookmarks.getBookmarks, () =>
	// 	auth.isAuthenticated ? {} : 'skip'
	// );

	// let bookmarks = $derived(bookmarksResponse.data);

	const toggleBookmarkFavoriteMutation = useMutation(api.bookmarks.toggleBookmarkFavorite);
	const toggleBookmarkFavorite = async (bookmarkId: Id<'bookmarks'>) => {
		await toggleBookmarkFavoriteMutation({ bookmarkId });
	};

	const deleteBookmarkMutation = useMutation(api.bookmarks.deleteBookmark);
	const deleteBookmark = async (bookmarkId: Id<'bookmarks'>) => {
		await deleteBookmarkMutation({ bookmarkId });
	};

	let { bookmarks } = $props();
</script>

<div class="grid grid-cols-1 gap-4 py-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
	{#each bookmarks as bookmark}
		<Card.Root class="min-h-52">
			<Card.Header>
				<Card.Description class="mb-3 flex items-center justify-between gap-2 truncate">
					<div class="space-x-1 truncate">
						{#if bookmark.tags?.length}
							{#each bookmark.tags.slice(0, 5) as tag}
								<Badge>
									{normalizeTag(tag!.slug)}
								</Badge>
							{/each}
						{:else}
							<Badge>URL</Badge>
						{/if}
					</div>

					<DropdownMenu.Root>
						<DropdownMenu.Trigger><Ellipsis /></DropdownMenu.Trigger>
						<DropdownMenu.Content>
							<DropdownMenu.Group>
								<DropdownMenu.Item
									onclick={() => deleteBookmark(bookmark._id)}
									variant="destructive"
									class="cursor-pointer">Delete</DropdownMenu.Item
								>
							</DropdownMenu.Group>
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				</Card.Description>
				<div class="flex items-center justify-between">
					<Card.Title class="flex-1">
						<h4>
							{bookmark.title}
						</h4>
					</Card.Title>
					<button
						data-solt="button"
						type="button"
						class="cursor-pointer"
						onclick={() => toggleBookmarkFavorite(bookmark._id)}
					>
						<Bookmark
							class="size-5 stroke-primary {bookmark.isFavorite
								? 'fill-primary grayscale-60 transition-colors group-hover:grayscale-0'
								: ''}"
						/>
					</button>
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
		class="bookmark-card h-full min-h-52"
	>
		<div class="rounded-full bg-primary/10 p-3">
			<Plus />
		</div>
		<span class="text-center font-bold tracking-wider">New Bookmark</span>
	</Button>
</div>
