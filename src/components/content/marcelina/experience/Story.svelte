<script>
	import Period from '$components/shared/Period.svelte';
	import Preface from '$components/shared/Preface.svelte';
	// import { en, pl } from './index.content';
	// import { isPolish } from './../../stores/language';

	// $: texts = $isPolish ? pl : en;
</script>

<div class="p-8 flex flex-col gap-8">
	<Preface icon="fas fa-user-graduate" background="bg-gray-50" subtitle="">O mnie</Preface>

	<section class="flex flex-col gap-4 text-gray-500">
		<Period color="gray-500">
			Przez sześć lat pracy w dziale księgowym <a
				href="https://www.future-processing.com/"
				target="_blank"
				class="text-black border-b border-transparent hover:border-black transition"
				>Future Processing</a
			> miałam okazję zdobyć doświadczenie w takich obszarach jak koszty uzyskania przychodu, podatek
			VAT i CIT, rozliczanie podróży służbowych, fakturowanie, raportowanie do GUS, środki trwałe i ich
			amortyzacja, kontakt z klientem zagranicznym, operacje finansowe i kontakt z bankami.
		</Period>
		<Period color="gray-500">
			Od pięciu lat prowadzę jednoosobowe działalności gospodarcze, w których dotykam takich tematów
			jak podatek PIT, VAT, rozliczenia z ZUS, samochody służbowe, leasing, ulga IP Box i inne.
		</Period>
		<Period color="gray-500">
			Przez dwa lata budowałam od podstaw księgowość nowopowstałej spółki <a
				href="https://www.adaptive-vision.com"
				target="_blank"
				class="text-black border-b border-transparent hover:border-black transition"
				>Adaptive Vision</a
			> co nauczyło mnie organizować własną pracę i wzmocniło niezależność.
		</Period>
		<Period color="gray-400">
			Rok doświadczenia na recepcji spowodował, że potrafię odnaleźć się w niespodziewanych
			sytuacjach.
		</Period>
		<Period color="gray-400">
			Kilka miesięcy pracy w szkole podstawowej nauczyło mnie większej cierpliwości.
		</Period>
		<Period color="gray-400">
			Ukończona szkoła wyższa na kierunku psychologia pozwala mi lepiej zrozumieć ludzi.
		</Period>
		<Period color="gray-400">Dzięki ukończeniu szkoły organistowskiej mam przyjemne hobby.</Period>
		<Period color="gray-400" last>
			Prywatnie jestem szczęśliwą Żoną oraz Mamą dwójki “Bobasów” dzięki czemu wszystko co robię ma
			sens.
		</Period>
	</section>
</div>
