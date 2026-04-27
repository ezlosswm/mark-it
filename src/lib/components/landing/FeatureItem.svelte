<script lang="ts">
	import type { Component, Snippet } from 'svelte';

	export type Feature = {
		icon: Component;
		title: string;
		description: string;
		img: {
			src: string;
			alt: string;
		};
		isReverse?: boolean;
	};

	const { feature, children }: { feature: Feature; children: Snippet } = $props();
</script>

<div
	class="flex flex-col items-center gap-16 md:flex-row {feature.isReverse
		? 'md:flex-row-reverse'
		: ''} lg:gap-24"
>
	<div class="flex-1 space-y-6">
		<div
			class="flex size-16 items-center justify-center rounded-2xl bg-accent-muted text-foreground"
		>
			<feature.icon class="size-8" />
		</div>

		<h2 class="text-4xl leading-tight font-bold">{feature.title}</h2>

		<p class="text-lg leading-relaxed text-foreground-muted">
			{feature.description}
		</p>

		{@render children()}
	</div>

	<!-- Image -->
	<div class="flex-1">
		<div
			class="flex aspect-square items-center justify-center rounded-3xl border border-border bg-accent-muted/50 p-8"
		>
			<img
				src={feature.img.src}
				class="h-full w-full rounded-xl object-cover shadow-xl"
				alt={feature.img.alt}
			/>
		</div>
	</div>
</div>
