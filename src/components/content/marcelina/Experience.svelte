<script>
	import Story from './experience/Story.svelte';
	import Preface from '$components/shared/Preface.svelte';
	import Button from '$components/shared/Button.svelte';
	// import { en, pl } from './index.content';
	// import { isPolish } from './../../stores/language';

	// $: texts = $isPolish ? pl : en;
</script>

<div class="p-8">
	<div class="font-work text-gray-500">
		<div class="flex flex-col gap-8">
			<Preface icon="fas fa-user-graduate" iconBackground="bg-gray-50" subtitle="">O mnie</Preface>

			<Story />
		</div>
	</div>
</div>

<div class="bg-gray-50">
	<section class="p-8 flex flex-col gap-8">
		<Button subtitle="Dla firm i rekruterów" icon="fas fa-download">Pobierz CV</Button>
		<Button subtitle="Dla klientów indywidualnych" icon="fas fa-download">Pobierz cennik</Button>
		<a href="https://wa.me/48697952558" target="_blank">
			<Button subtitle="Napisz do mnie" icon="fa-brands fa-whatsapp">WhatsApp</Button>
		</a>
		<a href="mailto:marcelina@mazur.site" target="_blank">
			<Button subtitle="Napisz do mnie" icon="fas fa-envelope">Wiadomość E-mail</Button>
		</a>
	</section>
</div>
