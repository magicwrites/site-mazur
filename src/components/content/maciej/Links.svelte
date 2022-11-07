<script>
	import Unavailable from '$components/shared/Unavailable.svelte';
	import Button from '$components/shared/Button.svelte';
	// import { en, pl } from './index.content';
	// import { isPolish } from './../../stores/language';

	// $: texts = $isPolish ? pl : en;
</script>

<div class="p-8 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 font-sm">
	<Unavailable>
		<Button subtitle="For head hunters" icon="fas fa-download">Download CV</Button>
	</Unavailable>
	<a href="https://github.com/magicwrites/site-mazur" target="_blank">
		<Button subtitle="For technical recruiters" icon="fab fa-github">Code of this website</Button>
	</a>
	<Unavailable>
		<Button subtitle="Case study" icon="fas fa-calculator">Invoice application</Button>
	</Unavailable>
	<Unavailable>
		<Button subtitle="Case study" icon="fas fa-layer-group">Micro frontends setup</Button>
	</Unavailable>
</div>
