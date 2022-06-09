<script>
	export const subtitle = null;
</script>

<div class="flex flex-col text-center text-gray-700">
	<span class="sm-title uppercase text-7xl xl:text-8xl font-dosis"><slot /></span>
	{#if subtitle}
		<span class="sm-subtitle xl:text-left pt-8 xl:pt-2 text-xl font-work">{subtitle}</span>
	{/if}
</div>

<style>
	.sm-title {
		margin-left: -4.5px;
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
