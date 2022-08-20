<script>
	export let items = [];
</script>

<figure class="sm-link flex items-center justify-between px-4 py-2 cursor-pointer">
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

	<div
		class="sm-link-icon flex items-center justify-center w-10 h-10 bg-gray-50 text-gray-300 rounded-full overflow-hidden transition"
	>
		<i class="fas fa-arrow-right" />
	</div>
</figure>

<style scoped>
	@media (min-width: 1280px) {
		.sm-link:hover .sm-link-icon {
			background: rgba(55, 65, 81, var(--tw-text-opacity));
			color: white;
		}
	}
</style>
