<script>
	import cx from 'classnames';
	import portrait from '$assets/maciej-easy.webp';
	import portraitCut from '$assets/maciej-easy-transparent.webp';
	import { isPolish } from '$src/stores/language';
	import * as about from './About.texts';
	import * as description from './About.Description.texts';
	import Button from '$src/components/shared/buttons/Line.svelte';

	$: texts = $isPolish
		? {
				about: about.pl,
				description: description.pl
		  }
		: {
				about: about.en,
				description: description.en
		  };
</script>

<section class={cx('2xl:grid 2xl:grid-cols-11')}>
	<div class={cx('2xl:col-span-5', 'flex flex-col gap-16 22xl:gap-32')}>
		<div class="flex flex-col gap-16">
			<header class="flex flex-col gap-2 px-8 2xl:px-0">
				<h1 class="uppercase text-6xl font-dosis -ml-0.5">
					<span>Maciej</span>
					<span class="hidden sm:inline">Mazur</span>
				</h1>
				<div>{texts.about.job}</div>
			</header>

			<main class="hidden 2xl:flex flex-col gap-8">
				{#each texts.description.paragraphs as paragraph}
					<p>{@html paragraph}</p>
				{/each}
			</main>
		</div>

		<footer class="hidden 2xl:flex flex-col items-start gap-8">
			{#each texts.about.links as link}
				<a href={link.href} target="_blank">
					<Button reversed>
						<div slot="about">{link.label}</div>
						<div slot="title">{link.text}</div>
					</Button>
				</a>
			{/each}
		</footer>
	</div>

	<div class="2xl:col-span-1 hidden 2xl:block" />

	<div class="2xl:col-span-5 2xl:pt-24 pt-8">
		<div
			class={cx(
				'md:border-[64px] md:border-neutral-100',
				'md:m-8 2xl:m-0',
				'overflow-hidden max-w-[100vw]'
			)}
		>
			<img
				src={portrait}
				alt="maciej"
				class={cx('hidden md:block', 'max-w-[130vw] w-[130vw]', 'sm:w-full sm:-ml-0', '2xl:w-full')}
			/>
			<img
				src={portraitCut}
				alt="maciej"
				class={cx(
					'md:hidden',
					'max-w-[130vw] w-[130vw] -ml-[15vw]',
					'sm:w-full sm:-ml-0',
					'md:w-4/5',
					'2xl:w-full'
				)}
			/>
		</div>
	</div>
</section>

<main class="2xl:hidden flex flex-col gap-8 p-8 pb-0">
	{#each texts.description.paragraphs as paragraph}
		<p>{@html paragraph}</p>
	{/each}
</main>
