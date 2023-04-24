<script>
	import Redirect from '$components/shared/Redirect.svelte';

	import { isPolish } from '$src/stores/language';
	import { en, pl } from './Links.content';

	$: texts = $isPolish ? pl : en;
</script>

<section class="sm:grid sm:grid-cols-2 lg:grid-cols-11 flex flex-col gap-8 px-8 lg:px-0">
	<div class="lg:col-span-2 flex">
		<a href="/curriculum-vitae-maciej.pdf" target="_blank">
			<Redirect icon="fas fa-download">
				<div class="text-neutral-400 text-xs">For head hunters</div>
				<div>Download CV</div>
			</Redirect>
		</a>
	</div>

	<div class="hidden lg:block" />

	<div class="lg:col-span-2">
		<div class="flex items-center gap-4">
			<a href="https://github.com/magicwrites/site-mazur" target="_blank">
				<Redirect icon="fab fa-github">
					<div class="text-neutral-400 text-xs">For technical recruiters</div>
					<div>Code of this website</div>
				</Redirect>
			</a>
		</div>
	</div>

	<div class="hidden lg:block" />

	<div class="lg:col-span-2">
		<div class="flex items-center gap-4">
			<Redirect icon="fas fa-calculator" disabled="w przygotowaniu">
				<div class="text-neutral-400 text-xs">Case study</div>
				<div>Invoice application</div>
			</Redirect>
		</div>
	</div>

	<div class="hidden lg:block" />

	<div class="lg:col-span-2">
		<div class="flex items-center gap-4">
			<Redirect icon="fas fa-layer-group" disabled="w przygotowaniu">
				<div class="text-neutral-400 text-xs">Case study</div>
				<div>Micro frontends setup</div>
			</Redirect>
		</div>
	</div>
</section>
