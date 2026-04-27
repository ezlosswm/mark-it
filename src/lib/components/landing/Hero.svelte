<script>
	import Button from '../ui/button/Button.svelte';
</script>

<div class="hero-gradient flex flex-col items-center py-20 text-center">
	<div class="mx-auto max-w-4xl space-y-8">
		<span
			class="inline-block rounded-full bg-accent-muted px-4 py-1.5 text-sm font-bold tracking-wider text-primary uppercase"
			>Trusted by 20,000+ Power Users</span
		>
		<h1 class="text-5xl leading-[1.1] font-bold tracking-tight md:text-7xl">
			Bookmark everything. <br />
			<span class="text-accent"> Find it instantly. </span>
		</h1>
		<p class="mx-auto max-w-2xl text-xl leading-relaxed text-foreground-muted md:text-2xl">
			The playful bookmark manager for organized minds. Save links, images, and snippets in one
			beautiful place.
		</p>
		<div class="flex flex-col items-center gap-4 pt-4 sm:flex-row">
			<Button size="lg" href="/register" class="w-full shadow-lg shadow-primary/40 hover:scale-105"
				>Get Started - It's Free</Button
			>
		</div>
	</div>

	<div class="group relative mx-auto mt-20 w-full max-w-5xl">
		<div
			class="absolute -inset-1 -z-10 rounded-2xl bg-linear-to-r from-primary to-accent opacity-20 blur transition duration-1000 group-hover:opacity-30"
		></div>
		<div
			class="relative z-10 overflow-hidden rounded-2xl border border-border bg-background shadow-2xl"
		>
			<!-- Placeholder for screenshot of the bookmark manager interface. This will be replaced with an actual screenshot in the future. -->
			<img
				src="/assets/screenshot.webp"
				alt="Screenshot of the bookmark manager interface"
				class="h-auto w-full"
			/>
		</div>
	</div>
</div>
