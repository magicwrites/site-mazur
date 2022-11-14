<script>
	import Unavailable from '$components/shared/Unavailable.svelte';
	import Button from '$components/shared/Button.svelte';

	import { isPolish } from '$src/stores/language';
	import { en, pl } from './Links.content';

	$: texts = $isPolish ? pl : en;
</script>

<div class="p-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 font-sm">
	<a href="/curriculum-vitae-maciej.pdf" target="_blank">
		<Button subtitle={texts.cv.subtitle} icon="fas fa-download">
			{texts.cv.title}
		</Button>
	</a>
	<a href="https://github.com/magicwrites/site-mazur" target="_blank">
		<Button subtitle={texts.code.subtitle} icon="fab fa-github">
			{texts.code.title}
		</Button>
	</a>
	<Unavailable>
		<Button subtitle={texts.invoices.subtitle} icon="fas fa-calculator">
			{texts.invoices.title}
		</Button>
	</Unavailable>
	<Unavailable>
		<Button subtitle={texts.frontends.subtitle} icon="fas fa-layer-group">
			{texts.frontends.title}
		</Button>
	</Unavailable>
</div>
