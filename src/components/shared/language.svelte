<script>
	import { isPolish, isEnglish, toggle } from '../../stores/language';
</script>

<section
	class="flex items-center text-gray-300 cursor-pointer hover:text-black transition"
	on:click={toggle}
>
	<div class="font-work xl:block {$isPolish ? 'xl:text-black' : 'hidden'}">PL</div>
	<div class="font-work hidden xl:block text-gray-300 px-2">/</div>
	<div class="font-work xl:block {$isEnglish ? 'xl:text-black' : 'hidden'}">EN</div>
	<div class="w-10 h-10 ml-3 bg-gray-50 rounded-full flex items-center justify-center">
		<i class="text-xl fas fa-earth-europe" />
	</div>
</section>
