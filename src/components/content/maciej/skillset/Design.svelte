<script>
	import Preface from '$components/shared/Preface.svelte';

	import { isPolish } from '$src/stores/language';
	import { en, pl } from './Design.content';

	$: texts = $isPolish ? pl : en;
</script>

<section class="p-8 bg-gray-50 xl:p-0 xl:bg-transparent">
	<div class="flex flex-col gap-4">
		<div class="pb-4 border-b-4 border-gray-400">
			<Preface icon="fas fa-compass-drafting" background="bg-gray-50" subtitle={texts.subtitle}>
				{texts.title}
			</Preface>
		</div>

		{#each texts.paragraphs as paragraph}
			<div>
				{@html paragraph}
			</div>
		{/each}
	</div>
</section>
