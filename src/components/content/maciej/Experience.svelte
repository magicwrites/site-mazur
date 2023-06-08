<script>
	import { isPolish } from '$src/stores/language';
	import { pl, en } from './Experience.content';

	$: texts = $isPolish ? { ...pl } : { ...en };
</script>

<section class="xl:grid xl:grid-cols-11 px-8 2xl:px-0 flex flex-col gap-8 xl:gap-0">
	<section class="xl:col-span-4 flex flex-col gap-8">
		<h2 class="text-3xl -ml-0.5">{texts.description.header}</h2>

		<div class="flex flex-col gap-4">
			{#each texts.description.paragraphs as paragraph}
				<p>{@html paragraph}</p>
			{/each}
		</div>
	</section>

	<div />

	<section class="xl:col-span-6">
		<ol class="flex flex-col gap-16 xl:gap-12">
			{#each texts.entries as entry}
				<li class="flex flex-col gap-8">
					<header>
						<h3 class="text-3xl -ml-0.5">{entry.header}</h3>
						<div class="text-xs text-neutral-400 absolute">{entry.note}</div>
					</header>

					<div class="flex flex-col gap-4">
						{#each entry.paragraphs as paragraph}
							<p>
								{@html paragraph}
							</p>
						{/each}
					</div>
				</li>
			{/each}
		</ol>
	</section>
</section>
