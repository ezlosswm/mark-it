<script>
	import Features from '$lib/components/landing/Features.svelte';
	import Hero from '$lib/components/landing/Hero.svelte';
	import CTA from '$lib/components/landing/CTA.svelte';
</script>

<svelte:head>
	<title>Bookmark Manager</title>
	<meta
		name="description"
		content="The playful bookmark manager for organized minds. Save links, images, and snippets in one beautiful place."
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" href="/favicon.ico" />
</svelte:head>

<div class="mx-auto max-w-360 px-6">
	<Hero />

	<section class="space-y-32 py-16">
		<Features />
	</section>
</div>

<section class="bg-primary py-24 text-background">
	<div class="mx-auto max-w-4xl px-6 py-24 text-center md:px-20 lg:px-40">
		<CTA />
	</div>
</section>
