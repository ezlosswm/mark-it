<script>
	import BookmarkSearchForm from '$lib/components/forms/bookmark-search-form.svelte';
	import { BookMarked, Menu } from '@lucide/svelte';

	import { dashboard } from '$lib/components/dashboard/dashboard.svelte';
</script>

<!-- Dashboard Header -->
<div class="border-b border-cyprus-400/10 py-3">
	<!-- Mobile -->
	<div class="flex items-center justify-between md:hidden">
		<button
			onclick={() => dashboard.toggle()}
			class="inline-block rounded-xl p-2 transition-colors hover:bg-power-400/5"
		>
			<Menu />
		</button>

		<a href="/" class="flex items-center gap-2">
			<div class="flex size-8 items-center justify-center rounded-full bg-cyprus-400">
				<BookMarked class="size-4 text-cloud-100" />
			</div>
			<h2 class="tracking-light text-xl font-bold">MarkIt</h2>
		</a>

		<!-- <BookmarkSearchForm /> -->
	</div>

	<!-- Desktop -->
	<div class="hidden items-center justify-between gap-8 md:flex">
		<div class="w-full max-w-3xl">
			<BookmarkSearchForm />
		</div>

		<!-- Dropdown avatar -->
		<!-- Goes to settings / account management -->
		<div class="size-16 rounded-full bg-power-300"></div>
	</div>
</div>
