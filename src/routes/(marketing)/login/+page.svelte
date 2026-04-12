<script lang="ts">
	import LoginForm from '$lib/components/forms/login-form.svelte';
	import { BookMarked } from '@lucide/svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<main class="mx-auto w-full max-w-lg p-3 md:p-6">
	<div class="flex flex-col gap-8 rounded-3xl border border-border bg-card p-6 shadow-sm">
		<div class="flex flex-col items-center gap-2">
			<div class="rounded-lg bg-primary/10 p-4">
				<BookMarked class="size-8 md:size-12" />
			</div>

			<h1 class="text-3xl font-bold tracking-tight">MarkIt</h1>
		</div>

		<div class="relative flex h-48 w-full items-center justify-center overflow-hidden rounded-lg">
			<img
				src="./assets/login-illustration.webp"
				alt="Login illustration"
				class="absolute inset-0 size-full object-cover"
			/>

			<!-- Overlay -->
			<div class="absolute inset-0 bg-background/60 backdrop-blur-[2px]"></div>
			<div class="relative z-10 px-6 text-center">
				<p class="text-xl font-bold">Welcome back</p>

				<p class="text-sm font-medium">Ready to organize your world?</p>
			</div>
		</div>

		<LoginForm {data} />
	</div>
</main>
