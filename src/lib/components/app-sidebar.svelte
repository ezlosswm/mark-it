<script lang="ts" module>
	import SquareTerminalIcon from '@lucide/svelte/icons/square-terminal';
	import BotIcon from '@lucide/svelte/icons/bot';
	import BookOpenIcon from '@lucide/svelte/icons/book-open';
	import Settings2Icon from '@lucide/svelte/icons/settings-2';

	const navData = {
		user: {
			name: 'name',
			email: 'm@example.com',
			avatar: '/avatars/shadcn.jpg'
		},
		navMain: [
			{
				title: 'Playground',
				url: '',
				icon: SquareTerminalIcon,
				isActive: true
			},
			{
				title: 'Models',
				url: '#',
				icon: BotIcon
			},
			{
				title: 'Documentation',
				url: '#',
				icon: BookOpenIcon
			},
			{
				title: 'Settings',
				url: '#',
				icon: Settings2Icon
			}
		]
	};
</script>

<script lang="ts">
	import type { ComponentProps } from 'svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import NavMain from './nav-main.svelte';
	import NavUser from './nav-user.svelte';
	import Logo from './ui/logo/Logo.svelte';

	type User = {
		name: string;
		email: string;
		avatar: string;
	};

	type Props = ComponentProps<typeof Sidebar.Root> & {
		user: User;
	};

	let { ref = $bindable(null), user, ...restProps }: Props = $props();
</script>

<Sidebar.Root bind:ref {...restProps}>
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton size="lg">
					{#snippet child({ props })}
						<a href="/dashboard" {...props}>
							<div class="grid flex-1 text-start text-sm leading-tight">
								<Logo />
							</div>
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>
	<Sidebar.Content>
		<NavMain items={navData.navMain} />
	</Sidebar.Content>
	<Sidebar.Footer>
		<NavUser {user} />
	</Sidebar.Footer>
</Sidebar.Root>
