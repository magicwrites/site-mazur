<script>
	import ExperienceOverview from '$components/content/maciej/experience/Overview.svelte';
	import ExperienceTimeline from '$components/content/maciej/experience/Timeline.svelte';
	import Point from '$components/shared/Point.svelte';
	// import { en, pl } from './index.content';
	// import { isPolish } from './../../stores/language';

	// $: texts = $isPolish ? pl : en;
</script>

<section class="flex flex-col print:h-screen print:pt-4">
	<div class="xl:grid xl:grid-cols-3 gap-x-20 font-work">
		<section class="mx-4">
			<div class="text-4xl font-light font-work" style="margin-left: -1.5px">Prowadzisz firmę?</div>
			<div class="text-lg pt-4 pb-8">A może dopiero planujesz jej założenie?</div>

			<div class="text-gray-500 text-lg font-work">
				<div>
					Jesteś programistą, konsultantem albo innego rodzaju specjalistą zainteresowanym większą
					swobodą zawodową?
				</div>
				<div class="pt-8">
					A może rozkręcasz działalność handlową i potrzebujesz uregulować swoją sytuację formalną?
				</div>
			</div>
		</section>

		<section class="mx-4 mt-24 col-span-2 xl:mt-0 print:mt-8">
			<div class="text-4xl font-light font-work" style="margin-left: -1.5px">Moja propozycja</div>
			<div class="text-lg pt-4 pb-8">Oto co mogę Ci zapewnić:</div>

			<section class="text-lg text-gray-500">
				<div class="leading-9 sm:py-0">
					<Point first={true}
						><span class="font-semibold text-gray-700">Indywidualne</span> podejście do Twoich potrzeb
						księgowych</Point
					>
					<Point>Wsparcie przy zakładaniu firmy i wyborze formy opodatkowania</Point>
					<Point>Prowadzenie podatkowej księgi przychodów i rozchodów - KPiR</Point>
					<Point>Prowadzenie ryczałtu ewidencjonowanego</Point>
					<Point>
						<div>Obsługa podatku VAT</div>
						<div class="text-sm -mt-1 mb-1">
							Prowadzenie ewidencji VAT i sporządzanie deklaracji JPK
						</div>
					</Point>
					<Point>
						<div>Obsługa ZUS</div>
						<div class="text-sm -mt-1 mb-1">
							W tym sporządzanie stosownych deklaracji, obliczanie wartości składki zdrowotnej
						</div>
					</Point>
					<Point>
						<div>Wsparcie w rozliczeniu ulgi IP box</div>
						<div class="text-sm -mt-1 mb-1">
							Prowadzenie ewidencji kosztów kwalifikowanych, roczne rozliczenie z uwzględnieniem
							ulgi
						</div>
					</Point>
					<Point>Pomoc w poprawnym wystawianiu faktur</Point>
					<Point>Pomoc w ramach rozpoznawania kosztów uzyskania przychodu</Point>
				</div>
			</section>
		</section>
	</div>
</section>
