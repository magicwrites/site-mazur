<script>
	import { isPolish } from './../../stores/language';

	const pl = {
		heading: 'W przygotowaniu',
		details: 'Obecnie brak, zapraszamy wkrótce'
	};

	const en = {
		heading: 'Unavailable',
		details: 'work in progress, please visit soon'
	};

	$: texts = $isPolish ? pl : en;
</script>

<div class="relative rounded overflow-hidden">
	<section class="absolute top-0 left-0 right-0 bottom-0 flex">
		<div class="h-full w-full flex bg-gray-700 transition translate -translate-y-full -mt-1">
			<div class="m-auto text-white select-none font-work">
				<div class="text-base">{texts.heading}</div>
				<div class="text-sm">{texts.details}</div>
			</div>
		</div>
	</section>
	<slot />
</div>

<style>
	section:hover > div {
		transform: translateY(0);
		margin-top: 0;
	}
</style>
