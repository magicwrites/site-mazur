<script>
	import Point from '$components/shared/Point.svelte';
	import Preface from '$components/shared/Preface.svelte';
	// import { en, pl } from './index.content';
	// import { isPolish } from './../../stores/language';

	// $: texts = $isPolish ? pl : en;
</script>

<section class="flex flex-col gap-8 p-8">
	<Preface icon="fas fa-list-ol" iconBackground="bg-white" subtitle="Mogę Ci zapewnić:">
		Moja propozycja
	</Preface>

	<section class="text-gray-500">
		<Point first={true}
			><span class="font-semibold text-gray-700">Indywidualne</span> podejście do Twoich potrzeb księgowych</Point
		>
		<Point>Wsparcie przy zakładaniu firmy i wyborze formy opodatkowania</Point>
		<Point>Prowadzenie podatkowej księgi przychodów i rozchodów - KPiR</Point>
		<Point>Prowadzenie ryczałtu ewidencjonowanego</Point>
		<Point>
			<div>Obsługa podatku VAT</div>
			<div class="text-sm">Prowadzenie ewidencji VAT i sporządzanie deklaracji JPK</div>
		</Point>
		<Point>
			<div>Obsługa ZUS</div>
			<div class="text-sm">
				W tym sporządzanie stosownych deklaracji, obliczanie wartości składki zdrowotnej
			</div>
		</Point>
		<Point>
			<div>Wsparcie w rozliczeniu ulgi IP box</div>
			<div class="text-sm">
				Prowadzenie ewidencji kosztów kwalifikowanych, roczne rozliczenie z uwzględnieniem ulgi
			</div>
		</Point>
		<Point>Pomoc w poprawnym wystawianiu faktur</Point>
		<Point>Pomoc w ramach rozpoznawania kosztów uzyskania przychodu</Point>
	</section>
</section>
