<script lang="ts" module>
	import { tv, type VariantProps } from 'tailwind-variants';

	const iconSizeMap = {
		default: 'size-4',
		lg: 'size-8'
	};

	export const logoVariants = tv({
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

	export type LogoVariant = VariantProps<typeof logoVariants>['alignment'];
	export type LogoSize = VariantProps<typeof logoVariants>['size'];
</script>

<script lang="ts">
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import { BookMarked } from '@lucide/svelte';
	type LogoProps = {
		alignment?: LogoVariant;
		href?: string | undefined;
		disabled?: boolean;
		size?: LogoSize;
		class?: string;
	} & HTMLAnchorAttributes &
		HTMLButtonAttributes;

	let {
		alignment = 'default',
		size = 'default',
		class: className,
		...restProps
	}: LogoProps = $props();
</script>

<a
	href="/"
	class={logoVariants({ alignment, size, class: className })}
	tabindex="-1"
	{...restProps}
>
	<div class="flex items-center rounded-full bg-primary p-3 text-background">
		<BookMarked class={iconSizeMap[size]} />
	</div>
	<h2>MarkIt</h2>
</a>
