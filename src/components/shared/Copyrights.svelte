<script>
	import { isPolish, isEnglish, toggle } from '../../stores/language';

	const year = new Date().getFullYear();
</script>

<div class="text-gray-300 xl:text-gray-700 text-sm flex items-center font-work">
	<span>{$isPolish ? 'wszystkie prawa zastrzeżone' : 'all rights reserved'}</span>
	<i class="px-2 far fa-copyright" />
	<a class="pr-1" href="/">Mazur</a>
	<span>{year}</span>
</div>
