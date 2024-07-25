<!-- <script>
	import Copyrights from '$components/shared/Copyrights.svelte';
	import Offer from '$components/content/marcelina/Offer.svelte';
	import Experience from '$components/content/marcelina/Experience.svelte';
	import About from '$components/content/marcelina/About.svelte';
	import Actions from '$components/content/marcelina/about/Actions.svelte';
	import Links from '$components/content/marcelina/Links.svelte';
	import CurriculumVitae from '$components/content/marcelina/cv/Page.svelte';

	import { en, pl } from '$components/content/maciej/About.content';
	import { isPolish } from '$src/stores/language';

	$: texts = $isPolish ? pl : en;
</script>

<svelte:head>
	<title>Marcelina Mazur</title>
	<meta name="description" content={texts.job} />
</svelte:head>

<section class="hidden print:block font-work">
	<CurriculumVitae />
</section>

<section class="print:hidden font-work text-neutral-700 flex flex-col gap-16 xl:gap-24 2xl:gap-32">
	<article class="lg:grid lg:grid-cols-8">
		<div />

		<div class="lg:col-span-6 flex flex-col 2xl:gap-8">
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
			<div class="absolute -top-14 2xl:-top-28" id="offer" />

			<Offer />
		</div>

		<div />
	</article>

	<div class="lg:grid lg:grid-cols-8">
		<div class="lg:col-span-1" />
		<div class="lg:col-span-6 border-t border-neutral-300 border-dashed mx-8 2xl:mx-0" />
		<div class="lg:col-span-1" />
	</div>

	<article class="lg:grid lg:grid-cols-8">
		<div />

		<div class="lg:col-span-6 relative">
			<div class="absolute -top-14 2xl:-top-28" id="skillset" />

			<Experience />
		</div>

		<div />
	</article>

	<div class="lg:grid lg:grid-cols-8">
		<div class="lg:col-span-1" />
		<div class="lg:col-span-6 border-t border-neutral-300 border-dashed mx-8 2xl:mx-0" />
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
</section> -->
