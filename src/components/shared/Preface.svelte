<script>
	export let iconBackground = '';
	export let icon = 'fas fa-question';
	export let subtitle = null;
</script>

<header class="text-gray-700 flex flex-col gap-2">
	{#if icon}
		<div class="mx-auto mb-4">
			<div class="rounded-full {iconBackground}">
				<div class="flex items-center justify-center w-16 h-16">
					<i class="{icon} text-2xl" />
				</div>
			</div>
		</div>
	{/if}

	<div class="text-2xl whitespace-nowrap" style="margin-left: -0.75px">
		<slot />
	</div>

	{#if subtitle}
		<div class="text-gray-500">{subtitle}</div>
	{/if}
</header>
