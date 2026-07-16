<script lang="ts">
	import LoginForm from '$lib/components/forms/login-form.svelte';
	import { BookMarked } from '@lucide/svelte';
	import type { PageData } from './$types';
	import { useAuth } from '@mmailaender/convex-svelte';
	import { goto } from '$app/navigation';

	const { data }: { data: PageData } = $props();

	const auth = useAuth();

	$effect(() => {
		if (auth.isAuthenticated) {
			goto('/dashboard');
		}
	});
</script>

<main class="mx-auto w-full max-w-lg p-3 md:p-6">
	<div class="flex flex-col gap-8 rounded-3xl border border-border bg-card p-6 shadow-sm">
		<div class="flex flex-col items-center gap-2">
			<div class="rounded-lg bg-primary/10 p-4">
				<BookMarked class="size-8 md:size-12" />
			</div>

			<h1 class="">MarkIt</h1>
		</div>

		<div class="relative flex h-48 w-full items-center justify-center overflow-hidden rounded-3xl">
			<img
				src="./assets/login-illustration.webp"
				alt="Login illustration"
				class="absolute inset-0 size-full object-cover"
			/>

			<!-- Overlay -->
			<div class="absolute inset-0 bg-background/60 backdrop-blur-[2px]"></div>
			<div class="relative z-10 px-6 text-center">
				<h4>Welcome back</h4>

				<p class="text-sm text-muted-foreground">Ready to organize your world?</p>
			</div>
		</div>

		<div class="rounded-lg bg-foreground/5 p-3 text-center">
			<div class="text-sm italic">Demo Account: <br />demo@demo.com<br /> admin123</div>
		</div>

		<LoginForm {data} />
	</div>
</main>
