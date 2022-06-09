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
</script>

<div>
	<header>
		<div class="text-xs font-work pb-1">{percentage} %</div>
		<div class="h-2 rounded {color}" />
		<div class="pt-2 text-lg font-work"><slot /></div>
	</header>
</div>
