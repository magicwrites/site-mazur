<script>
	import Preface from '$components/shared/Preface.svelte';
	// import { en, pl } from './index.content';
	// import { isPolish } from './../../stores/language';

	// $: texts = $isPolish ? pl : en;
</script>

<section class="p-8 xl:p-0">
	<div class="flex flex-col gap-4">
		<div class="pb-4 border-b-4 border-gray-400">
			<Preface icon="fas fa-shuffle" background="bg-gray-50" subtitle="Three parts organizer"
				>Management</Preface
			>
		</div>

		<div>
			Software can be delivered in an orderly and transparent fashion. Over the years I have built
			skills that keep me focused, efficient and organised even in a fast, chaotic environment.
		</div>

		<div>
			As a member of a team I arrange my work in relation to others. I follow the <span
				class="text-gray-700">critical path</span
			>, share responsibilities, <span class="text-gray-700">take ownership</span> and propose improvements.
		</div>

		<div>
			<span class="text-gray-700">I can follow</span> the leadership, but I may also
			<span class="text-gray-700">take the initiative</span>. I deliver in weekly iterations which
			rely on understandable, ambitious and long-term <span class="text-gray-700">roadmaps</span>.
		</div>
	</div>
</section>
