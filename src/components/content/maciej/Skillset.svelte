<script>
	import Preface from '$components/shared/Preface.svelte';
	import Engineering from './skillset/Engineering.svelte';
	import Management from './skillset/Management.svelte';
	import Design from './skillset/Design.svelte';
</script>

<div class="font-work" id="skillset">
	<div class="xl:h-screen xl:mx-8 xl:flex xl:items-center 2xl:mx-44 2xl:text-lg">
		<div class="xl:px-8 grid xl:grid-cols-10 xl:gap-8 2xl:gap-16 w-full text-gray-400">
			<div class="col-span-5">
				<Engineering />
			</div>

			<section class="col-span-3 hidden 2xl:block">
				<Management />
			</section>

			<section class="col-span-2 hidden 2xl:block">
				<Design />
			</section>

			<section class="col-span-5 flex flex-col xl:gap-8 2xl:hidden">
				<Management />

				<Design />
			</section>
		</div>
	</div>
</div>
