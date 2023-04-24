<script>
	import cx from 'classnames';
	import maciej from '$assets/maciej-chair.jpg';
	import { isPolish } from '$src/stores/language';
	import * as about from './About.content';
	import * as description from './about/Description.content';

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

<section class={cx('xl:grid xl:grid-cols-11 xl:px-8 2xl:px-0')}>
	<div class={cx('xl:col-span-5', 'flex flex-col gap-32')}>
		<div class="flex flex-col gap-16">
			<header class="flex flex-col gap-2 px-8 xl:px-0">
				<h1 class="uppercase text-6xl font-dosis -ml-1">
					<span>Maciej</span>
					<span class="hidden sm:inline">Mazur</span>
				</h1>
				<div class="text-neutral-400">{texts.about.job}</div>
			</header>

			<main class="hidden xl:flex flex-col gap-8">
				{#each texts.description.paragraphs as paragraph}
					<p>{@html paragraph}</p>
				{/each}
			</main>
		</div>

		<footer class="hidden xl:flex flex-col gap-4">
			{#each texts.about.links as link}
				<div>
					<div class="text-neutral-400 text-sm">{link.label}</div>
					<a
						href={link.href}
						class="border-b border-transparent hover:border-neutral-700 transition inline-block cursor-pointer"
						target="_blank"
					>
						{link.text}
					</a>
				</div>
			{/each}
		</footer>
	</div>

	<div class="xl:col-span-1 hidden xl:block" />

	<div class="xl:col-span-5 xl:pt-24 pt-8">
		<div
			class={cx(
				'lg:border-[64px] lg:border-neutral-100',
				'lg:m-8 xl:m-0',
				'overflow-hidden max-w-[100vw]',
				'xl:-mr-8 xl:border-r-0 2xl:-mr-0 2xl:border-r-[64px]'
			)}
		>
			<img
				src={maciej}
				alt="maciej"
				class={cx(
					'max-w-[130vw] w-[130vw] -ml-[15vw]',
					'sm:w-full sm:-ml-0',
					'md:mx-auto md:w-4/5',
					'xl:w-[40vw] 2xl:w-full'
				)}
			/>
		</div>
	</div>
</section>

<main class="xl:hidden flex flex-col gap-8 p-8 pb-0">
	{#each texts.description.paragraphs as paragraph}
		<p>{@html paragraph}</p>
	{/each}
</main>
