<script>
	import Preface from '$components/shared/Preface.svelte';

	const started = 2010;
	const years = new Date().getFullYear() - started;
</script>

<div class="p-8 flex flex-col gap-8 text-gray-500">
	<Preface icon="fas fa-laptop-code" background="bg-gray-50">Experience</Preface>

	<div>
		I have spent <span class="text-gray-800">over {years} years</span> working as a software developer.
	</div>
	<div>
		I am acustomed to learning, maintaining, extending and modernizing huge, mature applications as
		well as building fresh products from scratch - individually or as a part of a team.
	</div>
	<div>Reliably.</div>
</div>
