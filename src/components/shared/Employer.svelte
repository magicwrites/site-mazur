<script>
	export let to = null;
	export let from = null;
	export let name = null;
</script>

<div>
	<section class="xl:flex">
		<div
			class="bg-gray-700 rounded-full mt-1.5 mr-8 hidden 2xl:block"
			style="min-width: 20px; height: 20px;"
		/>
		<main>
			<div
				class="xl:float-right print:float-right mb-2 2xl:mb-0 text-right -mt-2 text-4xl font-work font-thin text-gray-300 print:text-gray-200"
			>
				<span>{from}</span>
				{#if to}
					<span>- {to}</span>
				{/if}
			</div>
			<div class="text-2xl font-work pb-4">{name}</div>
			<div class="text-gray-500 font-work">
				<div class="flex flex-col gap-4">
					<slot />
				</div>
			</div>
		</main>
	</section>
</div>
