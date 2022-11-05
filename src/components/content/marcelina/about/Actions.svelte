<script>
	import Language from '$components/shared/Language.svelte';
	// import { en, pl } from './index.content';
	// import { isPolish } from './../../stores/language';

	// $: texts = $isPolish ? pl : en;
</script>

<section class="w-full flex justify-between">
	<div class="flex gap-4">
		<div class="rounded-full bg-gray-100 w-10 h-10 flex items-center justify-center">
			<i class="fab fa-whatsapp" />
		</div>

		<div class="rounded-full bg-gray-100 w-10 h-10 flex items-center justify-center">
			<i class="fas fa-phone" />
		</div>

		<div class="rounded-full bg-gray-100 w-10 h-10 flex items-center justify-center">
			<i class="fas fa-envelope" />
		</div>
	</div>

	<Language />
</section>
