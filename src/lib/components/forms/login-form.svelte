<script lang="ts">
	import { LoaderCircle, Lock, Mail } from '@lucide/svelte';
	import Button from '../ui/button/Button.svelte';
	import { superForm } from 'sveltekit-superforms';
	import { zod4 } from 'sveltekit-superforms/adapters';
	import { loginUserSchema } from './schema';
	import { authClient } from '$lib/auth-client';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	const { data } = $props();
	const { form, errors, validateForm } = superForm(data.form, {
		validators: zod4(loginUserSchema)
	});

	let error = $state();
	let isLoading = $state(false);
	async function handleLogin(e: Event) {
		e.preventDefault();
		error = null;
		isLoading = true;

		const result = await validateForm({ update: true });
		if (!result.valid) {
			isLoading = false;
			return;
		}

		try {
			await authClient.signIn.email(
				{
					email: $form.email,
					password: $form.password
				},
				{
					onSuccess: () => {
						goto(resolve('/dashboard'));
					},
					onError: (ctx) => {
						error = ctx.error.message;
					}
				}
			);
		} catch (err) {
			console.error('Unable to login.', err);
			isLoading = false;
			error = 'Unable to login.';
		}
	}
</script>

<form onsubmit={handleLogin} novalidate>
	<div class="flex w-full flex-col gap-5">
		<div class="flex flex-col gap-2">
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

		<div class="flex flex-col gap-2">
			<div class="flex w-full items-center justify-between">
				<label for="password" class="form-label"> Password </label>
				<div class="flex flex-1 justify-end">
					<Button href="#" variant="link" size="sm">Forgot Password?</Button>
				</div>
			</div>

			<div class="relative">
				<Lock class="input-icon" />
				<input
					type="password"
					class="input pr-4 pl-12"
					name="password"
					placeholder="••••••••"
					bind:value={$form.password}
				/>
			</div>
			{#if $errors.password}
				<p class="text-xs text-danger">{$errors.password}</p>
			{/if}
		</div>

		<Button disabled={isLoading}>
			{#if isLoading}
				<span>
					<LoaderCircle class="animate-spin" />
				</span>
			{:else}
				Log In
			{/if}
		</Button>
	</div>
</form>

<div
	class="flex w-full items-center gap-4 text-xs font-medium tracking-widest text-power-200 uppercase"
>
	<div class="h-px flex-1 bg-power-200/25"></div>
	<span>Or sign in with</span>
	<div class="h-px flex-1 bg-power-200/25"></div>
</div>

<Button variant="secondary">
	<img src="./assets/google-color.svg" alt="Google color icon" />
	Log In With Google
</Button>
