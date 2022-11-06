<script>
	import Button from '$components/shared/Button.svelte';
	// import { en, pl } from './index.content';
	// import { isPolish } from './../../stores/language';

	// $: texts = $isPolish ? pl : en;
</script>

<section class="p-8 xl:py-0 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-8">
	<Button subtitle="Dla firm i rekruterów" icon="fas fa-download">Pobierz CV</Button>
	<Button subtitle="Dla klientów indywidualnych" icon="fas fa-download">Pobierz cennik usług</Button
	>
	<a href="https://wa.me/48697952558" target="_blank">
		<Button subtitle="Napisz do mnie" icon="fa-brands fa-whatsapp">WhatsApp</Button>
	</a>
	<a href="mailto:marcelina@mazur.site" target="_blank">
		<Button subtitle="Napisz do mnie" icon="fas fa-envelope">Wiadomość E-mail</Button>
	</a>
	<a href="mailto:marcelina@mazur.site" target="_blank" class="md:hidden">
		<Button subtitle="Zadzwoń do mnie" icon="fas fa-phone">+48 697 952 558</Button>
	</a>
</section>
