<script>
	export let value = 0;

	const getColor = (x) => {
		if (x > 0.4) {
			return 'bg-gray-700';
		}

		if (x > 0.3) {
			return 'bg-gray-600';
		}

		if (x > 0.2) {
			return 'bg-gray-500';
		}

		if (x > 0.1) {
			return 'bg-gray-300';
		}

		return 'bg-gray-100';
	};

	$: color = getColor(value);
	$: percentage = Math.round(100 * value);
	$: size = Math.round(percentage / 10);
	$: space = Math.round(10 - size);
</script>

<div>
	<header>
		<div class="print:hidden">
			<div class="text-xs font-work pb-1">{percentage} %</div>
			<section>
				<div class="hidden xl:block h-2 rounded {color}" />
				<div class="xl:hidden flex">
					<div class="h-2 rounded {color}" style="min-width: {percentage}%" />
					<div class="h-2 rounded ml-2 flex-grow bg-gray-100" />
				</div>
			</section>
		</div>
		<div class="pt-2 text-lg font-work print:pt-0"><slot /></div>
	</header>
</div>
