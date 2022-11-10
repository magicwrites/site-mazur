<script>
	import Preface from '$components/shared/Preface.svelte';
	// import { en, pl } from './index.content';
	// import { isPolish } from './../../stores/language';

	// $: texts = $isPolish ? pl : en;

	let lists = [
		{
			major: ['JS / nodeJS', 'typescript', 'svelte'],
			minor: ['coffescript'],
			patch: ['PHP', 'C# and related', 'java', 'ruby', 'python']
		},
		{
			major: ['react', 'vue', 'web components', 'angular 1.6', 'knockoutJS'],
			minor: ['angular 2+'],
			patch: ['ember', 'backboneJS', '.NET']
		},
		{
			major: [
				'git / NPM / semver',
				'HTTP / websockets',
				'REST',
				'MVC / MVVM',
				'redux / vuex',
				'webpack / parcel'
			],
			minor: ['grunt / bower'],
			patch: []
		},
		{
			major: ['clean coding', 'domain driven design', 'testability', 'CI / CD'],
			minor: ['3rd party integration', 'web operations', 'cloud systems'],
			patch: []
		}
	];
</script>

<section class="p-8 bg-gray-50 xl:p-0 xl:bg-transparent">
	<div class="pb-4 border-b-4 border-gray-400">
		<Preface icon="fas fa-microchip" background="bg-white" subtitle="Five parts software developer"
			>Engineering</Preface
		>
	</div>

	<div class="py-4">
		From the hard skill of programming in a particular language to the high abstrations of
		architecture design. As an author of user interfaces I have found myself learning and applying
		many technologies, practices, concepts and patterns. Recently, the most notable among those are:
	</div>

	<div class="pt-4 font-work">
		<div class="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 2xl:grid-cols-4 gap-4 gap-y-8">
			{#each lists as list}
				<section class="flex flex-col gap-1.5 xl:gap-1 2xl:gap-2 text-gray-700">
					{#each list.major as item}
						<div class="text-sm whitespace-nowrap">
							<i class="fas fa-circle text-xs mr-2" />
							<span>{item}</span>
						</div>
					{/each}
					{#each list.minor as item}
						<div class="text-sm text-gray-400">
							<i class="fas fa-circle text-xs mr-2" />
							<span>{item}</span>
						</div>
					{/each}
					{#each list.patch as item}
						<div class="text-sm text-gray-400">
							<i class="fas fa-circle text-xs mr-2 text-gray-200" />
							<span>{item}</span>
						</div>
					{/each}
				</section>
			{/each}
		</div>
	</div>
</section>
