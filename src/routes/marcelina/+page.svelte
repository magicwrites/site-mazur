<script>
	import Logo from '$components/shared/Logo.svelte';
	import Copyrights from '$components/shared/Copyrights.svelte';
	import Experience from '$components/content/marcelina/Experience.svelte';
	import Offer from '$components/content/marcelina/Offer.svelte';
	// import Skillset from '$components/content/marcelina/Skillset.svelte';
	import About from '$components/content/marcelina/About.svelte';
	// import Links from '$components/content/marcelina/Links.svelte';
	// import { en, pl } from './index.content';
	// import { isPolish } from './../../stores/language';

	// $: texts = $isPolish ? pl : en;
</script>

<svelte:head>
	<title>Marcelina Mazur</title>
</svelte:head>

<section>
	<section class="pb-6 xl:pb-0 print:pb-0">
		<About />
	</section>

	<section class="sm:px-16 lg:px-24 2xl:px-48 bg-gray-50 print:bg-transparent">
		<div class="py-10 print:py-0 xl:h-screen print:h-auto flex items-center" id="offer">
			<Offer />
		</div>
	</section>

	<section class="sm:px-16 lg:px-24 2xl:px-48">
		<div class="py-10 print:py-0 2xl:min-h-screen print:h-auto flex items-center" id="experience">
			<Experience />
		</div>
	</section>
</section>
