<script lang="ts">
	import cx from 'classnames';
	import marcelina from '$assets/marcelina-chair.jpg';
	import { isPolish } from '$src/stores/language';
	import { pl, en } from './About.content';

	const years = new Date().getFullYear() - 2013;

	$: texts = $isPolish ? pl : en;
</script>

<section class={cx('2xl:grid 2xl:grid-cols-11')}>
	<div class={cx('2xl:col-span-5', 'flex flex-col gap-16 22xl:gap-32')}>
		<div class="flex flex-col gap-16">
			<header class="flex flex-col gap-2 px-8 2xl:px-0">
				<h1 class="uppercase text-6xl font-dosis -ml-1">
					<span>Marcelina</span>
					<span class="hidden sm:inline">Mazur</span>
				</h1>
				<div class="text-neutral-400">{texts.job}</div>
			</header>

			<main class="hidden 2xl:flex flex-col gap-8">
				{#each texts.paragraphs as paragraph}
					<p>{@html paragraph.replace('{years}', years.toString())}</p>
				{/each}
			</main>
		</div>

		<footer class="hidden 2xl:flex flex-col gap-4">
			{#each texts.links as link}
				<div>
					<div class="text-neutral-400 text-sm">{link.label}</div>
					<div class="font-work flex items-center">
						<span>
							<a
								class="border-b border-transparent hover:border-gray-700 transition"
								href={link.href}
							>
								{link.text}
							</a>
						</span>
						{#if link.aside}
							<span class="text-gray-400 pr-2">&nbsp; -</span>
							<a
								class="flex items-center text-gray-400 border-b border-transparent hover:border-gray-700 hover:text-gray-700 transition"
								href={link.aside.href}
								target="_blank"
							>
								<span class="text-xs">{link.aside.text}</span>
							</a>
							{#if link.aside.icon}
								<i class={`${link.aside.icon} text-gray-400 pl-1.5`} />
							{/if}
						{/if}
					</div>
				</div>
			{/each}
		</footer>
	</div>

	<div class="2xl:col-span-1 hidden 2xl:block" />

	<div class="2xl:col-span-5 2xl:pt-24 pt-8">
		<div
			class={cx(
				'lg:border-[64px] lg:border-neutral-100',
				'lg:m-8 2xl:m-0',
				'overflow-hidden max-w-[100vw]'
			)}
		>
			<img
				src={marcelina}
				alt="marcelina"
				class={cx(
					'max-w-[130vw] w-[130vw] -ml-[15vw]',
					'sm:w-full sm:-ml-0',
					'md:mx-auto md:w-4/5',
					'2xl:w-full'
				)}
			/>
		</div>
	</div>
</section>

<main class="2xl:hidden flex flex-col gap-8 p-8 pb-0">
	{#each texts.paragraphs as paragraph}
		<p>{@html paragraph}</p>
	{/each}
</main>
