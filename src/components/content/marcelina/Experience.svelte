<script>
	import ExperienceOverview from '$components/content/maciej/experience/Overview.svelte';
	import ExperienceTimeline from '$components/content/maciej/experience/Timeline.svelte';
	import Point from '$components/shared/Point.svelte';
	import Button from '$components/shared/Button.svelte';
	// import { en, pl } from './index.content';
	// import { isPolish } from './../../stores/language';

	// $: texts = $isPolish ? pl : en;
</script>

<section class="flex flex-col print:h-screen print:pt-4">
	<div class="xl:grid xl:grid-cols-3 gap-x-48 font-work">
		<section class="mx-4 col-span-2">
			<div class="text-4xl font-light font-work pb-8" style="margin-left: -1.5px">O mnie</div>

			<section class="flex flex-col gap-y-5">
				<div class="text-gray-500 text-lg font-work relative pl-6 xl:pl-10">
					<aside class="border-l border-4 border-gray-700 rounded absolute top-0 bottom-0 left-0" />
					<div class="flex items-center gap-x-3">
						Przez sześć lat pracy w dziale księgowym Future Processing miałam okazję zdobyć
						doświadczenie w takich obszarach jak koszty uzyskania przychodu, podatek VAT i CIT,
						rozliczanie podróży służbowych, fakturowanie, raportowanie do GUS, środki trwałe i ich
						amortyzacja, kontakt z klientem zagranicznym, operacje finansowe i kontakt z bankami
					</div>
				</div>

				<div class="text-gray-500 text-lg font-work relative pl-6 xl:pl-10">
					<aside class="border-l border-4 border-gray-700 rounded absolute top-0 bottom-0 left-0" />
					<div>
						Od pięciu lat prowadzę jednoosobowe działalności gospodarcze, w których dotykam takich
						tematów jak podatek PIT, VAT, rozliczenia z ZUS, samochody służbowe, leasing, ulga IP
						Box i inne
					</div>
				</div>

				<div class="text-gray-500 text-lg font-work relative pl-6 xl:pl-10 mb-10">
					<aside class="border-l border-4 border-gray-700 rounded absolute top-0 bottom-0 left-0" />
					<div>
						Przez dwa lata budowałam od podstaw księgowość nowopowstałej spółki Adaptive Vision co
						nauczyło mnie organizować własną pracę i wzmocniło niezależność
					</div>
				</div>

				<div class="text-gray-500 text-lg font-work relative pl-6 xl:pl-10">
					<aside class="border-l border-4 border-gray-300 rounded absolute top-0 bottom-0 left-0" />
					<div>
						Rok doświadczenia na recepcji spowodował, że potrafię odnaleźć się w niespodziewanych
						sytuacjach.
					</div>
				</div>

				<div class="text-gray-500 text-lg font-work relative pl-6 xl:pl-10">
					<aside class="border-l border-4 border-gray-300 rounded absolute top-0 bottom-0 left-0" />
					<div>Kilka miesięcy pracy w szkole podstawowej nauczyło mnie większej cierpliwości.</div>
				</div>

				<div class="text-gray-500 text-lg font-work relative pl-6 xl:pl-10">
					<aside class="border-l border-4 border-gray-300 rounded absolute top-0 bottom-0 left-0" />
					<div>
						Ukończona szkoła wyższa na kierunku psychologia pozwala mi lepiej zrozumieć ludzi
					</div>
				</div>

				<div class="text-gray-500 text-lg font-work relative pl-6 xl:pl-10">
					<aside class="border-l border-4 border-gray-300 rounded absolute top-0 bottom-0 left-0" />
					<div>Dzięki ukończeniu szkoły organistowskiej mam przyjemne hobby</div>
				</div>

				<div class="text-gray-500 text-lg font-work relative pl-6 xl:pl-10">
					<aside class="border-l border-4 border-gray-300 rounded absolute top-0 bottom-0 left-0" />
					<div>
						Prywatnie jestem szczęśliwą Żoną i Mamą dwójki “Bobasów” dzięki czemu wszystko co robię
						ma sens
					</div>
				</div>
			</section>
		</section>

		<aside class="flex flex-col h-full justify-center p-4 xl:p-0 pt-16 xl:pt-0">
			<section class="flex flex-col gap-y-5">
				<Button subtitle="Dla firm i rekruterów" icon="fas fa-download">Pobierz CV</Button>
				<Button subtitle="Dla klientów indywidualnych" icon="fas fa-download"
					>Pobierz szczegółową ofertę</Button
				>
				<a href="https://wa.me/48697952558" target="_blank">
					<Button subtitle="Napisz do mnie" icon="fa-brands fa-whatsapp">WhatsApp</Button>
				</a>
				<a href="mailto:marcelina@mazur.site" target="_blank">
					<Button subtitle="Napisz do mnie" icon="fas fa-envelope">Wiadomość E-mail</Button>
				</a>
			</section>
		</aside>
	</div>
</section>
