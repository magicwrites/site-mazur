<script>
	import Redirect from '$components/shared/Redirect.svelte';

	import { isPolish } from '$src/stores/language';
	import { en, pl } from './Links.content';

	$: texts = $isPolish ? pl : en;
</script>

<section
	class="sm:grid sm:grid-cols-2 2xl:grid-cols-11 flex flex-col gap-8 2xl:gap-0 px-8 2xl:px-0"
>
	<div class="2xl:col-span-2 flex flex-col xl:flex-row">
		<a href="/curriculum-vitae-maciej.pdf" target="_blank">
			<Redirect icon="fas fa-download">
				<div class="text-neutral-400 text-xs">{texts.cv.subtitle}</div>
				<div>{texts.cv.title}</div>
			</Redirect>
		</a>
	</div>

	<div class="hidden 2xl:block" />

	<div class="2xl:col-span-2">
		<div class="flex flex-col xl:flex-row xl:items-center gap-4">
			<a href="https://github.com/magicwrites/site-mazur" target="_blank">
				<Redirect icon="fab fa-github">
					<div class="text-neutral-400 text-xs">{texts.code.subtitle}</div>
					<div>{texts.code.title}</div>
				</Redirect>
			</a>
		</div>
	</div>

	<div class="hidden 2xl:block" />

	<div class="2xl:col-span-2">
		<div class="flex flex-col xl:flex-row xl:items-center gap-4">
			<Redirect icon="fas fa-calculator" disabled="w przygotowaniu">
				<div class="text-neutral-400 text-xs">{texts.invoices.subtitle}</div>
				<div>{texts.invoices.title}</div>
			</Redirect>
		</div>
	</div>

	<div class="hidden 2xl:block" />

	<div class="2xl:col-span-2">
		<div class="flex flex-col xl:flex-row xl:items-center gap-4">
			<Redirect icon="fas fa-layer-group" disabled="w przygotowaniu">
				<div class="text-neutral-400 text-xs">{texts.frontends.subtitle}</div>
				<div>{texts.frontends.title}</div>
			</Redirect>
		</div>
	</div>
</section>
