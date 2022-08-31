<script>
	import ExperienceOverview from '$components/content/maciej/experience/Overview.svelte';
	import ExperienceTimeline from '$components/content/maciej/experience/Timeline.svelte';
	import Point from '$components/shared/Point.svelte';
	import Button from '$components/shared/Button.svelte';
	import Logo from '$components/shared/Logo.svelte';
	import Copyrights from '$components/shared/Copyrights.svelte';
	// import { en, pl } from './index.content';
	// import { isPolish } from './../../stores/language';

	// $: texts = $isPolish ? pl : en;
</script>

<section class="flex flex-col print:h-screen print:pt-4">
	<div class="xl:grid xl:grid-cols-3 gap-x-48 font-work">
		<section class="mx-4 col-span-2">
			<div class="text-4xl font-light font-work pb-8" style="margin-left: -1.5px">O mnie</div>

			<section class="flex flex-col gap-y-5">
				<div class="text-gray-500 text-lg font-work relative pl-10 mb-10">
					<aside class="border-l border-4 border-gray-700 rounded absolute top-0 bottom-0 left-0" />
					<div class="flex items-center gap-x-3">Szczęśliwa mama dwójki bobasów.</div>
				</div>

				<div class="text-gray-500 text-lg font-work relative pl-10">
					<aside class="border-l border-4 border-gray-700 rounded absolute top-0 bottom-0 left-0" />
					<div>
						Trzy lata prowadzenia jednoosobowych działalności gospodarczych. Klienci indywidualni,
						IT, handel oraz inne. Praca na własny rachunek.
					</div>
				</div>

				<div class="text-gray-500 text-lg font-work relative pl-10">
					<aside class="border-l border-4 border-gray-700 rounded absolute top-0 bottom-0 left-0" />
					<div>
						Dwa lata zakładania od podstaw i prowadzenia księgowości uniezależniającej się
						spółki-córki Adaptive Vision.
					</div>
				</div>

				<div class="text-gray-500 text-lg font-work relative pl-10">
					<aside class="border-l border-4 border-gray-700 rounded absolute top-0 bottom-0 left-0" />
					<div>
						Pięć lat na stanowisku księgowej w Future Processing. Praca w dedykowanym dziale firmy z
						branży IT zatrudniającej niespełna tysiąc osób. Kontakt z zagranicznymi kontrahentami.
					</div>
				</div>

				<div class="text-gray-500 text-lg font-work relative pl-10">
					<aside class="border-l border-4 border-gray-300 rounded absolute top-0 bottom-0 left-0" />
					<div>
						Rok doświadczenia na recepcji, umiejętność odnajdywania się w niespodziewanych
						sytuacjach.
					</div>
				</div>

				<div class="text-gray-500 text-lg font-work relative pl-10">
					<aside class="border-l border-4 border-gray-300 rounded absolute top-0 bottom-0 left-0" />
					<div>Nauczyciel w szkole podstawowej gdzieśtam daleko nikt nie wie gdzie.</div>
				</div>

				<div class="text-gray-500 text-lg font-work relative pl-10 mt-10">
					<aside class="border-l border-4 border-gray-300 rounded absolute top-0 bottom-0 left-0" />
					<div>Ukończona szkoła wyższa na kierunku psychologia. Dyplom i medale.</div>
				</div>

				<div class="text-gray-500 text-lg font-work relative pl-10">
					<aside class="border-l border-4 border-gray-300 rounded absolute top-0 bottom-0 left-0" />
					<div>Zakończona szkoła organistowska. Praca jako organista kościelny.</div>
				</div>
			</section>
		</section>

		<aside class="flex flex-col h-full justify-between">
			<section class="flex flex-col gap-y-5">
				<Button subtitle="Dla firm i rekruterów" icon="fas fa-download">Pobierz CV</Button>
				<Button subtitle="Dla klientów indywidualnych" icon="fas fa-download">Pobierz ofertę</Button
				>
				<Button subtitle="Napisz do mnie" icon="fa-brands fa-whatsapp">Whatsapp</Button>
				<Button subtitle="Napisz do mnie" icon="fas fa-envelope">Wiadomość E-mail</Button>
			</section>

			<footer class="ml-auto flex items-center">
				<div class="w-7">
					<Logo />
				</div>
				<div class="pl-3">
					<Copyrights />
				</div>
			</footer>
		</aside>
	</div>
</section>
