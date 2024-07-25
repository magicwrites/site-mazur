<script>
	import cx from 'classnames';
	import { en, pl } from './Skillset.Engineer.texts';
	import { isPolish } from '$src/stores/language';

	const skills = [
		{
			name: 'HTML',
			bold: true
		},
		{
			name: 'CSS',
			bold: true
		},
		{
			name: 'javascript',
			bold: true
		},
		{
			name: 'typescript',
			bold: true
		},
		{
			name: 'nodeJS',
			bold: true
		},
		{
			name: 'svelte',
			bold: true
		},
		{
			name: 'coffescript',
			bold: false
		},
		{
			name: 'PHP',
			bold: false
		},
		{
			name: 'C#',
			bold: false
		},
		{
			name: 'java',
			bold: false
		},
		{
			name: 'ruby',
			bold: false
		},
		{
			name: 'python',
			bold: false
		},
		{
			name: 'tailwindcss',
			bold: true
		},
		{
			name: 'storybook',
			bold: true
		},
		{
			name: 'react',
			bold: true
		},
		{
			name: 'vue',
			bold: true
		},
		{
			name: 'angular 1.6',
			bold: true
		},
		{
			name: 'knockoutJS',
			bold: true
		},
		{
			name: 'angular 2',
			bold: false
		},
		{
			name: 'ember',
			bold: false
		},
		{
			name: 'backboneJS',
			bold: false
		},
		{
			name: '.NET',
			bold: false
		},
		{
			name: 'git',
			bold: true
		},
		{
			name: 'semver',
			bold: true
		},
		{
			name: 'HTTP',
			bold: true
		},
		{
			name: 'REST',
			bold: true
		},
		{
			name: 'MVC',
			bold: true
		},
		{
			name: 'MVVM',
			bold: true
		},
		{
			name: 'SSR',
			bold: true
		},
		{
			name: 'micro frontends',
			bold: true
		},
		{
			name: 'redux',
			bold: true
		},
		{
			name: 'vuex',
			bold: true
		},
		{
			name: 'vite',
			bold: true
		},
		{
			name: 'webpack',
			bold: false
		},
		{
			name: 'grunt',
			bold: false
		},
		{
			name: 'gulp',
			bold: false
		},
		{
			name: 'bower',
			bold: false
		},
		{
			name: 'clean coding',
			bold: true
		},
		{
			name: 'domain design',
			bold: true
		},
		{
			name: 'testability',
			bold: true
		},
		{
			name: 'CI/CD',
			bold: true
		},
		{
			name: 'accessibility',
			bold: true
		},
		{
			name: 'integrations',
			bold: false
		},
		{
			name: 'web operations',
			bold: false
		},
		{
			name: 'cloud systems',
			bold: false
		}
	];

	$: texts = $isPolish ? pl : en;
</script>

<section class="flex flex-col gap-8">
	<header class="flex flex-col gap-2">
		<h4 class="text-3xl -ml-0.5">{texts.header}</h4>
		<p>{texts.about}</p>
	</header>

	<section class="text-xs leading-6">
		{#each skills as skill, i}
			<span class={cx({ 'font-semibold text-sm': skill.bold })}>{skill.name}</span
			>{#if i !== skills.length - 1}<span class="text-neutral-400 text-sm select-none"
					>&nbsp;&bull;
				</span>{/if}
		{/each}<span class="whitespace-nowrap">... {texts.more}</span>
	</section>
</section>
