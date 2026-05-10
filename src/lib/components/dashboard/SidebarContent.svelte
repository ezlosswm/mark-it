<script>
	import { BookMarked, Clock, LogOut, Plus, Settings, Star, X } from '@lucide/svelte';

	import { dashboard } from '$lib/components/dashboard/dashboard.svelte';
	import { Button } from '$lib/components/ui/button';
	import Logo from '../ui/logo/Logo.svelte';
	import { authClient } from '$lib/auth-client';
	import { resolve } from '$app/paths';
	import { goto } from '$app/navigation';
	import { popover } from '../ui/popover/poooop.svelte';

	async function handleSignOut() {
		await authClient.signOut();
		goto(resolve('/login'));
	}
</script>

<aside class="grid-[auto_1fr_auto] grid h-screen bg-background px-3 py-6">
	<div>
		<div class="relative">
			<div class="flex items-center justify-center">
				<Logo class="gap-2" />
			</div>

			<div class="absolute top-1/2 -right-2 -translate-y-1/2 md:hidden">
				<Button variant="ghost" onclick={() => dashboard.toggle()}>
					<X />
				</Button>
			</div>
		</div>
		<div class="mt-8 mb-12 uppercase">
			<h3>Collections</h3>
			<p>Your curated library</p>
		</div>

		<!-- Nav list -->
		<div class="flex h-full flex-col items-center">
			<div class="flex w-full flex-col justify-start space-y-2">
				<!-- If active the variant and css changes to default -->
				<Button variant={`default`} class="w-full justify-start">
					<BookMarked />
					<span class="uppercase"> All Bookmarks </span>
				</Button>

				<Button variant={`ghost`} class="justify-start hover:bg-primary/10">
					<Clock />
					<span class="uppercase"> Recent </span>
				</Button>

				<Button variant={`ghost`} class="justify-start hover:bg-primary/10">
					<Star />
					<span class="uppercase"> Favorites </span>
				</Button>
			</div>
		</div>
	</div>

	<!-- Footer -->
	<div class="self-end">
		<div class="flex flex-col space-y-1">
			<Button
				onclick={() => {
					popover.toggleOpenState();
				}}
				class="w-full text-center"
			>
				<Plus />
				<span>New Bookmark</span>
			</Button>

			<Button href="#" class="justify-start" variant="ghost">
				<Settings />
				<span class="uppercase"> Settings </span>
			</Button>

			<Button onclick={handleSignOut} class="justify-start" variant="link">
				<LogOut class="text-destructive" />
				<span class="text-destructive uppercase"> Log out </span>
			</Button>
		</div>
	</div>
</aside>
