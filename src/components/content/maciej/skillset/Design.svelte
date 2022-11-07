<script>
	import Preface from '$components/shared/Preface.svelte';
	// import { en, pl } from './index.content';
	// import { isPolish } from './../../stores/language';

	// $: texts = $isPolish ? pl : en;
</script>

<section class="p-8 bg-gray-50 xl:p-0 xl:bg-transparent">
	<div class="flex flex-col gap-4">
		<div class="pb-4 border-b-4 border-gray-400">
			<Preface icon="fas fa-compass-drafting" background="bg-white" subtitle="Two parts artist"
				>Design</Preface
			>
		</div>

		<div>At the end of our struggle, there is a product that we build for humans.</div>

		<div>
			I can put my engineering spirit aside and optimise for simplicity of use. I am able to bypass
			the technical pitfals by proposing alternative user flows.
		</div>

		<div>If need be, I can propose simple and effective designs for the project.</div>
	</div>
</section>
