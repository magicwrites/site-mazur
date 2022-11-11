<script>
	import Icon from './Icon.svelte';

	export let items = [];

	let highlighted = false;
</script>

<figure
	class="sm-link flex items-center justify-between px-4 py-2 cursor-pointer"
	on:focus={() => (highlighted = true)}
	on:mouseover={() => (highlighted = true)}
	on:mouseleave={() => (highlighted = false)}
>
	<section class="flex flex-col transition">
		<div class="font-varela" style="margin-left: -0.5px">
			<slot />
		</div>
		<div class="text-sm font-work flex">
			{#each items as item, i}
				<span class="text-gray-400">{item}</span>
				{#if i !== items.length - 1}
					<span class="px-1 text-gray-200">/</span>
				{/if}
			{/each}
		</div>
	</section>

	<Icon active={highlighted} light name="fas fa-arrow-right" />
</figure>
