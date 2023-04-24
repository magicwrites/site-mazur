<script>
	import { isPolish } from '$src/stores/language';
	import Item from '$components/shared/Item.svelte';
	import * as engineering from './skillset/Engineering.content';
	import * as management from './skillset/Management.content';
	import * as design from './skillset/Design.content';

	$: texts = $isPolish
		? {
				engineering: engineering.pl,
				management: management.pl,
				design: design.pl
		  }
		: {
				engineering: engineering.en,
				management: management.en,
				design: design.en
		  };
</script>

<section class="flex flex-col gap-8 px-8 lg:px-0">
	<h2 class="text-3xl hidden">Skillset</h2>

	<section class="lg:grid lg:grid-cols-11 flex flex-col gap-4">
		<div class="lg:col-span-4 flex flex-col gap-8">
			<header class="flex flex-col gap-1">
				<h3 class="text-3xl -ml-0.5">{texts.engineering.title}</h3>
				<div class="text-neutral-400">{texts.engineering.subtitle}</div>
			</header>

			<div class="flex flex-col gap-4">
				<p>{@html texts.engineering.about}</p>
			</div>

			<section class="text-xs grid grid-cols-2 md:grid-cols-4 gap-y-8 lg:gap-y-0">
				{#each texts.engineering.lists as list}
					<div class="flex flex-col gap-2 text-gray-700">
						{#each list.major as item}
							<div>
								<Item>{item}</Item>
							</div>
						{/each}
						{#each list.minor as item}
							<div class="text-gray-400">
								<Item>{item}</Item>
							</div>
						{/each}
						{#each list.patch as item}
							<div class="text-gray-400">
								<Item>{item}</Item>
							</div>
						{/each}
					</div>
				{/each}
			</section>
		</div>

		<div class="lg:col-span-1" />

		<div class="lg:col-span-3 flex flex-col gap-8">
			<header class="flex flex-col gap-1">
				<h3 class="text-3xl -ml-0.5">{texts.management.title}</h3>
				<div class="text-neutral-400">{texts.management.subtitle}</div>
			</header>

			<div class="flex flex-col gap-4">
				{#each texts.management.paragraphs as paragraph}
					<p>{@html paragraph}</p>
				{/each}
			</div>
		</div>

		<div class="lg:col-span-1" />

		<div class="lg:col-span-2 flex flex-col gap-8">
			<header class="flex flex-col gap-1">
				<h3 class="text-3xl -ml-0.5">{texts.design.title}</h3>
				<div class="text-neutral-400">{texts.design.subtitle}</div>
			</header>

			<div class="flex flex-col gap-4">
				{#each texts.design.paragraphs as paragraph}
					<p>{@html paragraph}</p>
				{/each}
			</div>
		</div>
	</section>
</section>
