<script>
	import cx from 'classnames';
	import { en, pl } from './Skillset.Engineer.texts';
	import { isPolish } from '$src/stores/language';
	import { all } from '$lib/skills';

	const skills = [
		{
			name: all.HTML,
			bold: true
		},
		{
			name: all.CSS,
			bold: true
		},
		{
			name: all.JS,
			bold: true
		},
		{
			name: all.TS,
			bold: true
		},
		{
			name: all.NODE,
			bold: true
		},
		{
			name: all.SVELTE,
			bold: true
		},
		{
			name: all.COFFEESCRIPT,
			bold: false
		},
		{
			name: all.PHP,
			bold: false
		},
		{
			name: all.CSHARP,
			bold: false
		},
		{
			name: all.JAVA,
			bold: false
		},
		{
			name: all.RUBY,
			bold: false
		},
		{
			name: all.PYTHON,
			bold: false
		},
		{
			name: all.TAILWINDCSS,
			bold: true
		},
		{
			name: all.STORYBOOK,
			bold: true
		},
		{
			name: all.REACT,
			bold: true
		},
		{
			name: all.VUE,
			bold: true
		},
		{
			name: all.ANGULAR,
			bold: true
		},
		{
			name: all.KNOCKOUT,
			bold: true
		},
		{
			name: all.ANGULAR2,
			bold: false
		},
		{
			name: all.EMBER,
			bold: false
		},
		{
			name: all.BACKBONE,
			bold: false
		},
		{
			name: all.DOTNET,
			bold: false
		},
		{
			name: all.GIT,
			bold: true
		},
		{
			name: all.SEMVER,
			bold: true
		},
		{
			name: all.HTTP,
			bold: true
		},
		{
			name: all.REST,
			bold: true
		},
		{
			name: all.MVC,
			bold: true
		},
		{
			name: all.MVVM,
			bold: true
		},
		{
			name: all.SSR,
			bold: true
		},
		{
			name: all.MICRO_FRONTENDS,
			bold: true
		},
		{
			name: all.REDUX,
			bold: true
		},
		{
			name: all.VUEX,
			bold: true
		},
		{
			name: all.VITE,
			bold: true
		},
		{
			name: all.WEBPACK,
			bold: false
		},
		{
			name: all.GRUNT,
			bold: false
		},
		{
			name: all.GULP,
			bold: false
		},
		{
			name: all.BOWER,
			bold: false
		},
		{
			name: all.CLEAN_CODING,
			bold: true
		},
		{
			name: all.DOMAIN_DESIGN,
			bold: true
		},
		{
			name: all.TESTABILITY,
			bold: true
		},
		{
			name: all.CI_CD,
			bold: true
		},
		{
			name: all.ACCESSABILITY,
			bold: true
		},
		{
			name: all.INTEGRATIONS,
			bold: false
		},
		{
			name: all.CLOUD_SYSTEMS,
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
		{/each}<a href="/curriculum-vitae-maciej.pdf" target="_blank" class="whitespace-nowrap"
			>... {texts.more}</a
		>
	</section>
</section>
