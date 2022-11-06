<script>
	export let color = null;
	export let last = false;
</script>

<div class="flex flex-col items-center gap-4">
	<div class="w-full xl:text-{color}">
		<slot />
	</div>

	{#if color && !last}
		<div class="w-1 h-6 bg-{color} rounded xl:hidden" />
	{/if}
</div>
