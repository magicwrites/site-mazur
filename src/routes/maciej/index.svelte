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
	<About />

	<section class="sm:px-16 lg:px-24 2xl:px-48">
		<div class="2xl:h-screen-1/10 print:hidden h-20" id="experience" />
		<div class="2xl:h-screen-8/10 print:h-auto flex items-center">
			<Experience />
		</div>

		<div class="2xl:h-screen-1/10 print:hidden h-20" id="skillset" />

		<div class="2xl:h-screen-8/10 print:h-auto flex items-center">
			<Skillset />
		</div>

		<div class="2xl:h-screen-1/10 print:hidden h-20" />
	</section>

	<footer
		class="sm:px-16 lg:px-24 md:mx-auto xl:max-w-none 2xl:px-48 2xl:pb-8 grid 2xl:grid-cols-2 items-end print:hidden"
	>
		<section class="2xl:grid 2xl:order-1">
			<div class="col-start-2 2xl:col-start-1 col-span-3">
				<Links />
			</div>
		</section>

		<div class="p-8 pt-12 2xl:p-0 2xl:pt-0 flex items-center justify-center 2xl:justify-start">
			<div class="w-7">
				<Logo />
			</div>
			<div class="pl-3">
				<Copyrights />
			</div>
		</div>
	</footer>
</section>
