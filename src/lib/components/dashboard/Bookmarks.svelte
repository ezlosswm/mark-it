<script>
	import { Bookmark, Link2 } from '@lucide/svelte';

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
		}
	];
</script>

<div class="grid grid-cols-1 gap-4">
	{#each bookmarks as bookmark}
		<article
			class="group rounded-xl border border-cyprus-400/10 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
		>
			<div class="mb-3 flex items-center justify-between">
				<div
					class="rounded bg-power-100/30 px-2 py-0.5 text-xs font-bold tracking-wide text-power-400"
				>
					{bookmark.tag}
				</div>

				<button>
					<Bookmark
						class="stroke-cyprus-300 {bookmark.isFavorited
							? 'fill-cyprus-300 grayscale-60 transition-colors group-hover:grayscale-0'
							: ''}"
					/>
				</button>
			</div>

			<h3
				class="text-primary mb-2 font-oxygen text-lg font-bold decoration-2 underline-offset-4 group-hover:underline"
			>
				{bookmark.title}
			</h3>

			<p class="mb-4 text-sm leading-relaxed text-power-400">
				{bookmark.description}
			</p>

			<div class="flex items-center gap-2 text-sm text-cyprus-400/60">
				<span>
					<Link2 class="size-4 " />
				</span>
				<a class="truncate" target="_blank" href={bookmark.link}>{bookmark.link}</a>
			</div>
		</article>
	{/each}
</div>
