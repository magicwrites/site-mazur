<script>
	import Sheet from '$components/shared/Sheet.svelte';
	import Page from '$components/content/maciej/cv/Page.svelte';
</script>

<svelte:head>
	<title>Maciej Mazur - CV</title>
	<meta name="description" content="Maciej Mazur - curriculum vitae" />
</svelte:head>

<section class="m-8 print:m-0 font-work">
	<Sheet>
		<Page />
	</Sheet>
</section>
