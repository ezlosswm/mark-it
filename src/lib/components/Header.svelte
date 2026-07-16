<script lang="ts">
	import { page } from '$app/state';
	import { Button } from '$lib/components/ui/button';
	import Logo from './ui/logo/Logo.svelte';
</script>

<header class="sticky top-0 z-40 border-b border-border bg-background px-6 py-3 lg:py-4">
	<nav class="mx-auto flex max-w-360 items-center justify-between">
		<Logo />

		{#if page.url.pathname === '/register'}
			<div>
				<span class="hidden text-muted-foreground md:inline-block">Already have an account? </span>
				<Button href="/login" variant="link">Log In</Button>
			</div>
		{:else if page.url.pathname === '/login'}
			<div>
				<span class="hidden text-muted-foreground md:inline-block">New to MarkIt? </span>
				<Button href="/register" variant="link">Create An Account</Button>
			</div>
		{:else}
			<Button href="/login">Log In</Button>
		{/if}
	</nav>
</header>
