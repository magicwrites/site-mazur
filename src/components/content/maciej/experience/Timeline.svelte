<script>
	import Employer from '$components/shared/Employer.svelte';

	import { isPolish } from '$src/stores/language';
	import { en, pl } from './Timeline.content';

	$: texts = $isPolish ? pl : en;
</script>

<div>
	<section class="p-8 grid gap-14 xl:gap-10 print:pt-8">
		{#each texts.employeers as employeer}
			<Employer name={employeer.name} from={employeer.from} to={employeer.to}>
				{#each employeer.paragraphs as paragraph}
					<div>
						{@html paragraph}
					</div>
				{/each}
			</Employer>
		{/each}
	</section>
</div>
