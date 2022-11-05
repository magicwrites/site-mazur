<script>
	import Intro from './offer/Intro.svelte';
	import Topics from './offer/Topics.svelte';
	// import { en, pl } from './index.content';
	// import { isPolish } from './../../stores/language';

	// $: texts = $isPolish ? pl : en;
</script>

<div class="font-work">
	<Intro />

	<section class="bg-gray-50">
		<Topics />
	</section>
</div>
