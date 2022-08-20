<script>
	import SkillsetDesign from '$components/content/maciej/skillset/Design.svelte';
	import SkillsetEngineering from '$components/content/maciej/skillset/Engineering.svelte';
	import SkillsetManagement from '$components/content/maciej/skillset/Management.svelte';
	// import { en, pl } from './index.content';
	// import { isPolish } from './../../stores/language';

	// $: texts = $isPolish ? pl : en;
</script>

<section class="flex flex-col print:h-screen print:pt-4">
	<div class="m-auto px-4">
		<div class="text-4xl font-light font-work pb-8" style="margin-left: -1.5px">Skillset</div>
		<div class="grid xl:grid-cols-10 gap-10 print:gap-5">
			<div class="xl:col-span-5">
				<SkillsetEngineering />
			</div>
			<div class="xl:col-span-3">
				<SkillsetManagement />
			</div>
			<div class="xl:col-span-2">
				<SkillsetDesign />
			</div>
		</div>
	</div>
</section>
