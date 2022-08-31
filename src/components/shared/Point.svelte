<script>
	export let first = false;
</script>

<div class="flex flex-col sm:flex-row print:flex-row items-center">
	<div class={first ? 'hidden sm:block print:block' : ''}>
		<i
			class="py-8 sm:py-0 print:py-0 sm:mr-8 print:mr-8 text-gray-400 text-sm fas fa-arrow-right rotate-90 sm:rotate-0 print:rotate-0"
		/>
	</div>
	<div><slot /></div>
</div>
