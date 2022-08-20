<script>
	import Logo from '$components/shared/Logo.svelte';
	import Copyrights from '$components/shared/Copyrights.svelte';
	import Experience from '$components/content/maciej/Experience.svelte';
	import Skillset from '$components/content/maciej/Skillset.svelte';
	import About from '$components/content/maciej/About.svelte';
	import Links from '$components/content/maciej/Links.svelte';
	// import { en, pl } from './index.content';
	// import { isPolish } from './../../stores/language';

	// $: texts = $isPolish ? pl : en;
</script>

<svelte:head>
	<title>Maciej Mazur</title>
</svelte:head>

<section>
	<section class="pb-6 xl:pb-0">
		<About />
	</section>

	<section class="sm:px-16 lg:px-24 2xl:px-48 bg-gray-50 print:bg-transparent">
		<div class="py-10 xl:h-screen print:h-auto flex items-center" id="experience">
			<Experience />
		</div>
	</section>

	<section class="sm:px-16 lg:px-24 2xl:px-48">
		<div class="py-10 2xl:min-h-screen print:h-auto flex items-center" id="skillset">
			<Skillset />
		</div>
	</section>

	<footer
		class="sm:px-16 lg:px-24 md:mx-auto xl:max-w-none 2xl:px-48 2xl:py-8 grid 2xl:grid-cols-2 items-end print:hidden bg-gray-100"
	>
		<section class="py-14 2xl:py-0 2xl:grid 2xl:order-1">
			<div class="col-start-2 2xl:col-start-1 col-span-3">
				<Links />
			</div>
		</section>

		<div
			class="p-8 pt-12 xl:pt-0 2xl:p-0 2xl:pt-0 flex items-center justify-center 2xl:justify-start"
		>
			<div class="w-7">
				<Logo />
			</div>
			<div class="pl-3">
				<Copyrights />
			</div>
		</div>
	</footer>
</section>
