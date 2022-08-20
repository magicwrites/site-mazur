<script>
	export let icon = 'fas fa-arrow-right';
	export let subtitle = '';
</script>

<div
	class="p-6 font-work border border-gray-200 rounded cursor-pointer transition hover:border-black"
	on:click
>
	<div class="flex justify-between items-center pr-1">
		<div>
			{#if subtitle}
				<div class="text-xs text-gray-400">{subtitle}</div>
			{/if}
			<span><slot /></span>
		</div>
		<i class={icon} />
	</div>
</div>
