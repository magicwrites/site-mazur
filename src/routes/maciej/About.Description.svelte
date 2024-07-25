<script>
	import { isPolish } from '$src/stores/language';
	import { en, pl } from './About.Description.texts';

	$: texts = $isPolish ? pl : en;
</script>

<section class="font-work 2xl:text-lg flex flex-col gap-8 xl:gap-4 2xl:gap-8">
	{#each texts.paragraphs as paragraph}
		<div>{@html paragraph}</div>
	{/each}
</section>
