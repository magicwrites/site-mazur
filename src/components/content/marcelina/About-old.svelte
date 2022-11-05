<script>
	import Language from '$components/shared/Language.svelte';
	import Title from '$components/shared/Title.svelte';
	import Description from './about/Description.svelte';
	import Contact from './about/Contact.svelte';
	import avatar from '$assets/marcelina-avatar.png';
	import marcelina from '$assets/marcelina-chair.jpg';
	import Framer from '$components/shared/Framer.svelte';
	// import { en, pl } from './index.content';
	// import { isPolish } from './../../stores/language';

	// $: texts = $isPolish ? pl : en;
</script>

<div
	class="relative xl:h-screen print:h-screen flex flex-col sm:px-16 xl:py-4 lg:px-24 md:mx-auto xl:max-w-none 2xl:px-48"
>
	<Framer>
		<div class="sm-marcelina absolute">
			<img src={marcelina} class="h-full" alt="marcelina" />
		</div>
	</Framer>

	<header class="flex p-4 print:hidden">
		<div class="ml-auto">
			<Language />
		</div>
	</header>

	<section class="flex flex-col flex-grow">
		<header class="px-4 py-16 mb-6 sm:py-8 md:py-20 md:pt-12 xl:py-4 2xl:py-16 flex flex-col">
			<div class="mx-auto xl:ml-0">
				<Title subtitle="Software developer"
					>Marcelina <a class="hidden md:inline print:inline" href="/">Mazur</a></Title
				>
			</div>
		</header>

		<main class="px-4 xl:w-1/2">
			<Description />
		</main>

		<footer class="mt-auto p-4 pt-24 xl:pt-4 xl:pb-48 xl:mt-20 2xl:mt-auto">
			<Contact />
		</footer>
	</section>
</div>

<style>
	@media (min-width: 1280px) {
	}

	@media (min-width: 1333px) {
	}

	@media (min-width: 1920px) {
		.sm-marcelina {
			right: 0;
			bottom: 0;
		}

		.sm-marcelina img {
			height: auto;
			width: 92.5%;
		}
	}
</style>
