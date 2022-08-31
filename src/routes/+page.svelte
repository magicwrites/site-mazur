<script>
	import Language from '$components/shared/Language.svelte';
	import Logo from '$components/shared/Logo.svelte';
	import Copyrights from '$components/shared/Copyrights.svelte';
	import Link from '$components/shared/Link.svelte';
	import Title from '$components/shared/Title.svelte';
	import { en, pl } from '$content/page.content.ts';
	import { isPolish } from './../stores/language';

	$: texts = $isPolish ? pl : en;
</script>

<svelte:head>
	<title>Mazur</title>
</svelte:head>

<div
	class="sm-mazur-bg min-h-screen flex flex-col sm:px-16 md:p-4 lg:px-24 md:mx-auto xl:max-w-none 2xl:px-48"
>
	<header class="flex p-4">
		<div class="ml-auto">
			<Language />
		</div>
	</header>

	<section class="flex flex-col">
		<header class="px-4 py-16 mb-6 sm:py-8 md:py-20 md:pt-12 xl:py-4 2xl:py-16 flex flex-col">
			<div class="mx-auto xl:ml-0">
				<Title>mazur</Title>
			</div>
		</header>

		<div class="xl:my-8 xl:grid xl:grid-cols-3 2xl:grid-cols-4">
			<div
				class="p-4 pb-2 sm:pt-8 text-gray-400 hidden xl:block xl:pt-0 xl:col-span-2 xl:order-0 font-varela 2xl:col-span-3"
			>
				{texts.headers.about}
			</div>

			<main
				class="grid gap-y-1 xl:grid-cols-1 xl:gap-y-1 md:grid-cols-2 md:gap-x-4 md:gap-y-8 xl:order-2 2xl:col-start-1"
			>
				<a href="/marcelina"
					><Link items={texts.marcelina.skills} icon="fa-person-dress">{texts.marcelina.name}</Link
					></a
				>
				<a href="/maciej"
					><Link items={texts.maciej.skills} icon="fa-person">{texts.maciej.name}</Link></a
				>
				<div class="h-5 2xl:h-10 md:hidden xl:block" />
				<Link items={texts.helena.skills} icon="fa-child-reaching">{texts.helena.name}</Link>
				<Link items={texts.mateusz.skills} icon="fa-baby">{texts.mateusz.name}</Link>
			</main>

			<header class="p-4 pt-16 md:pt-14 xl:pt-0 flex items-center xl:order-1 2xl:col-start-4">
				<div class="sm:pt-8 xl:pt-0 font-varela text-gray-400">
					{texts.headers.services}
				</div>
			</header>

			<aside
				class="grid gap-y-1 xl:grid-cols-1 xl:gap-y-1 xl:col-start-3 2xl:col-start-4 xl:mb-auto xl:items-start md:grid-cols-2 md:gap-x-4 md:gap-y-8 xl:order-3 2xl:order-5"
			>
				<a href="/maciej"
					><Link items={texts.applications.features}>{texts.applications.name}</Link></a
				>
				<Link items={texts.accounting.features}>{texts.accounting.name}</Link>
				<div class="h-5 2xl:h-10 md:hidden xl:block" />
				<a href="https://eleganckiefaktury.pl" target="_blank">
					<Link items={texts.invoices.features}>{texts.invoices.name}</Link></a
				>
			</aside>
		</div>
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

<style>
	@media (min-width: 1280px) {
		.sm-mazur-bg {
			background-image: url('./../assets/gliwice.png');
			background-repeat: no-repeat;
			background-position: 0 15vh;
			background-size: cover;
		}
	}

	@media (min-width: 1920px) {
		.sm-mazur-bg {
			background-position: 0 0;
		}
	}
</style>
