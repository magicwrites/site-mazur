<script>
	import Language from './../../components/shared/Language.svelte';
	import Logo from './../../components/shared/Logo.svelte';
	import Copyrights from './../../components/shared/Copyrights.svelte';
	import Title from './../../components/shared/Title.svelte';
	import ExperienceOverview from './../../components/content/maciej/experience/Overview.svelte';
	import ExperienceTimeline from './../../components/content/maciej/experience/Timeline.svelte';
	import SkillsetDesign from './../../components/content/maciej/skillset/Design.svelte';
	import SkillsetEngineering from './../../components/content/maciej/skillset/Engineering.svelte';
	import SkillsetManagement from './../../components/content/maciej/skillset/Management.svelte';
	import About from './../../components/content/maciej/About.svelte';
	// import { en, pl } from './index.content';
	// import { isPolish } from './../../stores/language';

	// $: texts = $isPolish ? pl : en;
</script>

<svelte:head>
	<title>Maciej Mazur</title>
</svelte:head>

<section>
	<div
		class="sm-maciej sm-business min-h-screen flex flex-col sm:px-16 md:p-4 lg:px-24 md:mx-auto xl:max-w-none 2xl:px-48"
	>
		<header class="flex p-4">
			<div class="ml-auto">
				<Language />
			</div>
		</header>

		<section class="flex flex-col flex-grow">
			<header class="px-4 py-16 mb-6 sm:py-8 md:py-20 md:pt-12 xl:py-4 2xl:py-16 flex flex-col">
				<div class="mx-auto xl:ml-0">
					<Title subtitle="Software developer">Maciej <a href="/">Mazur</a></Title>
				</div>
			</header>

			<main class="px-4 xl:w-1/2">
				<About />
			</main>

			<footer class="mt-auto p-4 pt-24 xl:pt-4 xl:pb-48 font-work">
				<div class="text-sm text-gray-400">Reach me:</div>
				<div class="font-work">maciej@mazur.site</div>
				<div class="text-sm text-gray-400 mt-4">Also sometimes at:</div>
				<div class="font-work">linkedin</div>
			</footer>
		</section>
	</div>

	<div
		style="min-height: 200vh"
		class="flex flex-col sm:px-16 md:p-4 lg:px-24 md:mx-auto xl:max-w-none 2xl:px-48"
	>
		<section class="py-48 mx-4">
			<div class="text-4xl font-light font-work pb-8" style="margin-left: -1.5px">Skillset</div>
			<div class="grid grid-cols-10 gap-10">
				<div class="col-span-5">
					<SkillsetEngineering />
				</div>
				<div class="col-span-3">
					<SkillsetManagement />
				</div>
				<div class="col-span-2">
					<SkillsetDesign />
				</div>
			</div>
		</section>

		<section class="grid grid-cols-3 gap-10 py-24">
			<section class="mx-4">
				<div class="text-4xl font-light font-work pb-8" style="margin-left: -1.5px">Experience</div>
				<ExperienceOverview />
			</section>

			<section class="mx-4 col-span-2">
				<ExperienceTimeline />
			</section>
		</section>

		<footer
			class="flex items-center p-4 pt-32 sm:pt-16 xl:pt-8 mt-auto justify-between xl:justify-start"
		>
			<div class="w-7">
				<Logo />
			</div>
			<div class="pl-3">
				<Copyrights />
			</div>
		</footer>
	</div>
</section>

<style>
	@media (min-width: 1280px) {
		.sm-maciej {
			background-image: url('./../../assets/maciej.png');
			background-repeat: no-repeat;
			background-position: right 30%;
			background-size: 50%;
		}

		.sm-business {
			background-image: url('./../../assets/maciej-business-contrast.png');
			background-size: 46%;
		}
	}

	@media (min-width: 1920px) {
		.sm-maciej {
			background-position: right 30%;
		}

		.sm-business {
			background-position: right bottom;
		}
	}
</style>
