<script>
	export let name = 'fas fa-arrow-right';
	export let reactive = false;
	export let active = false;
	export let light = false;

	let text = `text-gray-${light ? 300 : 700}`;
</script>

<div
	class="flex items-center justify-center w-10 h-10 rounded-full transition {active
		? 'bg-gray-700 text-white'
		: `bg-gray-50 ${text}`} {reactive ? 'hover:bg-gray-700 hover:text-white' : ''}"
>
	<i class={name} />
</div>
