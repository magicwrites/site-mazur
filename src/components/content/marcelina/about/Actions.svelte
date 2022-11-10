<script>
	import Language from '$components/shared/Language.svelte';
	import Icon from '$components/shared/Icon.svelte';
</script>

<section class="w-full flex justify-between">
	<div class="flex gap-4 xl:hidden">
		<a href="https://wa.me/48697952558" target="_blank">
			<Icon reactive name="fab fa-whatsapp" />
		</a>

		<a href="tel:+48697952558">
			<Icon reactive name="fas fa-phone" />
		</a>

		<a href="mailto:marcelina@mazur.site" target="_blank">
			<Icon reactive name="fas fa-envelope" />
		</a>
	</div>

	<div class="ml-auto">
		<Language />
	</div>
</section>
