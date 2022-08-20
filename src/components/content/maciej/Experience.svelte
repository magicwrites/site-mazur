<script>
	import ExperienceOverview from '$components/content/maciej/experience/Overview.svelte';
	import ExperienceTimeline from '$components/content/maciej/experience/Timeline.svelte';
	// import { en, pl } from './index.content';
	// import { isPolish } from './../../stores/language';

	// $: texts = $isPolish ? pl : en;
</script>

<section class="flex flex-col print:h-screen print:pt-4">
	<div class="xl:grid xl:grid-cols-3 gap-x-20">
		<section class="mx-4">
			<div class="text-4xl font-light font-work pb-8" style="margin-left: -1.5px">Experience</div>
			<ExperienceOverview />
		</section>

		<section class="mx-4 col-span-2 mt-24 xl:mt-0 print:mt-8">
			<ExperienceTimeline />
		</section>
	</div>
</section>
