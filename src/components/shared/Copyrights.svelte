<script>
	import { isPolish } from '../../stores/language';

	const year = new Date().getFullYear();
</script>

<section class="text-xs text-center text-neutral-400">
	<span>{$isPolish ? 'wszelkie prawa zastrzeżone' : 'all rights reserved'}</span>
	<i class="far fa-copyright" />
	<span>{year}</span>
	<a href="/" class="text-neutral-700 border-b border-neutral-700">Mazur</a>
</section>
