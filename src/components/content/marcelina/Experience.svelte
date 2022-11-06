<script>
	import Story from './experience/Story.svelte';
	import Followup from './experience/Followup.svelte';
	import Preface from '$components/shared/Preface.svelte';
	// import { en, pl } from './index.content';
	// import { isPolish } from './../../stores/language';

	// $: texts = $isPolish ? pl : en;
</script>

<div class="font-work">
	<div class="xl:h-screen xl:mx-8 xl:flex xl:items-center 2xl:mx-44 2xl:text-lg">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="col-span-2">
				<Story />
			</div>

			<section class="bg-gray-50 xl:bg-transparent xl:flex xl:flex-col xl:gap-8 xl:py-8">
				<div class="hidden xl:block opacity-0">
					<Preface>-</Preface>
				</div>

				<Followup />
			</section>
		</div>
	</div>
</div>
