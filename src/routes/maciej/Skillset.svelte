<script>
	import Engineer from './Skillset.Engineer.svelte';
	import Leader from './Skillset.Leader.svelte';
	import Designer from './Skillset.Designer.svelte';
</script>

<section class="flex flex-col xl:grid xl:grid-cols-12 px-8 2xl:px-0 gap-8 xl:gap-0">
	<section class="xl:col-span-4">
		<Engineer />
	</section>

	<div />

	<div class="col-span-3">
		<Leader />
	</div>

	<div />

	<div class="col-span-3">
		<Designer />
	</div>
</section>
