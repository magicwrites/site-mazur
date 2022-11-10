<script>
	import Preface from '$components/shared/Preface.svelte';

	import { isPolish } from '$src/stores/language';
	import { en, pl } from './Intro.content';

	$: texts = $isPolish ? pl : en;
</script>

<section class="flex flex-col gap-8 p-8">
	<Preface icon="fas fa-briefcase" background="bg-gray-50" subtitle={texts.subtitle}>
		{texts.title}
	</Preface>

	<div class="text-gray-500 flex flex-col gap-8">
		{#each texts.paragraphs as paragraph}
			<div>
				{@html paragraph}
			</div>
		{/each}
	</div>
</section>
