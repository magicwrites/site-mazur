<script>
	import Preface from '$components/shared/Preface.svelte';
	// import { en, pl } from './index.content';
	// import { isPolish } from './../../stores/language';

	// $: texts = $isPolish ? pl : en;
</script>

<section class="flex flex-col gap-8 p-8">
	<Preface
		icon="fas fa-briefcase"
		iconBackground="bg-gray-50"
		subtitle="Może planujesz jej założenie?"
	>
		Prowadzisz firmę?
	</Preface>

	<div class="text-gray-500">
		<div>
			Jesteś programistą, konsultantem albo innego rodzaju specjalistą zainteresowanym większą
			swobodą zawodową?
		</div>
		<div class="pt-8">
			A może rozkręcasz działalność handlową i potrzebujesz uregulować swoją sytuację formalną?
		</div>
	</div>
</section>
