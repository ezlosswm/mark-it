<script lang="ts">
	import { LoaderCircle, Lock, Mail } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { superForm } from 'sveltekit-superforms';
	import { zod4 } from 'sveltekit-superforms/adapters';
	import { loginUserSchema } from './schema';
	import { authClient, signInWithGoogle } from '$lib/auth-client';
	import { resolve } from '$app/paths';
	import { goto } from '$app/navigation';

	const { data } = $props();

	// svelte-ignore state_referenced_locally
	const form = superForm(data.form, {
		validators: zod4(loginUserSchema)
	});

	const { form: formData, validateForm } = form;

	let isLoading = $state(false);
	async function handleLogin(e: Event) {
		e.preventDefault();
		isLoading = true;

		const result = await validateForm({ update: true });
		if (!result.valid) {
			isLoading = false;
			return;
		}

		try {
			await authClient.signIn.email(
				{
					email: $formData.email,
					password: $formData.password
				},
				{
					onSuccess: () => {
						goto(resolve('/dashboard'));
						return;
					},
					onError: (ctx) => {
						isLoading = false;

						console.error({
							code: ctx.error.code,
							message: ctx.error.message,
							status: ctx.error.status,
							statusText: ctx.error.statusText
						});
					}
				}
			);
		} catch (err) {
			console.error('Unable to login.', err);
		} finally {
			isLoading = false;
		}
	}
</script>

<form onsubmit={handleLogin} novalidate>
	<div class="flex w-full flex-col gap-5">
		<Form.Field {form} name="email" class="flex flex-col gap-2">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Email</Form.Label>
					<div class="relative">
						<Mail class="absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted-foreground" />
						<Input
							{...props}
							type="email"
							class="pl-12"
							name="email"
							placeholder="demo@demo.com"
							bind:value={$formData.email}
						/>
					</div>
				{/snippet}
			</Form.Control>
			<Form.FieldErrors class="font-normal" />
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
							class="pl-12"
							name="password"
							placeholder="••••••••"
							bind:value={$formData.password}
						/>
					</div>
				{/snippet}
			</Form.Control>
			<Form.FieldErrors class="font-normal" />
		</Form.Field>

		<Form.Button disabled={isLoading}>
			{#if isLoading}
				<span>
					<LoaderCircle class="animate-spin" />
				</span>
			{:else}
				Log In
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
	Log In With Google
</Button>
