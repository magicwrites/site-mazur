<script>
	import { en, pl } from './About.content';
	import { isPolish } from '$src/stores/language';

	$: texts = $isPolish ? pl : en;
</script>

<section class="font-work xl:text-lg text-gray-400">
	<div class="p-2 px-8 xl:p-0 flex flex-col gap-4">
		{#each texts.paragraphs as paragraph}
			<div>{paragraph}</div>
		{/each}
	</div>
</section>
