<script lang="ts">
	import { ArrowRight, BadgeAlert, Bot, LayoutDashboard, Search, SearchCode } from '@lucide/svelte';
	import FeatureItem, { type Feature } from './FeatureItem.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';

	const features: Feature[] = [
		{
			icon: Bot,
			title: 'Tagging',
			description:
				'Stop wasting hours manually sorting folders. Our system analyzes your saved content and applies relevant tags instantly, keeping your library perfectly organized without the busywork.',

			img: {
				src: '/assets/bookmark.webp',
				alt: 'Bookmark illustration'
			}
		},
		{
			icon: SearchCode,
			title: 'Instant Search Everywhere',
			description:
				'Remember a phrase but not the URL? Our deep-content search indexes every word in your bookmarks, PDFS, and highlights. Find anything in milliseconds.',

			img: {
				src: '/assets/search.webp',
				alt: 'Search illustration'
			},
			isReverse: true
		},
		{
			icon: LayoutDashboard,
			title: 'Beautiful Visual Collections',
			description:
				'Ditch the boring list view. Organize your inspiration into stunning visual boards. Share them with your team or keep them for your personal creative flow.',

			img: {
				src: '/assets/listview.webp',
				alt: 'List view illustration'
			}
		}
	];
</script>

<FeatureItem feature={features[0]}>
	<div class="space-y-3">
		<div class="flex items-center gap-3">
			<BadgeAlert />
			<p class="mt-0">Contextual categorization</p>
		</div>

		<div class="flex items-center gap-3">
			<BadgeAlert />
			<p class="mt-0">User-defined tagging rules</p>
		</div>
	</div>
</FeatureItem>

<FeatureItem feature={features[1]}>
	<div class="relative">
		<Search class="absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted-foreground" />
		<Input
			class="border border-border p-4 pl-12 shadow-sm"
			placeholder="Search 'Design system articles'..."
			disabled
		/>
	</div>
</FeatureItem>

<FeatureItem feature={features[2]}>
	<Button href="/" class="p-0 duration-400 hover:translate-x-2" size="lg" variant="link">
		Go to Your Board
		<ArrowRight />
	</Button>
</FeatureItem>
