<script lang="ts">
	import { ArrowRight, LoaderCircle, Lock, Mail, User } from '@lucide/svelte';
	import Button from '../ui/button/Button.svelte';
	import { superForm } from 'sveltekit-superforms';
	import { zod4 } from 'sveltekit-superforms/adapters';
	import { registerUserSchema } from './schema';
	import { authClient, signInWithGoogle } from '$lib/auth-client';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	let { data } = $props();
	const { form, errors, validateForm } = superForm(data.form, {
		validators: zod4(registerUserSchema)
	});

	let error = $state();
	let isLoading = $state(false);
	async function handleRegister(e: Event) {
		e.preventDefault();
		isLoading = true;

		const result = await validateForm({ update: true });
		if (!result.valid) {
			isLoading = false;
			return;
		}

		try {
			await authClient.signUp.email(
				{
					name: $form.name,
					email: $form.email,
					password: $form.password
				},
				{
					onSuccess: () => {
						goto(resolve('/dashboard'));
					},
					onError: (ctx) => {
						error = ctx.error.message;
						isLoading = false;
					}
				}
			);
		} catch (err) {
			console.error('Registration failed: ', err);
			isLoading = false;
			error = 'Unable to register user';
		}
	}
</script>

<form onsubmit={handleRegister} novalidate>
	<div class="flex w-full flex-col gap-5">
		<div class="flex flex-col gap-2">
			<label for="name" class="form-label"> Full Name </label>

			<div class="relative">
				<User class="input-icon size-5" />
				<input
					type="text"
					class="input pr-4 pl-12"
					placeholder="John Doe"
					name="name"
					bind:value={$form.name}
				/>
			</div>

			{#if $errors.name}
				<p class="text-xs text-danger">{$errors.name}</p>
			{/if}
		</div>

		<div class="flex flex-col gap-2">
			<label for="email" class="form-label"> Email </label>

			<div class="relative">
				<Mail class="input-icon size-5" />
				<input
					type="email"
					class="input pr-4 pl-12"
					placeholder="carlos@example.com"
					name="email"
					bind:value={$form.email}
				/>
			</div>

			{#if $errors.email}
				<p class="text-xs text-danger">{$errors.email}</p>
			{/if}
		</div>

		<div class="flex flex-col gap-2">
			<label for="password" class="form-label"> Password </label>

			<div class="relative">
				<Lock class="input-icon size-5" />
				<input
					type="password"
					name="password"
					placeholder="••••••••"
					class="input pr-4 pl-12"
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
				Create Account
				<ArrowRight class="size-5 transition-transform group-hover:translate-x-1" />
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

<Button onclick={signInWithGoogle} variant="secondary">
	<img src="./assets/google-color.svg" alt="Google color icon" />
	Sign Up With Google
</Button>
