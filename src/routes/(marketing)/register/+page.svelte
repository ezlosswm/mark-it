<script>
	import RegistrationForm from '$lib/components/forms/registration-form.svelte';
</script>

<main class="mx-auto max-w-360 p-6">
	<div
		class="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-12 rounded-3xl border border-border bg-card p-8 shadow-sm md:p-12 lg:grid-cols-2"
	>
		<div class="flex flex-col gap-8">
			<div class="space-y-3">
				<h1 class="text-4xl leading-tight font-black tracking-tight md:text-5xl">Join MarkIt</h1>

				<p class="text-lg text-foreground-muted">
					Start organizing your digital world today in a simple, playful way
				</p>
			</div>

			<!-- Form -->
			<RegistrationForm />
		</div>

		<div class="relative hidden w-full flex-col items-center justify-center lg:flex">
			<div class="absolute inset-0 scale-105 -rotate-2 rounded-3xl bg-foreground/5"></div>
			<div
				class="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-3xl bg-background shadow-sm"
			>
				<img src="./assets/register-illustration.webp" alt="Registration form illustration" />
			</div>
		</div>
	</div>
</main>
