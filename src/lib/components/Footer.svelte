<script lang="ts">
	import Logo from './ui/logo/Logo.svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="border-t border-border px-6 py-10 md:px-20 lg:px-40">
	<div class="grid grid-cols-1 place-items-center justify-center">
		<div class="space-y-6 text-center">
			<Logo />

			<p class="text-center text-muted-foreground">
				Making the web more organized, one link at a time.
			</p>
		</div>

		<div class="pt-10 text-center text-sm text-muted-foreground">
			<p>
				&copy; {new Date().getFullYear().toString()}
				<span>
					<Button
						href="https://github.com/ezlosswm"
						target="_blank"
						size="sm"
						variant="link"
						class="p-0 font-normal text-muted-foreground">Carlos Gomez</Button
					>
				</span>
			</p>
			<p>MarkIt. Built for the curious minds.</p>
		</div>
	</div>
</div>
