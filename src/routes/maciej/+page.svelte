<script>
	import Logo from '$components/shared/Logo.svelte';
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

<section class="print:hidden xl:text-sm 2xl:text-base">
	<About />
	<Experience />
	<Skillset />

	<footer class="xl:bg-gray-50 xl:px-8 2xl:px-44">
		<Links />

		<section class="p-8 pt-4 mx-0.5">
			<div class="flex items-center justify-between sm:justify-center gap-4">
				<div class="w-6">
					<Logo />
				</div>
				<Copyrights />
			</div>
		</section>
	</footer>
</section>
