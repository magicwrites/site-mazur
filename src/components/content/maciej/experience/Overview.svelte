<script>
	import Preface from '$components/shared/Preface.svelte';

	import { isPolish } from '$src/stores/language';
	import { en, pl } from './Overview.content';

	const started = 2010;
	const years = new Date().getFullYear() - started;

	$: texts = $isPolish ? pl : en;
</script>

<div class="p-8 flex flex-col gap-8 text-gray-500">
	<Preface icon="fas fa-laptop-code" background="bg-gray-50">{texts.title}</Preface>

	{#each texts.paragraphs as paragraph}
		<div>
			{@html paragraph.replace('{years}', years)}
		</div>
	{/each}
</div>
