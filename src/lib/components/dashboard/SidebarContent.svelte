<script>
	import {
		ArrowDownAZ,
		Bookmark,
		BookMarked,
		Calendar,
		Clock,
		Cpu,
		LogOut,
		Palette,
		Plus,
		Settings,
		Star,
		User,
		X
	} from '@lucide/svelte';

	import { dashboard } from '$lib/components/dashboard/dashboard.svelte';
	import Button from '../ui/button/Button.svelte';
	import Logo from '../ui/logo/Logo.svelte';
	import { authClient } from '$lib/auth-client';
	import { resolve } from '$app/paths';
	import { goto } from '$app/navigation';
	import { popover } from '../ui/popover/Popover.svelte';

	// This doesn't work
	async function handleSignOut() {
		await authClient.signOut();
		goto(resolve('/login'));
	}

	// Placeholder nav
	const categories = [
		{ icon: Bookmark, label: 'All Bookmarks' },
		{ icon: Palette, label: 'Design' },
		{ icon: Cpu, label: 'Tech' },
		{ icon: User, label: 'Personal' }
	];
</script>

<aside class="grid-[auto_1fr_auto] grid h-screen bg-background px-3 py-6">
	<div>
		<div class="relative">
			<div class="flex items-center justify-center">
				<Logo class="gap-2" />
			</div>

			<div class="absolute top-1/2 -right-2 -translate-y-1/2 md:hidden">
				<Button variant="ghost" class="p-2" onclick={() => dashboard.toggle()}>
					<X />
				</Button>
			</div>
		</div>
		<div class="mt-8 mb-12 text-primary uppercase">
			<h4 class="text-sm font-semibold">Collections</h4>
			<p class="text-sm text-primary">Your curated library</p>
		</div>

		<!-- Nav list -->
		<div class="flex h-full flex-col items-center">
			<div class="flex w-full flex-col justify-start space-y-2">
				<!-- If active the variant and css changes to default -->
				<Button variant={`default`} class="w-full justify-start">
					<BookMarked />
					<span class="uppercase"> All Bookmarks </span>
				</Button>

				<Button variant={`link`} class="justify-start hover:bg-primary/10">
					<Clock class="text-primary" />
					<span class="text-primary uppercase"> Recent </span>
				</Button>

				<Button variant={`link`} class="justify-start hover:bg-primary/10">
					<Star class="text-primary" />
					<span class="text-primary uppercase"> Favorites </span>
				</Button>

				<!-- <div class="space-y-1">
				<h4 class="text-sm font-bold tracking-wider text-foreground-muted uppercase">Categories</h4>
				{#each categories as category}
					<Button variant="ghost" class="flex w-full justify-start text-foreground">
						<category.icon />
						{category.label}
					</Button>
				{/each}
			</div>

			<div class="mt-5 space-y-1">
				<h4 class="text-sm font-bold tracking-wider text-foreground-muted uppercase">
					Sort & Filter
				</h4>

				<Button variant="ghost" class="flex w-full justify-start text-foreground">
					<Calendar />
					Date Added
				</Button>

				<Button variant="ghost" class="flex w-full justify-start text-foreground">
					<ArrowDownAZ />
					Date Added
				</Button>
			</div> -->
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

			<Button href="#" class="justify-start" variant="link">
				<Settings class="text-primary" />
				<span class="text-primary uppercase"> Settings </span>
			</Button>

			<Button onclick={handleSignOut} class="justify-start" variant="link">
				<LogOut class="text-danger" />
				<span class="text-danger uppercase"> Log out </span>
			</Button>
		</div>
	</div>
</aside>
