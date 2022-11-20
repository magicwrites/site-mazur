<script>
	import Period from '$components/shared/Period.svelte';
	import Preface from '$components/shared/Preface.svelte';

	import { isPolish } from '$src/stores/language';
	import { en, pl } from './Story.content';

	$: texts = $isPolish ? pl : en;
</script>

<div class="p-8 flex flex-col gap-8">
	<Preface icon="fas fa-user-graduate" background="bg-gray-50" subtitle="">{texts.title}</Preface>

	<section class="flex flex-col gap-4 text-gray-500">
		{#each texts.periods as period, i}
			<Period color="text-gray-500" last={i === texts.periods.length - 1}>
				{@html period}
			</Period>
		{/each}
	</section>
</div>
