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
				<div>Od dwóch lat pomagam w prowadzeniu jednoosobowych działalności gospodarczych.</div>
				<div class="pt-8">
					Jesteś programistą, konsultantem albo innego rodzaju specjalistą zainteresowanym większą
					swobodą zawodową?
				</div>
				<div class="pt-8">
					A może rozkręcasz działalność handlową i potrzebujesz uregulować swoją sytuację
					księgowo-urzędową?
				</div>
			</div>
		</section>

		<section class="mx-4 mt-24 col-span-2 xl:mt-0 print:mt-8">
			<div class="text-4xl font-light font-work" style="margin-left: -1.5px">
				Oto co mogę dla Ciebie zrobić
			</div>
			<div class="text-lg pt-4 pb-8">Między innymi:</div>

			<section class="text-lg text-gray-500">
				<div class="leading-9 text-center py-8 sm:py-0">
					<Point first={true}>
						<span class="text-gray-800 underline">indywidualne</span>&nbsp;podejście do twoich
						potrzeb księgowych
					</Point>
					<Point>wsparcie przy zakładaniu firmy i wyborze formy opodatkowania</Point>
					<Point>prowadzenie podatkowej księgi przychodów i rozchodów - KPIR</Point>
					<Point>prowadzenie ryczałtu ewidencjonowanego</Point>
					<Point>prowadzenie ewidencji vat i sporządzanie deklaracji</Point>
					<Point>prowadzenie ewidencji IP box i wsparcie przy ubieganiu się o ulgę</Point>
					<Point>pomoc w poprawnym wystawianiu faktur</Point>
					<Point>pomoc w ramach rozpoznawania kosztów uzyskania przychodu</Point>
					<Point>obsługę w zakresie zakładu ubezpieczeń społecznych</Point>
				</div>
				<div class="pt-8">
					<div>
						Oczywiście twoja sytuacja jest niepowtarzalna - warto więc podjąć współpracę z
						doświadczoną księgową. Razem uda nam się uwolnić potencjał drzemiący w twojej firmie.
					</div>
				</div>
			</section>
		</section>
	</div>
</section>
