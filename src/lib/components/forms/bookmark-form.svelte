<script lang="ts">
	import { Link2, LoaderCircle, Plus } from '@lucide/svelte';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { popover } from '$lib/components/ui/popover/poooop.svelte';
	import { superForm } from 'sveltekit-superforms/client';
	import { useMutation } from '@mmailaender/convex-svelte';
	import { api } from '$convex/_generated/api';
	import { zod4 } from 'sveltekit-superforms/adapters';
	import { bookmarkSchema } from './schema';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	const { data } = $props();
	const form = superForm(data.form, {
		validators: zod4(bookmarkSchema)
	});

	const { form: formData, reset, validateForm } = form;

	function handleCancel(e: Event) {
		e.preventDefault();
		reset();
		popover.toggleOpenState();
	}

	$effect(() => {
		if (popover.isOpen) {
			reset();
		}
	});

	let tagInput = $state('');

	let isLoading = $state(false);
	async function handleSaveBookmark(e: Event) {
		e.preventDefault();
		isLoading = true;

		const result = await validateForm({ update: true });
		if (!result.valid) {
			isLoading = false;
			return;
		}

		try {
			const saveBookmark = useMutation(api.bookmarks.saveBookmark);
			await saveBookmark({
				url: $formData.url,
				title: $formData.title,
				description: $formData.description,
				tags: $formData.tags
			});

			reset();
			popover.toggleOpenState();
			isLoading = false;
		} catch (error) {
			if (error instanceof Error && error.message === 'UNAUTHORIZED') {
				goto(resolve('/login'));
				return;
			}

			console.error('Unable to save bookmark: ', error);
		} finally {
			isLoading = false;
		}
	}
</script>

<form onsubmit={handleSaveBookmark} class="space-y-5 p-4" novalidate>
	<Form.Field {form} name="url" class="flex flex-col gap-2">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>URL</Form.Label>
				<div class="relative">
					<Link2 class="absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted-foreground" />
					<Input
						{...props}
						type="text"
						name="url"
						class="pl-12"
						placeholder="https://..."
						bind:value={$formData.url}
					/>
				</div>
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="title" class="flex flex-col gap-2">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Title</Form.Label>
				<div class="relative">
					<Input
						{...props}
						type="text"
						name="title"
						class="pl-4"
						placeholder="Enter bookmark title"
						bind:value={$formData.title}
					/>
				</div>
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="description" class="flex flex-col gap-2">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Description</Form.Label>
				<div class="relative">
					<Textarea
						{...props}
						name="description"
						class="input p-3"
						placeholder="Add a short description"
						bind:value={$formData.description}
					></Textarea>
				</div>
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Form.Field {form} name="tags" class="flex flex-col gap-2">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Tags</Form.Label>

				<Input
					{...props}
					type="text"
					name="tags"
					class="input px-4"
					placeholder="read later, docs, sveltekit"
					bind:value={tagInput}
					onchange={() => {
						$formData.tags = tagInput
							.split(',')
							.map((tag) => tag.trim())
							.filter(Boolean);
					}}
				/>
			{/snippet}
		</Form.Control>
	</Form.Field>

	<div class="mt-5 flex items-center justify-end gap-2">
		<Form.Button variant="ghost" onclick={handleCancel}>Cancel</Form.Button>
		<Form.Button disabled={isLoading} type="submit">
			{#if isLoading}
				<span>
					<LoaderCircle class="animate-spin" />
				</span>
			{:else}
				<Plus />
				Add Bookmark
			{/if}
		</Form.Button>
	</div>
</form>
