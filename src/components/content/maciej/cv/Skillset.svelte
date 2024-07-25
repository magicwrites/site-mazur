<script>
	import Item from '$components/shared/Item.svelte';
	// import { en } from '$components/content/maciej/skillset/Engineering.content';

	// let texts = en;
</script>

<div class="flex flex-col gap-8">
	<header>
		<div>Combines engineering with some management and design capabilities</div>
		<div class="text-gray-400 text-xs">Selection of noteworthy technical skills and keywords:</div>
	</header>

	<section class="text-xs grid grid-cols-4">
		<!-- {#each texts.lists as list}
			<div class="flex flex-col gap-2 text-gray-700">
				{#each list.major as item}
					<div>
						<Item>{item}</Item>
					</div>
				{/each}
				{#each list.minor as item}
					<div class="text-gray-400">
						<Item>{item}</Item>
					</div>
				{/each}
				{#each list.patch as item}
					<div class="text-gray-400">
						<Item>{item}</Item>
					</div>
				{/each}
			</div>
		{/each} -->
	</section>
</div>
