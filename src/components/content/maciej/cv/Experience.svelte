<script>
	import Item from '$components/shared/Item.svelte';
</script>

<section class="flex flex-col gap-2">
	<div class="grid grid-cols-3 items-start">
		<div class="flex flex-col gap-0.5">
			<Item>
				<span>Casumo</span>
				<span class="text-gray-400">@ malta</span>
			</Item>
			<div class="pl-6 text-xs text-gray-400">since 2018</div>
		</div>
		<div class="text-xs text-gray-400 flex flex-col gap-0.5">
			<div>entertainment</div>
			<div>online casino</div>
		</div>
		<div class="text-xs flex flex-col gap-0.5">
			<div>front-end leader / architect</div>
			<div>front-end developer <span class="text-gray-400">&bull; senior</span></div>
		</div>
	</div>

	<div class="grid grid-cols-3 items-start">
		<div class="flex flex-col gap-0.5">
			<Item>
				<span>Future-Processing</span>
				<span class="text-gray-400">@ poland</span>
			</Item>
			<div class="pl-6 text-xs text-gray-400">2011 - 2018</div>
		</div>
		<div class="text-xs text-gray-400 flex flex-col gap-0.5">
			<div>IT outsourcing</div>
			<div>various business domains</div>
		</div>
		<div class="text-xs flex flex-col gap-0.5">
			<div>front-end developer <span class="text-gray-400">&bull; senior</span></div>
			<div>front-end developer</div>
		</div>
	</div>

	<div class="grid grid-cols-3 items-start">
		<div class="flex flex-col gap-0.5">
			<Item>
				<span>Goodpoint</span>
				<span class="text-gray-400">@ poland</span>
			</Item>
			<div class="pl-6 text-xs text-gray-400">2010 - 2011</div>
		</div>
		<div class="text-xs text-gray-400 flex flex-col gap-0.5">
			<div>IT support</div>
			<div>various business domains</div>
		</div>
		<div class="text-xs flex flex-col gap-0.5">
			<div>web developer</div>
		</div>
	</div>
</section>
