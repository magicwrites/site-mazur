<script>
	import Button from '$components/shared/Button.svelte';
	// import { en, pl } from './index.content';
	// import { isPolish } from './../../stores/language';

	// $: texts = $isPolish ? pl : en;
</script>

<div class="px-4 grid lg:grid-cols-2 gap-4 font-sm">
	<div on:click={() => window.print()}>
		<Button subtitle="For head hunters" icon="fas fa-download">Download Curriculum Vitae</Button>
	</div>
	<a href="https://github.com/magicwrites/site-mazur" target="_blank">
		<Button subtitle="For technical recruiters" icon="fab fa-github">Code of this website</Button>
	</a>
	<a href="https://eleganckiefaktury.pl" target="_blank">
		<Button subtitle="Case study" icon="fas fa-calculator">Invoice handling application</Button>
	</a>
	<a href="https://eleganckiefaktury.pl" target="_blank">
		<Button subtitle="Case study" icon="fas fa-layer-group">Monolith to micro-frontends</Button>
	</a>
</div>
