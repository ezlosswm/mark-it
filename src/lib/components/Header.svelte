<script lang="ts">
	import { BookMarked } from '@lucide/svelte';
	import { page } from '$app/state';

	console.log('Page: ', page.url.pathname);
</script>

<header class="sticky top-0 z-40 border-b border-cyprus-400/10 bg-cloud-100 p-6">
	<nav class="mx-auto flex max-w-360 items-center justify-between">
		<a href="/" class="flex items-center gap-3">
			<div class="flex size-10 items-center justify-center rounded-full bg-cyprus-400">
				<BookMarked class="text-cloud-100" />
			</div>
			<h2 class="tracking-light text-2xl font-bold">MarkIt</h2>
		</a>

		{#if page.url.pathname === '/register'}
			<div class="space-x-3">
				<span>Already have an account? </span>
				<a href="/login" class="btn-accent rounded-3xl px-6 py-2 font-bold"> Log In </a>
			</div>
		{:else if page.url.pathname === '/login'}
			<div class="space-x-1">
				<span>New to MarkIt? </span>
				<a href="/register" class="font-semibold hover:underline"> Create an account </a>
			</div>
		{:else}
			<a href="/register" class="btn-primary rounded-3xl px-6 py-2"> Sign Up </a>
		{/if}
	</nav>
</header>
