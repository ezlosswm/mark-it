<script lang="ts">
	import { Mail } from '@lucide/svelte';
	import Button from '$lib/components/ui/button/Button.svelte';
	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms';
	import { zod4 } from 'sveltekit-superforms/adapters';
	import { forgotPasswordSchema } from '$lib/components/forms/schema';
	const { data }: { data: PageData } = $props();
	const { form, errors, validateForm } = superForm(data.form, {
		validators: zod4(forgotPasswordSchema)
	});

	async function handleForgotPassword(e: Event) {
		e.preventDefault();

		const result = await validateForm({ update: true });
		if (!result.valid) {
			return;
		}

		console.log('Forgot password form submitted');
	}
</script>

<main class="mx-auto flex h-[calc(100vh-20rem)] w-full items-center justify-center p-3 md:p-6">
	<div
		class="flex w-full max-w-lg flex-col gap-8 rounded-3xl border border-border bg-card p-6 shadow-lg"
	>
		<div class="space-y-1">
			<h2 class="text-2xl font-bold">Forgot Password</h2>
			<p class="text-sm text-foreground-muted">We will email you a reset link</p>
		</div>

		<form action="POST" onsubmit={handleForgotPassword} class="space-y-5" novalidate>
			<div class="mt-5 flex flex-col gap-2">
				<label for="email" class="form-label"> Email </label>

				<div class="relative">
					<Mail class="input-icon" />
					<input
						type="email"
						name="email"
						class="input pr-4 pl-12"
						placeholder="carlos@example.com"
						bind:value={$form.email}
					/>
				</div>

				{#if $errors.email}
					<p class="text-xs text-danger">{$errors.email}</p>
				{/if}
			</div>
			<Button  class="w-full" type="submit">
				Reset Password	
			</Button>
		</form>
	</div>
</main>
