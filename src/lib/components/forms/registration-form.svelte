<script lang="ts">
	import { ArrowRight, LoaderCircle, Lock, Mail, User } from '@lucide/svelte';
	import { superForm } from 'sveltekit-superforms';
	import { Button } from '$lib/components/ui/button';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { zod4 } from 'sveltekit-superforms/adapters';
	import { registerUserSchema } from './schema';
	import { authClient, signInWithGoogle } from '$lib/auth-client';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	let { data } = $props();
	const form = superForm(data.form, {
		validators: zod4(registerUserSchema)
	});

	const { form: formData, validateForm } = form;

	let error = $state<string | null>(null);
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
					name: $formData.name,
					email: $formData.email,
					password: $formData.password
				},
				{
					onSuccess: () => {
						goto(resolve('/dashboard'));
					},
					onError: (ctx) => {
						error = ctx.error.message || 'Unable to register user';
						isLoading = false;
					}
				}
			);
		} catch (err) {
			console.error('Registration failed: ', err);
			error = 'Unable to register user';
		} finally {
			isLoading = false;
		}
	}
</script>

<form onsubmit={handleRegister} novalidate>
	<div class="flex w-full flex-col gap-5">
		{#if error}
			<p class="text-sm text-destructive">{error}</p>
		{/if}
		<Form.Field {form} name="name" class="flex flex-col gap-2">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Full Name</Form.Label>
					<div class="relative">
						<User class="absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted-foreground" />
						<Input
							{...props}
							bind:value={$formData.name}
							name="name"
							class="pl-12"
							placeholder="John Doe"
						/>
					</div>
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="email" class="flex flex-col gap-2">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Email</Form.Label>
					<div class="relative">
						<Mail class="absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted-foreground" />
						<Input
							{...props}
							bind:value={$formData.email}
							name="email"
							class="pl-12"
							placeholder="youremail@example.com"
						/>
					</div>
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="password" class="flex flex-col gap-2">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Password</Form.Label>
					<div class="relative">
						<Lock class="absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted-foreground" />
						<Input
							{...props}
							type="password"
							name="password"
							bind:value={$formData.password}
							class="pl-12"
							placeholder="••••••••"
						/>
					</div>
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Button disabled={isLoading}>
			{#if isLoading}
				<span>
					<LoaderCircle class="animate-spin" />
				</span>
			{:else}
				Create Account
				<ArrowRight class="size-5 transition-transform group-hover:translate-x-1" />
			{/if}
		</Form.Button>
	</div>
</form>

<div
	class="flex w-full items-center gap-4 text-xs font-medium tracking-widest text-muted-foreground uppercase"
>
	<div class="h-px flex-1 bg-muted-foreground/25"></div>
	<span>Or sign in with</span>
	<div class="h-px flex-1 bg-muted-foreground/25"></div>
</div>

<Button onclick={signInWithGoogle} variant="secondary">
	<img src="./assets/google-color.svg" alt="Google color icon" />
	Sign Up With Google
</Button>
