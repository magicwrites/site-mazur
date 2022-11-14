<script>
	import Preface from '$components/shared/Preface.svelte';
	import Item from '$components/shared/Item.svelte';

	import { isPolish } from '$src/stores/language';
	import { en, pl } from './Engineering.content';

	$: texts = $isPolish ? pl : en;
</script>

<section class="p-8 bg-gray-50 xl:p-0 xl:bg-transparent">
	<div class="pb-4 border-b-4 border-gray-400">
		<Preface icon="fas fa-microchip" background="bg-white" subtitle={texts.subtitle}>
			{texts.title}
		</Preface>
	</div>

	<div class="py-4">
		{texts.about}
	</div>

	<div class="pt-4 font-work">
		<div class="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 2xl:grid-cols-4 gap-4 gap-y-8">
			{#each texts.lists as list}
				<section class="flex flex-col gap-1.5 xl:gap-1 2xl:gap-2 text-gray-700">
					{#each list.major as item}
						<div class="whitespace-nowrap">
							<Item size="sm">{item}</Item>
						</div>
					{/each}
					{#each list.minor as item}
						<div class="text-gray-400">
							<Item size="sm">{item}</Item>
						</div>
					{/each}
					{#each list.patch as item}
						<div class="text-gray-400">
							<Item size="sm" accent="gray-200">{item}</Item>
						</div>
					{/each}
				</section>
			{/each}
		</div>
	</div>
</section>
