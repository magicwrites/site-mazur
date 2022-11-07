<script>
	import Overview from '$components/content/maciej/experience/Overview.svelte';
	import Timeline from '$components/content/maciej/experience/Timeline.svelte';
	// import { en, pl } from './index.content';
	// import { isPolish } from './../../stores/language';

	// $: texts = $isPolish ? pl : en;
</script>

<div class="font-work xl:bg-gray-50" id="experience">
	<div class="xl:h-screen xl:mx-8 xl:flex xl:items-center 2xl:mx-44 2xl:text-lg">
		<div class="grid xl:grid-cols-3 xl:gap-8">
			<Overview />

			<section
				class="border-t border-dashed border-gray-300 xl:col-span-2 xl:border-none xl:bg-transparent"
			>
				<Timeline />
			</section>
		</div>
	</div>
</div>
