<script>
	import Item from '$components/shared/Item.svelte';

	const trainings = [
		{
			about: 'podatek VAT od podstaw i podatek VAT dla zaawansowanych',
			giver: 'fundacja rozwoju rachunkowości'
		},
		{
			about: 'podróże służbowe krajowe i zagraniczne po zmianach od marca 2013r.',
			giver: 'eurodirect i fundacja rozwoju rachunkowości'
		},
		{
			about: 'koszty stanowiące i niestanowiące kosztów uzyskania przychodu',
			giver: 'akademia kształcenia kadr'
		},
		{
			about: 'BILANS podatkowe i rachunkowe zamknięcie roku, zmiany w&nbsp;przepisach podatkowych',
			giver: 'centrum promocji i szkolenia SYSTEM s.c.'
		}
	];

	const schools = [
		{
			about:
				'ukończenie kursu dla kandydatów na specjalistę ds. rachunkowości<span class="text-gray-400"> - samodzielnego księgowego</span><br />zdobycie certyfikatu specjalisty ds. rachunkowości',
			giver: 'stowarzyszenie księgowych w polsce',
			at: '2017'
		},
		{
			about: 'ukończenie kursu praktyka księgowa od podstaw do samodzielnego księgowego',
			giver: 'wojewódzki ośrodek szkolenia zawodowego "dzeta"',
			at: '2015'
		},
		{
			about: 'ukończenie kierunku psychologia',
			giver: 'uniwersytet śląski w katowicach',
			at: '2011'
		}
	];

	let texts = { trainings, schools };
</script>

<div class="flex flex-col gap-8">
	<header>
		<div>Edukacja</div>
	</header>

	<section class="flex flex-col gap-2 text-xs">
		{#each texts.schools as school}
			<div class="flex flex-col gap-0.5">
				<div class="flex justify-between">
					<Item>{@html school.giver}</Item>
					<div>{school.at || ''}</div>
				</div>
				<div class="pl-6 text-gray-400">{@html school.about}</div>
			</div>
		{/each}
	</section>

	<header>
		<div>Szkolenia</div>
	</header>

	<section class="flex flex-col gap-2 text-xs">
		{#each texts.trainings as training}
			<div class="flex flex-col gap-0.5">
				<div class="flex justify-between">
					<Item>{@html training.giver}</Item>
					<div>{training.at || ''}</div>
				</div>
				<div class="pl-6 text-gray-400">{@html training.about}</div>
			</div>
		{/each}
	</section>
</div>
