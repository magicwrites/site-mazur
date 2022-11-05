<script>
	export let subtitle = null;
</script>

<div class="flex flex-col gap-2 text-gray-700">
	<span class="sm-title uppercase text-6xl sm:text-7xl xl:text-8xl font-dosis">
		<slot />
	</span>
	{#if subtitle}
		<span class="sm-subtitle xl:text-left font-work text-gray-400">{subtitle}</span>
	{/if}
</div>

<style>
	.sm-title {
		margin-left: -1.25px;
	}

	@media (min-width: 1280px) {
		.sm-title {
			margin-left: -6px;
		}

		.sm-subtitle {
			margin-left: -1px;
		}
	}
</style>
