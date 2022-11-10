<script>
	import Title from '$components/shared/Title.svelte';
	import Description from './about/Description.svelte';
	import Actions from './about/Actions.svelte';
	import Contact from './about/Contact.svelte';
	import marcelina from '$assets/marcelina-chair.jpg';
	import Framer from '$components/shared/Framer.svelte';

	import { isPolish } from '$src/stores/language';
	import { en, pl } from './About.content';

	$: texts = $isPolish ? pl : en;
</script>

<div class="relative xl:h-screen">
	<div class="xl:mx-8 2xl:mx-44">
		<section class="relative xl:static h-screen xl:h-auto flex flex-col overflow-hidden">
			<header class="p-8 z-10">
				<Actions />
			</header>

			<div class="p-8 pt-0 2xl:pt-12 z-10">
				<Title subtitle={texts.accountant}>
					<span style="margin-left: -2px">Marcelina</span>
					<a class="hidden md:inline print:inline" href="/">Mazur</a>
				</Title>
			</div>

			<Framer>
				<div class="sm-marcelina absolute flex justify-center 2xl:justify-end z-0">
					<img src={marcelina} alt="marcelina" class="select-none" />
				</div>
			</Framer>
		</section>

		<div class="relative z-10 xl:w-1/2">
			<section class="bg-gray-50 xl:bg-transparent">
				<div class="p-8 xl:pr-0 text-gray-500 xl:text-gray-400">
					<Description />
				</div>

				<div class="hidden xl:block">
					<div class="p-8">
						<Contact />
					</div>
				</div>
			</section>
		</div>
	</div>
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

	@media (min-width: 640px) {
		.sm-marcelina {
			right: 0;
			width: auto;
			margin-left: 0;
		}

		.sm-marcelina img {
			height: 100vh;
		}
	}

	@media (min-width: 768px) and (min-height: 640px) {
		.sm-marcelina {
			width: 100vw;
		}

		.sm-marcelina img {
			height: calc(100vh - 220px);
			width: auto;
		}
	}

	@media (min-width: 1280px) {
		.sm-marcelina {
			width: 50vw;
		}
	}

	@media (min-width: 1920px) {
		.sm-marcelina img {
			height: auto;
			width: 610px;
			margin-right: 0px;
		}
	}
</style>
