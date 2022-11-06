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
	<About />
	<Offer />
	<Experience />

	<footer class="p-8 pt-4 xl:pt-8 bg-gray-50 mx-0.5">
		<div class="flex items-center justify-between sm:justify-center gap-4">
			<div class="w-6">
				<Logo />
			</div>
			<Copyrights />
		</div>
	</footer>
</section>
