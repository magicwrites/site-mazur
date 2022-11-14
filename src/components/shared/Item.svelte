<script>
	export let accent = null;
	export let icon = `fas fa-circle ${accent ? `text-${accent}` : ''}`;
	export let size = 'xs';
</script>

<div class="text-{size} flex gap-3 items-center">
	<div class="flex items-center justify-center w-3">
		<i class={icon} />
	</div>
	<span><slot /></span>
</div>
