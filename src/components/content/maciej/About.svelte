<script>
	import Language from '$components/shared/Language.svelte';
	import Title from '$components/shared/Title.svelte';
	import Description from './about/Description.svelte';
	import avatar from '$assets/avatar-2.png';
	// import { en, pl } from './index.content';
	// import { isPolish } from './../../stores/language';

	// $: texts = $isPolish ? pl : en;
</script>

<div
	class="sm-maciej sm-business xl:h-screen print:h-screen flex flex-col sm:px-16 xl:py-4 lg:px-24 md:mx-auto xl:max-w-none 2xl:px-48"
>
	<header class="flex p-4 print:hidden">
		<div class="ml-auto">
			<Language />
		</div>
	</header>

	<section class="flex flex-col flex-grow">
		<header class="px-4 py-16 mb-6 sm:py-8 md:py-20 md:pt-12 xl:py-4 2xl:py-16 flex flex-col">
			<img src={avatar} class="xl:hidden mx-auto w-48 mb-20 rounded-full border border-gray-700" />
			<div class="mx-auto xl:ml-0">
				<Title subtitle="Software developer"
					>Maciej <a class="hidden md:inline print:inline" href="/">Mazur</a></Title
				>
			</div>
		</header>

		<main class="px-4 xl:w-1/2">
			<Description />
		</main>

		<footer
			class="mt-auto p-4 pt-24 xl:pt-4 xl:pb-48 font-work grid xl:grid-cols-4 2xl:grid-cols-1 gap-4 xl:mt-20 2xl:mt-auto"
		>
			<div class="hidden print:block">
				<div class="text-sm text-gray-400">Online at:</div>
				<div class="font-work">https://maciej.mazur.site</div>
			</div>
			<div>
				<div class="text-sm text-gray-400">Reach me:</div>
				<div class="font-work">maciej@mazur.site</div>
			</div>
			<div>
				<div class="text-sm text-gray-400">Also sometimes at:</div>
				<div class="font-work">linkedin</div>
			</div>
		</footer>
	</section>
</div>

<style>
	@media (min-width: 1280px) {
		.sm-maciej {
			background-image: url('$assets/maciej.png');
			background-repeat: no-repeat;
			background-position: 110% 100%;
			background-size: 50%;
		}

		.sm-business {
			background-image: url('$assets/maciej-business-contrast.png');
			background-size: 53%;
		}

		.sm-suit {
			background-image: url('$assets/maciej-suit-contrast.png');
			background-size: auto 100%;
		}
	}

	@media (min-width: 1920px) {
		.sm-maciej {
			background-position: right 30%;
		}

		.sm-business {
			background-position: right bottom;
			background-size: 46%;
		}

		.sm-suit {
			background-position: 80% bottom;
			background-size: auto 95%;
		}
	}
</style>
