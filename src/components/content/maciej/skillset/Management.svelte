<script>
	import Percenter from './../../../shared/Percenter.svelte';
</script>

<div>
	<Percenter value={0.3}>Three parts organizer</Percenter>

	<section class="pt-4 font-work text-gray-400 text-sm print:text-xs">
		<section class="pb-4">
			<div class="uppercase text-gray-700 mt-4 underline print:mt-0">Philosophy</div>
			<div class="print:inline">
				Determination and focus can get you a long way, but to achieve truly great things you need a
				<span class="text-gray-700">shared objective</span> and a
				<span class="text-gray-700">coordinated effort</span>.
			</div>

			<div class="pt-4 print:pt-0 print:inline">
				In my work I apply task
				<span class="text-gray-700">breakdown</span>,
				<span class="text-gray-700">planning</span> and
				<span class="text-gray-700">reviews</span> to ensure progress towards our intended target.
				Remaining
				<span class="text-gray-700">flexible</span> while staying on the way to the end-goal.
			</div>
		</section>

		<section class="pb-4">
			<div class="uppercase text-gray-700 mt-4 underline print:mt-0">Agile</div>
			<div>
				I understand <span class="text-gray-700">scrum</span>,
				<span class="text-gray-700">kanban</span>
				and any <span class="text-gray-700">hybrid approach</span> that you are willing to try.
			</div>
		</section>

		<section class="pb-4">
			<div class="uppercase text-gray-700 mt-4 underline print:mt-0">Teamwork</div>
			<div class="print:inline">
				As a member of a group I arrange my work in relation to others. I follow <span
					class="text-gray-700">critical path</span
				>, share responsibilities, <span class="text-gray-700">take ownership</span> and propose improvements.
			</div>
			<div class="pt-4 print:pt-0 print:inline">
				I can
				<span class="text-gray-700">follow</span> the leadership, but I may also
				<span class="text-gray-700">take the initiative</span>. I deliver in
				<span class="text-gray-700">weekly iterations</span> which rely on transparent, ambitious,
				<span class="text-gray-700">long-term roadmaps</span>.
			</div>
		</section>
	</section>
</div>
