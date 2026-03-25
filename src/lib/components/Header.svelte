<script lang="ts">
	import { BookMarked } from '@lucide/svelte';
	import { page } from '$app/state';
	import Button from './ui/button/Button.svelte';
</script>

<header class="sticky top-0 z-40 border-b border-border bg-background px-6 py-3">
	<nav class="mx-auto flex max-w-360 items-center justify-between">
		<Button href="/" variant="ghost">
			<div class="flex size-10 items-center justify-center rounded-full bg-primary">
				<BookMarked class="text-background" />
			</div>
			<h2 class="tracking-light text-2xl font-bold">MarkIt</h2>
		</Button>

		{#if page.url.pathname === '/register'}
			<div>
				<span class="hidden text-foreground-muted md:inline-block">Already have an account? </span>
				<Button href="/login" variant="link">Log In</Button>
			</div>
		{:else if page.url.pathname === '/login'}
			<div>
				<span class="hidden text-foreground-muted md:inline-block">New to MarkIt? </span>
				<Button href="/register" variant="link">Create An Account</Button>
			</div>
		{:else}
			<Button href="/register">Sign Up</Button>
		{/if}
	</nav>
</header>
