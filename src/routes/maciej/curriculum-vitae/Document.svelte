<script>
	import Header from './Document.Header.svelte';
	import Competence from './Document.Competence.svelte';
	import Experience from './Document.Experience.svelte';
	import More from './Document.More.svelte';
</script>

<section class="font-work">
	<div class="p-8 py-4">
		<Header />
	</div>
	<div class="p-8 py-4">
		<Experience />
	</div>
	<div class="p-8 py-4">
		<Competence />
	</div>
	<div class="p-8 py-4">
		<More />
	</div>
</section>
