<script>
	import { isPolish } from '$src/stores/language';
	import { en, pl } from './Description.content';

	const started = 2013;
	const years = new Date().getFullYear() - started;

	$: texts = $isPolish ? pl : en;
</script>

<section class="font-work 2xl:text-lg flex flex-col gap-8 xl:gap-4 2xl:gap-8">
	{#each texts.paragraphs as paragraph}
		<div>{@html paragraph.replace('{years}', years)}</div>
	{/each}
</section>
