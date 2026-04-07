<script lang="ts" module>
	import { Link2, Plus, X } from '@lucide/svelte';
	import Button from '../ui/button/Button.svelte';

	class PopoverState {
		isOpen = $state(false);

		toggleOpenState() {
			this.isOpen = !this.isOpen;

			document.body.style.overflow = this.isOpen ? 'hidden' : '';
		}
	}

	export const popover = new PopoverState();
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

		<form action="" class="space-y-5 p-4">
			<div class="flex flex-col gap-2">
				<label for="" class="form-label"> URL </label>

				<div class="relative">
					<Link2 class="input-icon" />
					<input type="text" class="input py-4 pr-4 pl-12" placeholder="https://..." />
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<label for="" class="form-label"> Title </label>

				<div class="relative">
					<input type="text" class="input px-4 py-4" placeholder="Enter bookmark title" />
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<label for="" class="form-label"> Description </label>

				<div class="relative">
					<textarea name="" class="input p-4" placeholder="Add a short description" rows="4"
					></textarea>
				</div>
			</div>

			<div class="mt-5 flex items-center justify-end">
				<Button variant="ghost">Cancel</Button>
				<Button>
					<Plus />
					Add Bookmark
				</Button>
			</div>
		</form>
	</div>
</section>
