<script lang="ts" module>
	import { tv, type VariantProps } from 'tailwind-variants';

	const iconSizeMap = {
		default: 'size-4',
		lg: 'size-8'
	};

	export const btnVariants = tv({
		base: 'inline-flex items-center text-primary font-bold tracking-wider',
		variants: {
			alignment: {
				default: '', // Horizontal
				vertical: 'flex-col'
			},
			size: {
				default: 'gap-1 text-xl',
				lg: 'gap-2 text-2xl'
			}
		},
		compoundVariants: [
			{
				variant: 'default',
				size: 'default'
			}
		],
		defaultVariants: {
			alignment: 'default',
			size: 'default'
		}
	});

	export type ButtonVariant = VariantProps<typeof btnVariants>['alignment'];
	export type ButtonSize = VariantProps<typeof btnVariants>['size'];
</script>

<script lang="ts">
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import { BookMarked } from '@lucide/svelte';
	type ButtonProps = {
		alignment?: ButtonVariant;
		href?: string | undefined;
		disabled?: boolean;
		size?: ButtonSize;
		class?: string;
	} & HTMLAnchorAttributes &
		HTMLButtonAttributes;

	let {
		href = undefined,
		alignment = 'default',
		size = 'default',
		class: className,
		disabled,
		...restProps
	}: ButtonProps = $props();
</script>

<a href="/" class={btnVariants({ alignment, size, class: className })} tabindex="-1" {...restProps}>
	<div class="flex items-center rounded-full bg-primary p-3 text-background">
		<BookMarked class={iconSizeMap[size]} />
	</div>
	<h2>MarkIt</h2>
</a>
