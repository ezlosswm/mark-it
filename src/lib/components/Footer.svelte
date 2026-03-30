<script lang="ts">
	import { BookMarked } from '@lucide/svelte';
	import Logo from './ui/logo/Logo.svelte';
	import Button from './ui/button/Button.svelte';
</script>

<div class="border-t border-border px-6 py-10 md:px-20 lg:px-40">
	<div class="grid grid-cols-1 place-items-center justify-center">
		<div class="space-y-6 text-center">
			<Logo />

			<p class="text-center text-foreground-muted">
				Making the web more organized, one link at a time.
			</p>
		</div>

		<div class="pt-10 text-center text-sm text-foreground-muted">
			<p>
				&copy; {new Date().getFullYear().toString()}
				<span>
					<Button
						href="https://github.com/ezlosswm"
						target="_blank"
						size="sm"
						variant="link"
						class="p-0 font-normal text-foreground-muted">Carlos Gomez</Button
					>
					<!-- <a href="https://github.com/ezlosswm" target="_blank">Carlos Gomez</a> -->
				</span>
			</p>
			<p>MarkIt. Built for the curious minds.</p>
		</div>
	</div>
</div>
