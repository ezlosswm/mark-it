<script>
	import { Search } from '@lucide/svelte';

	let isOpen = $state(false);

	function openSearchMobile() {
		isOpen = !isOpen;
		console.log(isOpen);
	}
</script>

<form action="" class="">
	<label for="search" class="form-label">Search your library</label>
	<div class="relative">
		<Search onclick={openSearchMobile} class="input-icon size-6 cursor-pointer" />
		<input
			type="text"
			name="search"
			placeholder="Search your library..."
			class="input py-4 pr-4 pl-12 text-sm"
		/>
	</div>
</form>
