<script>
	import Button from '$components/shared/Button.svelte';
	import Unavailable from '$components/shared/Unavailable.svelte';
	// import { en, pl } from './index.content';
	// import { isPolish } from './../../stores/language';

	// $: texts = $isPolish ? pl : en;
</script>

<section class="p-8 xl:py-0 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-8">
	<Unavailable>
		<Button subtitle="Dla firm i rekruterów" icon="fas fa-download">Pobierz CV</Button>
	</Unavailable>
	<Unavailable>
		<Button subtitle="Dla klientów indywidualnych" icon="fas fa-download">
			Pobierz cennik usług
		</Button>
	</Unavailable>
	<a href="https://wa.me/48697952558" target="_blank">
		<Button subtitle="Napisz do mnie" icon="fa-brands fa-whatsapp">WhatsApp</Button>
	</a>
	<a href="mailto:marcelina@mazur.site" target="_blank">
		<Button subtitle="Napisz do mnie" icon="fas fa-envelope">Wiadomość E-mail</Button>
	</a>
	<a href="tel:+48697952558" class="md:hidden">
		<Button subtitle="Zadzwoń do mnie" icon="fas fa-phone">+48 697 952 558</Button>
	</a>
</section>
