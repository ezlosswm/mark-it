<script lang="ts">
	import { page } from '$app/state';
	import Popover from '$lib/components/ui/popover/poooop.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import SiteHeader from '$lib/components/site-header.svelte';

	import { ModeWatcher } from 'mode-watcher';

	let { data, children } = $props();
</script>

<div class="[--header-height:calc(--spacing(14))]">
	<Sidebar.Provider>
		<AppSidebar user={data.user} />

		<Sidebar.Inset>
			<SiteHeader />

			<div class="flex flex-1 flex-col">
				{@render children()}
			</div>
		</Sidebar.Inset>

		<Popover data={page.data} />
	</Sidebar.Provider>
</div>
<ModeWatcher />
