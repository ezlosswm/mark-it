<script lang="ts" module>
	import { tv, type VariantProps } from 'tailwind-variants';

	export const btnVariants = tv({
		base: 'tracking-wide flex items-center justify-center font-bold transition-all text-background rounded-lg',
		variants: {
			variant: {
				default: 'shadow-sm active:shadow-none bg-primary active:bg-primary hover:bg-primary/80',
				secondary:
					'shadow-sm active:shadow-none border border-border bg-background active:bg-background text-foreground hover:bg-background-muted',
				ghost: 'active:bg-background-muted/50 hover:bg-background-muted text-foreground',
				outline:
					'shadow-xs border border-foreground-muted text-foreground hover:bg-background-muted/90 bg-background',
				link: 'truncate inline hover:underline underline-offset-4 text-foreground',
				destructive: 'bg-danger hover:bg-danger-400 text-background active:bg-danger'
			},
			size: {
				sm: 'py-1 px-3 text-xs gap-1 [&_svg]:size-3',
				default: 'py-3 px-8 text-sm gap-2 [&_svg]:size-5',
				lg: 'py-4 px-10 text-lg gap-4 [&_svg]:size-8'
			},
			disabled: {
				true: 'opacity-50 pointer-events-none'
			}
		},
		compoundVariants: [
			{
				variant: 'default',
				size: 'default',
				disabled: true
			}
		],
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	});

	export type ButtonVariant = VariantProps<typeof btnVariants>['variant'];
	export type ButtonSize = VariantProps<typeof btnVariants>['size'];
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	type ButtonProps = {
		variant?: ButtonVariant;
		href?: string | undefined;
		disabled?: boolean;
		size?: ButtonSize;
		class?: string;
		children?: Snippet;
	} & HTMLAnchorAttributes &
		HTMLButtonAttributes;

	let {
		href = undefined,
		variant = 'default',
		size = 'default',
		class: className,
		disabled,
		children,
		...restProps
	}: ButtonProps = $props();
</script>

{#if href}
	<a
		href={disabled ? undefined : href}
		data-slot="button"
		aria-disabled={disabled}
		role={disabled ? 'link' : undefined}
		class={btnVariants({ variant, size, disabled, class: className })}
		tabindex={disabled ? -1 : undefined}
		{...restProps}
	>
		{@render children?.()}
	</a>
{:else}
	<button
		{disabled}
		data-slot="button"
		class={btnVariants({ variant, disabled, size, class: className })}
		{...restProps}
	>
		{@render children?.()}
	</button>
{/if}
