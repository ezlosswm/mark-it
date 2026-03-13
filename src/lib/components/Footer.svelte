<script lang="ts">
	import { BookMarked } from '@lucide/svelte';
</script>

<div class="border-t border-cyprus-400/10 px-6 py-20 md:px-20 lg:px-40">
	<div class="grid grid-cols-1 place-items-center justify-center">
		<div class="space-y-6">
			<a href="/" class="flex items-center justify-center gap-3">
				<div class="flex size-8 items-center justify-center rounded-full bg-cyprus-400">
					<BookMarked class="size-4 text-cloud-100" />
				</div>
				<h2 class="tracking-light font-oxygen text-xl font-bold">MarkIt</h2>
			</a>

			<p class="text-center">Making the web more organized, one link at a time.</p>
		</div>

		<div class="mt-20 pt-10 text-center text-sm">
			<p>
				&copy; {new Date().getFullYear().toString()}
				<span><a href="https://github.com/ezlosswm" target="_blank">Carlos Gomez</a></span>
			</p>
			<p>MarkIt. Built for the curious minds.</p>
		</div>
	</div>
</div>
