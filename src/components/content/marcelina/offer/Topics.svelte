<script>
	import Point from '$components/shared/Point.svelte';
	import Preface from '$components/shared/Preface.svelte';

	import { isPolish } from '$src/stores/language';
	import { en, pl } from './Topics.content';

	$: texts = $isPolish ? pl : en;
</script>

<section class="flex flex-col gap-8 p-8">
	<Preface icon="fas fa-list-ol" background="bg-white" subtitle={texts.subtitle}>
		{texts.title}
	</Preface>

	<section class="text-gray-500">
		<div class="flex flex-col sm:gap-2">
			{#each texts.points as point}
				<Point>{@html point}</Point>
			{/each}
		</div>
	</section>
</section>
