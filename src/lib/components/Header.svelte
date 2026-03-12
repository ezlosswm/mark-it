<script lang="ts">
	import { BookMarked } from 'lucide-svelte';
</script>

<header
	class="sticky top-0 z-10 flex items-center justify-between border-b border-cyprus-400/10 p-6"
>
	<a href="/" class="flex items-center gap-3">
		<div class="flex size-10 items-center justify-center rounded-full bg-cyprus-400">
			<BookMarked class="text-cloud-100" />
		</div>
		<h2 class="tracking-light font-oxygen text-2xl font-bold">MarkIt</h2>
	</a>

	<a
		href="/"
		class="cursor-pointer rounded-3xl bg-cyprus-400 px-6 py-2.5 font-bold text-cloud-100 transition-opacity hover:opacity-90"
	>
		Sign Up
	</a>
</header>
