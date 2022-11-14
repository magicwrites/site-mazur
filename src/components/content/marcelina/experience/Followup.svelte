<script>
	import Button from '$components/shared/Button.svelte';
	import Unavailable from '$components/shared/Unavailable.svelte';

	import { isPolish } from '$src/stores/language';
	import { en, pl } from './Followup.content';

	$: texts = $isPolish ? pl : en;
</script>

<section class="p-8 xl:py-0 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-8">
	<a href="/curriculum-vitae-marcelina.pdf" target="_blank">
		<Button subtitle={texts.cv.subtitle} icon="fas fa-download">{texts.cv.title}</Button>
	</a>
	<Unavailable>
		<Button subtitle={texts.pricing.subtitle} icon="fas fa-download">
			{texts.pricing.title}
		</Button>
	</Unavailable>
	<a href="https://wa.me/48697952558" target="_blank">
		<Button subtitle={texts.whatsapp.subtitle} icon="fa-brands fa-whatsapp">
			{texts.whatsapp.title}
		</Button>
	</a>
	<a href="mailto:marcelina@mazur.site" target="_blank">
		<Button subtitle={texts.email.subtitle} icon="fas fa-envelope">{texts.email.title}</Button>
	</a>
	<a href="tel:+48697952558" class="md:hidden">
		<Button subtitle={texts.phone.subtitle} icon="fas fa-phone">{texts.phone.title}</Button>
	</a>
</section>
