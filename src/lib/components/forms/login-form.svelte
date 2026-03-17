<script>
	import { Lock, Mail } from '@lucide/svelte';
</script>

<form action="">
	<div class="flex w-full flex-col gap-5">
		<div class="flex flex-col gap-2">
			<label for="" class="form-label"> Email </label>

			<div class="relative">
				<Mail class="absolute top-1/2 left-4 -translate-y-1/2 text-cyprus-400/40" />
				<input type="email" class="input py-4 pr-4 pl-12" placeholder="carlos@example.com" />
			</div>
		</div>

		<div class="flex flex-col gap-2">
			<div class="flex w-full items-center justify-between">
				<label for="" class="form-label"> Password </label>
				<div class="flex flex-1 justify-end">
					<a href="#" class="text-xs font-semibold hover:underline">Forgot password?</a>
				</div>
			</div>

			<div class="relative">
				<Lock class="absolute top-1/2 left-4 -translate-y-1/2 text-cyprus-400/40" />
				<input type="text" class="input py-4 pr-4 pl-12" placeholder="••••••••" />
			</div>
		</div>

		<button class="btn btn-primary group flex items-center justify-center gap-2">
			<span> Log In </span>
		</button>
	</div>
</form>

<div
	class="flex w-full items-center gap-4 text-xs font-medium tracking-widest text-power-200 uppercase"
>
	<div class="h-px flex-1 bg-power-200/25"></div>
	<span>Or sign in with</span>
	<div class="h-px flex-1 bg-power-200/25"></div>
</div>

<button class="btn btn-secondary group flex items-center justify-center gap-2">
	<img src="./assets/google-color.svg" alt="Google color icon" />
	<span> Log in with Google </span>
</button>
