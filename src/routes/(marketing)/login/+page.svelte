<script>
	import LoginForm from '$lib/components/forms/login-form.svelte';
	import { BookMarked } from '@lucide/svelte';
</script>

<main class="mx-auto flex w-full max-w-[480px] flex-col gap-8 p-6">
	<div class="flex flex-col items-center gap-4">
		<div class="rounded-xl bg-cyprus-400/10 p-4">
			<BookMarked class="size-12" />
		</div>

		<h1 class="text-3xl font-bold tracking-tight">MarkIt</h1>
	</div>

	<div class="relative flex h-48 w-full items-center justify-center overflow-hidden rounded-xl">
		<img
			src="./assets/login-illustration.webp"
			alt="Login illustration"
			class="absolute inset-0 size-full object-cover"
		/>

		<!-- Overlay -->
		<div class="absolute inset-0 bg-cloud-100/60 backdrop-blur-[2px]"></div>
		<div class="relative z-10 px-6 text-center">
			<p class="text-xl font-bold">Welcome back</p>

			<p class="text-sm font-medium">Ready to organize your world?</p>
		</div>
	</div>

	<LoginForm />
</main>
