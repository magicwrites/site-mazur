<script>
	import Language from '$components/shared/Language.svelte';
	import Title from '$components/shared/Title.svelte';
	import Description from './about/Description.svelte';
	import Actions from './about/Actions.svelte';
	import Contact from './about/Contact.svelte';
	import avatar from '$assets/marcelina-avatar.png';
	import marcelina from '$assets/marcelina-chair.jpg';
	import Framer from '$components/shared/Framer.svelte';
	// import { en, pl } from './index.content';
	// import { isPolish } from './../../stores/language';

	// $: texts = $isPolish ? pl : en;
</script>

<div>
	<section class="relative h-screen flex flex-col overflow-hidden">
		<header class="p-8">
			<Actions />
		</header>

		<div class="p-8 pt-0">
			<Title subtitle="Księgowa">
				<span style="margin-left: -2px">Marcelina</span>
				<a class="hidden md:inline print:inline" href="/">Mazur</a>
			</Title>
		</div>

		<Framer>
			<div class="sm-marcelina absolute flex justify-center">
				<img src={marcelina} alt="marcelina" />
			</div>
		</Framer>
	</section>

	<section class="bg-gray-50">
		<div class="p-8 text-gray-500">
			<Description />
		</div>
	</section>
</div>

<style>
	.sm-marcelina {
		bottom: 0;
		width: 200vw;
		margin-left: -50vw;
	}

	.sm-marcelina img {
		height: calc(100vh - 220px);
		width: auto;
	}

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
