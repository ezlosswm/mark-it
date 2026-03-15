<script>
	import { ArrowRight, Lock, Mail, User } from '@lucide/svelte';
</script>

<form action="">
	<div class="flex w-full flex-col gap-5">
		<div class="flex flex-col gap-2">
			<label for="" class="form-label"> Full Name </label>

			<div class="relative">
				<User class="absolute top-1/2 left-4 -translate-y-1/2 text-cyprus-400/40" />
				<input type="text" class="input py-4 pr-4 pl-12" placeholder="John Doe" />
			</div>
		</div>

		<div class="flex flex-col gap-2">
			<label for="" class="form-label"> Email </label>

			<div class="relative">
				<Mail class="absolute top-1/2 left-4 -translate-y-1/2 text-cyprus-400/40" />
				<input type="email" class="input py-4 pr-4 pl-12" placeholder="carlos@example.com" />
			</div>
		</div>

		<div class="flex flex-col gap-2">
			<label for="" class="form-label"> Password </label>

			<div class="relative">
				<Lock class="absolute top-1/2 left-4 -translate-y-1/2 text-cyprus-400/40" />
				<input type="text" class="input py-4 pr-4 pl-12" placeholder="••••••••" />
			</div>
		</div>

		<button class="btn btn-primary group flex items-center justify-center gap-2">
			<span> Create Account </span>
			<ArrowRight
				class="size-5 transition-transform group-hover:size-4 group-hover:translate-x-1"
			/>
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
	<span> Sign up with Google </span>
</button>
