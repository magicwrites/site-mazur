<script>
	import Language from '$components/shared/Language.svelte';
	// import { en, pl } from './index.content';
	// import { isPolish } from './../../stores/language';

	// $: texts = $isPolish ? pl : en;
</script>

<section class="w-full flex justify-between">
	<div class="flex gap-4 xl:hidden">
		<a href="mailto:maciej@mazur.site" target="_blank">
			<div class="rounded-full bg-gray-50 w-10 h-10 flex items-center justify-center">
				<i class="fas fa-envelope" />
			</div>
		</a>

		<a href="https://www.linkedin.com/in/maciek-mazur-b922953a/" target="_blank">
			<div class="rounded-full bg-gray-50 w-10 h-10 flex items-center justify-center">
				<i class="fab fa-linkedin-in" />
			</div>
		</a>
	</div>

	<div class="ml-auto">
		<Language />
	</div>
</section>
