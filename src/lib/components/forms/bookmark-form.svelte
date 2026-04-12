<script lang="ts">
	import { Link2, Plus } from '@lucide/svelte';
	import Button from '../ui/button/Button.svelte';
	import { popover } from '$lib/components/ui/popover/Popover.svelte';
	import { superForm } from 'sveltekit-superforms/client';

	const { data } = $props();
	const { form, errors, reset, enhance: formEnhance } = superForm(data.form);

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
</script>

<form action="?/createBookmark" method="POST" use:formEnhance class="space-y-5 p-4">
	<div class="flex flex-col gap-2">
		<label for="url" class="form-label">URL</label>
		<div class="relative">
			<Link2 class="input-icon" />
			<input
				type="text"
				name="url"
				class="input pr-4 pl-12"
				placeholder="https://..."
				bind:value={$form.url}
			/>
		</div>
		{#if $errors.url}
			<p class="text-xs text-danger">{$errors.url}</p>
		{/if}
	</div>

	<div class="flex flex-col gap-2">
		<label for="title" class="form-label">Title</label>
		<div class="relative">
			<input
				type="text"
				name="title"
				class="input px-4"
				placeholder="Enter bookmark title"
				bind:value={$form.title}
			/>
		</div>
		{#if $errors.title}
			<p class="text-xs text-danger">{$errors.title}</p>
		{/if}
	</div>

	<div class="flex flex-col gap-2">
		<label for="description" class="form-label">Description</label>
		<div class="relative">
			<textarea
				name="description"
				class="input p-3"
				placeholder="Add a short description"
				rows="4"
				bind:value={$form.description}
			></textarea>
		</div>
		{#if $errors.description}
			<p class="text-xs text-danger">{$errors.description}</p>
		{/if}
	</div>

	<div class="mt-5 flex items-center justify-end gap-2">
		<Button variant="ghost" onclick={handleCancel}>Cancel</Button>
		<Button type="submit">
			<Plus />
			Add Bookmark
		</Button>
	</div>
</form>
