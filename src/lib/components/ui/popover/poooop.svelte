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
	import BookmarkForm from '$lib/components/forms/bookmark-form.svelte';
	import { Button } from '$lib/components/ui/button';

	const { data } = $props();
</script>

<section
	class="{popover.isOpen
		? 'fixed'
		: 'hidden'} inset-0 z-60 flex h-screen items-center justify-center bg-foreground/50 p-4 backdrop-blur-xs"
>
	<div class="mx-auto w-full max-w-2xl rounded-3xl bg-background p-4">
		<div class="flex items-center justify-between p-8">
			<h2 class="w-full">Add New Bookmark</h2>
			<Button onclick={() => popover.toggleOpenState()} variant="ghost">
				<X />
			</Button>
		</div>

		<BookmarkForm {data} />
	</div>
</section>
