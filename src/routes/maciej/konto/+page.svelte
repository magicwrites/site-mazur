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
	<title>Maciej Mazur - konto do wpłat</title>
</svelte:head>

<section class="flex h-screen font-work p-4">
	<section class="m-auto">
		<div class="pb-2 text-gray-400">Środki w EURO</div>
		<div class="text-4xl -ml-0.5">PL 85 1050 1618 1000 0097 0465 6108</div>

		<div class="pb-2 pt-20 text-gray-400">Środki w PLN</div>
		<div class="text-4xl -ml-0.5">47 1050 1618 1000 0023 2118 9355</div>
	</section>
</section>
