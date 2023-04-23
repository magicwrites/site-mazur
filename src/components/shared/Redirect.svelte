<script>
	import cx from 'classnames';
	import Icon from './Icon.svelte';

	export let icon = 'fas fa-arrow-right';
	export let light = false;
	export let disabled = '';

	let highlighted = false;

	$: enabled = !disabled;
	$: active = enabled && highlighted;
</script>

<figure
	class={cx('flex gap-4 pr-4 items-center', {
		'relative overflow-hidden rounded-full select-none': disabled,
		'cursor-pointer': enabled
	})}
	on:focus={() => (highlighted = true)}
	on:mouseover={() => (highlighted = true)}
	on:mouseleave={() => (highlighted = false)}
>
	<div
		class={cx(
			'bg-neutral-100',
			'top-0 right-0 bottom-0 absolute w-full',
			'rounded-full transition-all',
			'flex items-center justify-center px-4',
			{ 'right-full': !highlighted }
		)}
	>
		<div class="text-sm">{disabled}</div>
	</div>

	<Icon {active} {light} name={icon} />

	<section class="flex flex-col transition">
		<slot />
	</section>
</figure>
