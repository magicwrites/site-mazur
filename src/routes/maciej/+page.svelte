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
	<Experience />
	<Skillset />

	<footer class="xl:bg-gray-50 xl:px-8 2xl:px-44">
		<Links />

		<section class="bg-gray-50 p-8 xl:pt-0 2xl:pt-4 mx-0.5">
			<div class="flex items-center justify-between sm:justify-center gap-4">
				<div class="w-6">
					<Logo />
				</div>
				<Copyrights />
			</div>
		</section>
	</footer>
</section>
