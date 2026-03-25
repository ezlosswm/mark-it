<script lang="ts">
	import { BookMarked } from '@lucide/svelte';
</script>

<div class="border-t border-border px-6 py-10 md:px-20 lg:px-40">
	<div class="grid grid-cols-1 place-items-center justify-center">
		<div class="space-y-6">
			<a href="/" class="flex items-center justify-center gap-3">
				<div class="flex size-8 items-center justify-center rounded-full bg-primary">
					<BookMarked class="size-4 text-background" />
				</div>
				<h2 class="tracking-light font-oxygen text-xl font-bold">MarkIt</h2>
			</a>

			<p class="text-center text-foreground-muted">
				Making the web more organized, one link at a time.
			</p>
		</div>

		<div class="pt-10 text-center text-sm text-foreground-muted">
			<p>
				&copy; {new Date().getFullYear().toString()}
				<span><a href="https://github.com/ezlosswm" target="_blank">Carlos Gomez</a></span>
			</p>
			<p>MarkIt. Built for the curious minds.</p>
		</div>
	</div>
</div>
