<script>
	export let first = false;
</script>

<div class="flex flex-col sm:flex-row print:flex-row items-center sm:items-start">
	<div class="py-2 sm:py-0 print:py-0 sm:mr-8 print:mr-8">
		<div class={first ? 'hidden sm:block print:block' : ''}>
			<div class="sm:hidden">
				<i class="fas fa-asterisk text-xs text-gray-400" />
			</div>
			<div class="hidden sm:block">
				<i class="text-gray-700 text-sm fas fa-arrow-right rotate-90 sm:rotate-0 print:rotate-0" />
			</div>
		</div>
	</div>
	<div><slot /></div>
</div>
