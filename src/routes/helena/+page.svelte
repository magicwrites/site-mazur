<script>
	import Language from '$components/shared/Language.svelte';
	import Title from '$components/shared/Title.svelte';
	import Icon from '$components/shared/Icon.svelte';
	import Logo from '$components/shared/Logo.svelte';
	import Copyrights from '$components/shared/Copyrights.svelte';
	import helena from '$assets/helena-chair.jpg';
</script>

<svelte:head>
	<title>Helena Mazur</title>
</svelte:head>

<div>
	<div class="h-screen flex flex-col xl:px-8 xl:pt-4 2xl:px-48">
		<header class="p-8 xl:p-4 z-10 flex justify-between">
			<a href="/" class="xl:opacity-0 xl:pointer-events-none">
				<Icon reactive light name="fas fa-arrow-left" />
			</a>

			<Language />
		</header>

		<main class="flex flex-grow flex-col sm:flex-row md:flex-col justify-between">
			<section>
				<div class="px-8 xl:px-4 xl:p-4 xl:py-16 z-10 relative">
					<Title>
						<span style="margin-left: -2px">Helena</span>
						<a class="hidden md:inline print:inline" href="/">Mazur</a>
					</Title>
				</div>

				<section class="grid xl:grid-cols-2">
					<div class="xl:col-start-2">
						<div class="font-work xl:text-lg text-gray-400">
							<div class="p-2 px-8 xl:p-0 flex flex-col gap-4">
								<div>Pasowany przedszkolak.</div>
								<div>Psoty i poszukiwanie uwagi.</div>
							</div>
						</div>
					</div>
				</section>
			</section>

			<img class="chair select-none" src={helena} alt="helena" />
		</main>
	</div>
</div>

<style>
	@media (min-width: 640px) {
		.chair {
			width: 50vw;
			position: absolute;
			bottom: 0;
			right: 0;
		}
	}

	@media (min-width: 768px) and (min-height: 640px) {
		.chair {
			margin-left: auto;
			margin-right: auto;
			position: static;
			width: 75vw;
		}
	}

	@media (min-width: 1024px) and (min-height: 640px) {
		.chair {
			width: 50vw;
		}
	}

	@media (min-width: 1280px) {
		.chair {
			margin-left: 0;
			margin-right: 0;
			width: 30vw;
			height: auto;
		}
	}

	@media (min-width: 1920px) {
	}
</style>
