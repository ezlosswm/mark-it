<script>
	import { Bookmark, Link2, Plus } from '@lucide/svelte';
	import Button from '../ui/button/Button.svelte';
	import { popover } from '../popover/Popover.svelte';

	const bookmarks = [
		{
			tag: 'Design',
			title: 'The Minimalist Grid System',
			description:
				'Learn how to design beautiful user interfaces by yourself using specific tactics explained from a developer’s point-of-view.',
			link: 'https://refactoringui.com/',
			isFavorited: false
		},
		{
			tag: 'Tech',
			title: 'Future of Neural Interfaces',
			description:
				'How bio-digital integration is reshaping our interaction with silicon-based intelligence.',
			link: 'https://medium.com/@riz.net19/the-future-of-neural-interfaces-transforming-gaming-healthcare-and-beyond-cc5130771a5b',
			isFavorited: true
		},
		{
			tag: 'Design',
			title: 'The Minimalist Grid System',
			description:
				'Learn how to design beautiful user interfaces by yourself using specific tactics explained from a developer’s point-of-view.',
			link: 'https://refactoringui.com/',
			isFavorited: false
		},
		{
			tag: 'Tech',
			title: 'Future of Neural Interfaces',
			description:
				'How bio-digital integration is reshaping our interaction with silicon-based intelligence.',
			link: 'https://medium.com/@riz.net19/the-future-of-neural-interfaces-transforming-gaming-healthcare-and-beyond-cc5130771a5b',
			isFavorited: true
		}
	];
</script>

<div class="grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
	{#each bookmarks as bookmark}
		<article
			class="group min-h-56 rounded-xl border border-border p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
		>
			<div class="mb-3 flex items-center justify-between">
				<div
					class="rounded bg-accent/30 px-2 py-0.5 text-xs font-bold tracking-wide text-foreground-muted"
				>
					{bookmark.tag}
				</div>

				<button>
					<Bookmark
						class="stroke-accent {bookmark.isFavorited
							? 'fill-accent grayscale-60 transition-colors group-hover:grayscale-0'
							: ''}"
					/>
				</button>
			</div>

			<h3
				class="mb-2 font-oxygen text-lg font-bold text-primary decoration-2 underline-offset-4 group-hover:underline"
			>
				{bookmark.title}
			</h3>

			<p class="mb-4 text-sm leading-relaxed text-foreground-muted">
				{bookmark.description}
			</p>

			<div class="flex items-center gap-2 text-sm text-primary">
				<Link2 class="size-5 shrink-0" />
				<Button
					variant="link"
					href={bookmark.link}
					class="min-w-0 truncate p-0 text-xs font-normal text-primary"
					target="_blank"
				>
					{bookmark.link}
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
