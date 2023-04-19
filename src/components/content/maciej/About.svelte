<script>
	import Title from '$components/shared/Title.svelte';
	import Description from './about/Description.svelte';
	import Actions from './about/Actions.svelte';
	import Contact from './about/Contact.svelte';
	import maciej from '$assets/maciej-chair.jpg';

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

			<div class="p-8 pt-0 xl:pb-4 2xl:pb-8 2xl:pt-12 z-10">
				<Title subtitle={texts.job}>
					<span style="margin-left: -2px">Maciej</span>
					<a class="hidden md:inline print:inline" href="/">Mazur</a>
				</Title>
			</div>

			<div class="sm-maciej absolute flex justify-center 2xl:justify-end z-0">
				<img src={maciej} alt="maciej" class="select-none" />
			</div>
		</section>

		<div class="relative z-10 xl:w-1/2">
			<section class="bg-gray-50 xl:bg-transparent">
				<div class="p-8 xl:pr-0 xl:py-4 2xl:py-8 text-gray-500 xl:text-gray-400">
					<Description />
				</div>

				<div class="hidden xl:block">
					<div class="p-8 xl:py-4 2xl:py-8 2xl:pt-16">
						<Contact />
					</div>
				</div>
			</section>
		</div>
	</div>
</div>

<style>
	.sm-maciej {
		bottom: 0;
		width: 200vw;
		margin-left: -50vw;
	}

	.sm-maciej img {
		height: calc(100vh - 220px);
		width: auto;
	}

	@media (min-width: 640px) {
		.sm-maciej {
			right: 0;
			width: auto;
			margin-left: 0;
		}

		.sm-maciej img {
			height: 95vh;
			margin-right: 100px;
		}
	}

	@media (min-width: 768px) and (min-height: 640px) {
		.sm-maciej {
			width: 100vw;
		}

		.sm-maciej img {
			height: calc(100vh - 220px);
			width: auto;
		}
	}

	@media (min-width: 1280px) {
		.sm-maciej {
			width: 50vw;
		}
	}

	@media (min-width: 1920px) {
		.sm-maciej img {
			height: auto;
			width: 680px;
			margin-right: 120px;
		}
	}
</style>
