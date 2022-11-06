<script>
	import Intro from './offer/Intro.svelte';
	import Topics from './offer/Topics.svelte';
	// import { en, pl } from './index.content';
	// import { isPolish } from './../../stores/language';

	// $: texts = $isPolish ? pl : en;
</script>

<div class="font-work xl:bg-gray-50">
	<div class="xl:h-screen xl:mx-8 xl:flex xl:items-center 2xl:mx-44 2xl:text-lg">
		<div class="grid xl:grid-cols-2 xl:gap-8">
			<Intro />

			<section class="bg-gray-50 xl:bg-transparent">
				<Topics />
			</section>
		</div>
	</div>
</div>
