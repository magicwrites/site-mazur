<script>
	import { isPolish } from '$src/stores/language';
	import { pl, en } from './Offer.content';
	import Point from '$components/shared/Point.svelte';

	$: texts = $isPolish ? pl : en;
</script>

<section class="xl:grid xl:grid-cols-11 px-8 2xl:px-0 flex flex-col gap-8 xl:gap-0">
	<section class="xl:col-span-5 flex flex-col gap-8">
		<h2 class="text-3xl -ml-0.5">{texts.analysis.title}</h2>

		<div class="flex flex-col gap-4">
			{#each texts.analysis.paragraphs as paragraph}
				<p>{@html paragraph}</p>
			{/each}
		</div>
	</section>

	<div />

	<section class="xl:col-span-5 flex flex-col gap-8">
		<h2 class="text-3xl -ml-0.5">{texts.proposal.title}</h2>

		<div class="flex flex-col gap-4">
			{#each texts.proposal.paragraphs as paragraph}
				<p>{@html paragraph}</p>
			{/each}
		</div>

		<ul class="flex flex-col gap-2">
			{#each texts.proposal.points as point, i}
				<li>
					<Point first={i === 0}>
						<div>{point.text}</div>
						{#if point.more}
							<div class="text-xs">{point.more}</div>
						{/if}
					</Point>
				</li>
			{/each}
		</ul>
	</section>
</section>
