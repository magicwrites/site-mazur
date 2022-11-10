<script>
	import { isPolish } from '$src/stores/language';
	import { en, pl } from './Contact.content';

	$: texts = $isPolish ? pl : en;
</script>

<section class="font-work grid gap-4">
	<div class="hidden print:block">
		<div class="text-sm text-gray-400">Online:</div>
		<div class="font-work">https://maciej.mazur.site</div>
	</div>
	<div>
		<div class="text-sm text-gray-400">{texts.email}</div>
		<div class="font-work">
			<a
				class="border-b border-transparent hover:border-gray-700 transition"
				href="mailto:maciej@mazur.site"
				target="_blank">maciej@mazur.site</a
			>
		</div>
	</div>
	<div>
		<div class="text-sm text-gray-400">{texts.linkedin}</div>
		<div class="font-work">
			<a
				class="border-b border-transparent hover:border-gray-700 transition"
				href="https://www.linkedin.com/in/maciek-mazur-b922953a/"
				target="_blank">linkedin</a
			>
		</div>
	</div>
</section>
