<script lang="ts">
	import { BookMarked } from 'lucide-svelte';
</script>

<header class="sticky top-0 z-40 border-b border-cyprus-400/10 bg-cloud-100 p-6">
	<nav class="mx-auto flex max-w-[1440px] items-center justify-between">
		<a href="/" class="flex items-center gap-3">
			<div class="flex size-10 items-center justify-center rounded-full bg-cyprus-400">
				<BookMarked class="text-cloud-100" />
			</div>
			<h2 class="tracking-light text-2xl font-bold">MarkIt</h2>
		</a>

		<a
			href="/register"
			class="cursor-pointer rounded-3xl bg-cyprus-400 px-6 py-2 text-cloud-100 transition-opacity hover:opacity-90"
		>
			Sign Up
		</a>
	</nav>
</header>
