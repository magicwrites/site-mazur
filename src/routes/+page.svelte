<script>
	import cx from 'classnames';
	import Language from '$components/shared/Language.svelte';
	import Link from '$components/shared/Link.svelte';

	import { en, pl } from '$components/content/Index.content';
	import { isPolish } from './../stores/language';

	$: texts = $isPolish ? pl : en;
</script>

<svelte:head>
	<title>Mazur</title>
</svelte:head>

<div class="max-w-[480px] mx-auto xl:max-w-full xl:mx-0">
	<div
		class={cx(
			'print:hidden',
			'min-h-screen sm-mazur-bg',
			'font-work text-neutral-700',
			'flex flex-col gap-16 xl:gap-24 xl:gap-32'
		)}
	>
		<section class={cx('xl:grid xl:grid-cols-8')}>
			<div />

			<div class={cx('xl:col-span-6 flex flex-col xl:gap-y-12 2xl:gap-y-24')}>
				<header class="flex flex-col 2xl:gap-8">
					<aside class="p-8 xl:px-0 flex justify-end">
						<Language />
					</aside>

					<h1
						class={cx(
							'uppercase text-6xl font-dosis text-gray-700 -ml-1',
							'pt-16 pb-24 text-center xl:text-left xl:pt-0 xl:pb-0'
						)}
					>
						Mazur
					</h1>
				</header>

				<main
					class="xl:grid xl:grid-cols-3 2xl:grid-cols-4 p-8 xl:p-0 flex flex-col gap-8 xl:gap-0"
				>
					<nav class="flex flex-col gap-4">
						<h2
							class={cx(
								'hidden xl:block',
								'sm:pt-8 text-gray-400 xl:pt-0 xl:col-span-2 xl:order-0 font-varela xl:col-span-3'
							)}
						>
							{texts.headers.about}
						</h2>

						<a href="/marcelina">
							<Link items={texts.marcelina.skills}>{texts.marcelina.name}</Link>
						</a>

						<a href="/maciej">
							<Link items={texts.maciej.skills}>{texts.maciej.name}</Link>
						</a>

						<div class="h-5 xl:h-10" />

						<a href="/helena">
							<Link items={texts.helena.skills}>{texts.helena.name}</Link>
						</a>

						<a href="/mateusz">
							<Link items={texts.mateusz.skills}>{texts.mateusz.name}</Link>
						</a>
					</nav>

					<div class="2xl:col-span-2" />

					<nav class="flex flex-col gap-4">
						<h2
							class={cx(
								'sm:pt-8 text-gray-400 xl:pt-0 xl:col-span-2 xl:order-0 font-varela xl:col-span-3'
							)}
						>
							{texts.headers.services}
						</h2>

						<a href="/maciej">
							<Link items={texts.applications.features}>{texts.applications.name}</Link>
						</a>

						<a href="/marcelina#oferta">
							<Link items={texts.accounting.features}>{texts.accounting.name}</Link>
						</a>

						<div class="h-5 xl:h-10" />

						<a href="https://eleganckiefaktury.pl" target="_blank">
							<Link items={texts.invoices.features}>{texts.invoices.name}</Link>
						</a>
					</nav>
				</main>
			</div>

			<div />
		</section>
	</div>
</div>

<style>
	@media (min-width: 1280px) {
		.sm-mazur-bg {
			background-image: url('./../assets/gliwice.jpg');
			background-repeat: no-repeat;
			background-position: -5vw 25vh;
			background-size: cover;
		}
	}

	@media (min-width: 1700px) {
		.sm-mazur-bg {
			background-position: 0 0;
		}
	}
</style>
