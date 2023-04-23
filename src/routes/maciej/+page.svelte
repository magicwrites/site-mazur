<script>
	import Language from '$components/shared/Language.svelte';
	import Copyrights from '$components/shared/Copyrights.svelte';
	import Experience from '$components/content/maciej/Experience.svelte';
	import Skillset from '$components/content/maciej/Skillset.svelte';
	import About from '$components/content/maciej/About.svelte';
	import Links from '$components/content/maciej/Links.svelte';
	import CurriculumVitae from '$components/content/maciej/cv/Page.svelte';

	import { en, pl } from '$components/content/maciej/About.content';
	import { isPolish } from '$src/stores/language';

	$: texts = $isPolish ? pl : en;
</script>

<svelte:head>
	<title>Maciej Mazur</title>
	<meta name="description" content={texts.job} />
</svelte:head>

<section class="hidden print:block font-work">
	<CurriculumVitae />
</section>

<section class="print:hidden font-work text-neutral-700 flex flex-col gap-32">
	<article class="grid grid-cols-8">
		<div />

		<div class="col-span-6 flex flex-col gap-8">
			<aside class="flex justify-end py-8">
				<Language />
			</aside>

			<div>
				<About />
			</div>
		</div>

		<div />
	</article>

	<article class="grid grid-cols-8">
		<div />

		<div class="col-span-6 relative">
			<div class="absolute -top-28" id="experience" />

			<Experience />
		</div>

		<div />
	</article>

	<div class="grid grid-cols-8">
		<div class="col-span-1" />
		<div class="col-span-6 border-t border-neutral-300 border-dashed" />
		<div class="col-span-1" />
	</div>

	<article class="grid grid-cols-8">
		<div />

		<div class="col-span-6 relative">
			<div class="absolute -top-28" id="skillset" />

			<Skillset />
		</div>

		<div />
	</article>

	<div class="grid grid-cols-8">
		<div class="col-span-1" />
		<div class="col-span-6 border-t border-neutral-300 border-dashed" />
		<div class="col-span-1" />
	</div>

	<footer class="grid grid-cols-8">
		<div />

		<div class="col-span-6">
			<Links />
		</div>

		<div />
	</footer>

	<aside class="pb-32">
		<Copyrights />
	</aside>
</section>
