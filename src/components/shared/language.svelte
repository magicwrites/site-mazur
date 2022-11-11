<script>
	import Icon from './Icon.svelte';

	import { isPolish, isEnglish, toggle } from '../../stores/language';

	let highlighted = false;
</script>

<section
	class="flex items-center text-gray-300 cursor-pointer hover:text-black transition"
	on:click={toggle}
	on:focus={() => (highlighted = true)}
	on:mouseover={() => (highlighted = true)}
	on:mouseleave={() => (highlighted = false)}
>
	<div class="font-work xl:block {$isPolish ? 'xl:text-black' : 'hidden'}">PL</div>
	<div class="font-work hidden xl:block text-gray-300 px-2">/</div>
	<div class="font-work xl:block {$isEnglish ? 'xl:text-black' : 'hidden'}">EN</div>
	<div class="pl-3">
		<Icon light active={highlighted} name="text-xl fas fa-earth-europe" />
	</div>
</section>
