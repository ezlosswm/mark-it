<script lang="ts">
	import { Lock } from '@lucide/svelte';
	import Button from '$lib/components/ui/button/Button.svelte';
	import { superForm } from 'sveltekit-superforms';
	import type { PageData } from './$types';
	import { zod4 } from 'sveltekit-superforms/adapters';
	import { resetPasswordSchema } from '$lib/components/forms/schema';

	const { data }: { data: PageData } = $props();
	const { form, errors, validateForm } = superForm(data.form, {
		validators: zod4(resetPasswordSchema)
	});

	async function handleResetPassword(e: Event) {
		e.preventDefault();
		const result = await validateForm({ update: true });
		if (!result.valid) {
			return;
		}
		console.log('Reset password form submitted');
	}
</script>

<main class="mx-auto flex h-[calc(100vh-20rem)] w-full items-center justify-center p-3 md:p-6">
	<div
		class="flex w-full max-w-lg flex-col gap-8 rounded-3xl border border-border bg-card p-6 shadow-lg"
	>
		<div class="space-y-1">
			<h2 class="text-2xl font-bold">Reset Password</h2>
			<p class="text-sm text-foreground-muted">Enter your new password</p>
		</div>

		<form action="POST" onsubmit={handleResetPassword} class="space-y-5" novalidate>
			<div class="mt-5 flex flex-col gap-2">
				<label for="password" class="px-1 text-sm font-semibold"> New Password </label>

				<div class="relative">
					<Lock class="input-icon" />
					<input type="password" name="password" class="input pr-4 pl-12" placeholder="••••••••" />
				</div>

				{#if $errors.password}
					<p class="text-xs text-danger">{$errors.password}</p>
				{/if}
			</div>
			<div class="mt-5 flex flex-col gap-2">
				<label for="confirmPassword" class="px-1 text-sm font-semibold">
					Confirm New Password
				</label>

				<div class="relative">
					<Lock class="input-icon" />
					<input
						type="password"
						name="confirmPassword"
						class="input pr-4 pl-12"
						placeholder="••••••••"
					/>
				</div>

				{#if $errors.confirmPassword}
					<p class="text-xs text-danger">{$errors.confirmPassword}</p>
				{/if}
			</div>
			<Button class="w-full" type="submit">Reset Password</Button>
		</form>
	</div>
</main>
