<script>
	import { isPolish } from '$src/stores/language';
	import { pl, en } from './Experience.content';
	import Point from '$components/shared/Point.svelte';

	$: texts = $isPolish ? pl : en;
</script>

<section class="flex flex-col gap-8">
	<h2 class="px-8 2xl:px-0 text-3xl -ml-0.5">{texts.title}</h2>

	<div class="xl:grid xl:grid-cols-11 px-8 2xl:px-0 flex flex-col gap-8 xl:gap-0">
		<section class="xl:col-span-5 flex flex-col gap-8">
			<div class="flex flex-col gap-4">
				{#each texts.paragraphs.primary as paragraph}
					<p>{@html paragraph}</p>
				{/each}
			</div>
		</section>

		<div />

		<section class="xl:col-span-5 flex flex-col gap-8">
			<div class="flex flex-col gap-4">
				{#each texts.paragraphs.secondary as paragraph}
					<p>{@html paragraph}</p>
				{/each}
			</div>
		</section>
	</div>
</section>
