<script>
	import {
		ArrowDownAZ,
		Bookmark,
		Calendar,
		Cpu,
		LogOut,
		Palette,
		Settings,
		User,
		X
	} from '@lucide/svelte';

	import { dashboard } from '$lib/components/dashboard/dashboard.svelte';
	import Button from '../ui/button/Button.svelte';
	import Logo from '../ui/logo/Logo.svelte';
	import { authClient } from '$lib/auth-client';
	import { resolve } from '$app/paths';
	import { goto } from '$app/navigation';

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

<aside class="grid-[auto_1fr_auto] grid h-screen p-6">
	<div class="self-start">
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
	</div>

	<!-- Nav list -->
	<div class="flex h-full items-center">
		<div class="w-full space-y-1">
			<div class="space-y-1">
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
			</div>
		</div>
	</div>

	<!-- Footer -->
	<div class="self-end">
		<div class="space-y-1">
			<Button href="#">
				<Settings />
				Settings
			</Button>

			<Button onclick={handleSignOut} class="w-full" variant="destructive">
				<LogOut />
				Log out
			</Button>
		</div>
	</div>
</aside>
