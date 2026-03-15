<script>
	import RegistrationForm from '$lib/components/forms/registration-form.svelte';
</script>

<main class="mx-auto max-w-360 p-6">
	<div
		class="grid w-full max-w-[1000px] grid-cols-1 items-center gap-12 rounded-3xl border border-cyprus-400/5 bg-cloud-50 p-8 shadow-sm md:p-12 lg:grid-cols-2"
	>
		<div class="flex flex-col gap-8">
			<div class="space-y-3">
				<h1 class="text-4xl leading-tight font-black tracking-tight md:text-5xl">Join MarkIt</h1>

				<p class="text-lg text-power-400">
					Start organizing your digital world today in a simple, playful way
				</p>
			</div>

			<!-- Form -->
			<RegistrationForm />
		</div>
	</div>
</main>
