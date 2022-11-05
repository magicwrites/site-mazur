<script>
	export let color = null;
</script>

<div class="flex flex-col items-center gap-4">
	<div>
		<slot />
	</div>

	{#if color}
		<div class="w-1 h-6 bg-{color} rounded" />
	{/if}
</div>
