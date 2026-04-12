<script lang="ts" module>
	class PopoverState {
		isOpen = $state(false);

		toggleOpenState() {
			this.isOpen = !this.isOpen;

			document.body.style.overflow = this.isOpen ? 'hidden' : '';
		}
	}

	export const popover = new PopoverState();
</script>

<script lang="ts">
	import { X } from '@lucide/svelte';
	import Button from '$lib/components/ui/button/Button.svelte';
	import BookmarkForm from '$lib/components/forms/bookmark-form.svelte';

	const { data } = $props();
</script>

<section
	class="{popover.isOpen
		? 'fixed'
		: 'hidden'} inset-0 z-60 flex h-screen items-center justify-center bg-border-dark/50 p-4 backdrop-blur-xs"
>
	<div class="mx-auto w-full max-w-xl rounded-xl bg-background">
		<div class="flex items-center justify-between p-4">
			<h2 class="text-lg font-bold tracking-wide">Add New Bookmark</h2>
			<Button onclick={() => popover.toggleOpenState()} variant="ghost" class="p-2">
				<X />
			</Button>
		</div>

		<BookmarkForm {data} />
	</div>
</section>
