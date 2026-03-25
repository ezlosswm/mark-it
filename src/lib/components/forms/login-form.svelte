<script>
	import { Lock, Mail } from '@lucide/svelte';
	import Button from '../ui/button/Button.svelte';
</script>

<form action="">
	<div class="flex w-full flex-col gap-5">
		<div class="flex flex-col gap-2">
			<label for="" class="form-label"> Email </label>

			<div class="relative">
				<Mail class="input-icon" />
				<input type="email" class="input py-4 pr-4 pl-12" placeholder="carlos@example.com" />
			</div>
		</div>

		<div class="flex flex-col gap-2">
			<div class="flex w-full items-center justify-between">
				<label for="" class="form-label"> Password </label>
				<div class="flex flex-1 justify-end">
					<Button href="#" variant="link" size="sm">Forgot Password?</Button>
				</div>
			</div>

			<div class="relative">
				<Lock class="input-icon" />
				<input type="text" class="input py-4 pr-4 pl-12" placeholder="••••••••" />
			</div>
		</div>

		<!-- <Button size="lg">Log In</Button> -->

		<Button>Log In</Button>
	</div>
</form>

<div
	class="flex w-full items-center gap-4 text-xs font-medium tracking-widest text-power-200 uppercase"
>
	<div class="h-px flex-1 bg-power-200/25"></div>
	<span>Or sign in with</span>
	<div class="h-px flex-1 bg-power-200/25"></div>
</div>

<Button variant="secondary">
	<img src="./assets/google-color.svg" alt="Google color icon" />
	Log In With Google
</Button>
