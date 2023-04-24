<script>
	import Language from '$components/shared/Language.svelte';
	import Copyrights from '$components/shared/Copyrights.svelte';
	import Experience from '$components/content/maciej/Experience.svelte';
	import Skillset from '$components/content/maciej/Skillset.svelte';
	import About from '$components/content/maciej/About.svelte';
	import Actions from '$components/content/maciej/about/Actions.svelte';
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

<section class="print:hidden font-work text-neutral-700 flex flex-col gap-16 lg:gap-24 xl:gap-32">
	<article class="lg:grid lg:grid-cols-8">
		<div />

		<div class="lg:col-span-6 flex flex-col xl:gap-8">
			<aside class="py-8 px-8 2xl:px-0">
				<Actions />
			</aside>

			<div>
				<About />
			</div>
		</div>

		<div />
	</article>

	<article class="lg:grid lg:grid-cols-8">
		<div />

		<div class="lg:col-span-6 relative">
			<div class="absolute -top-28" id="experience" />

			<Experience />
		</div>

		<div />
	</article>

	<div class="lg:grid lg:grid-cols-8">
		<div class="lg:col-span-1" />
		<div class="lg:col-span-6 border-t border-neutral-300 border-dashed mx-8 xl:mx-0" />
		<div class="lg:col-span-1" />
	</div>

	<article class="lg:grid lg:grid-cols-8">
		<div />

		<div class="lg:col-span-6 relative">
			<div class="absolute -top-28" id="skillset" />

			<Skillset />
		</div>

		<div />
	</article>

	<div class="lg:grid lg:grid-cols-8">
		<div class="lg:col-span-1" />
		<div class="lg:col-span-6 border-t border-neutral-300 border-dashed mx-8 xl:mx-0" />
		<div class="lg:col-span-1" />
	</div>

	<footer class="lg:grid lg:grid-cols-8">
		<div />

		<div class="lg:col-span-6">
			<Links />
		</div>

		<div />
	</footer>

	<aside class="pb-16 lg:pb-32">
		<Copyrights />
	</aside>
</section>
