<script lang="ts">
	import cx from 'classnames';

	import { en, pl } from './Links.texts';
	import { isPolish } from '$src/stores/language';
	import Europe from '$src/components/content/Europe.svelte';
	import Code from '$src/components/shared/Redirect.svelte?raw';

	$: texts = $isPolish ? pl : en;

	const escapeHtml = (unsafe: string) => {
		return unsafe
			.replaceAll('&', '&amp;')
			.replaceAll('<', '&lt;')
			.replaceAll('>', '&gt;')
			.replaceAll('"', '&quot;')
			.replaceAll("'", '&#039;');
	};

	const code = escapeHtml(Code);
</script>

<section
	class="flex flex-col gap-8 md:grid md:grid-cols-12 xl:gap-0 xl:grid xl:grid-cols-12 px-8 2xl:px-0"
>
	<aside class="md:col-span-12 xl:col-span-4 flex relative">
		<a
			href="/"
			class={cx(
				'w-full h-full block overflow-hidden',
				'transition',
				'bg-neutral-50 hover:bg-neutral-700',
				'hover:text-white',
				'stroke-neutral-200 fill-neutral-200 hover:stroke-neutral-500 hover:fill-neutral-500'
			)}
		>
			<div class="p-8 absolute z-10">
				<div>{texts.us.title}</div>
				<div class="text-xs">{texts.us.about}</div>
			</div>
			<i class="fas fa-arrow-right absolute bottom-8 left-8" />
			<div
				class={cx(
					'h-40 translate-x-16 md:translate-x-24',
					'overflow-hidden',
					'flex justify-center items-center'
				)}
			>
				<Europe
					classes="w-full -mt-24"
					poland="stroke-neutral-300 fill-neutral-300"
					marker="fill-white"
				/>
			</div>
		</a>
	</aside>

	<div class="hidden xl:block" />

	<aside class="md:col-span-6 xl:col-span-3">
		<a
			href="/curriculum-vitae-maciej.pdf"
			target="_blank"
			class={cx(
				'bg-neutral-50 hover:bg-neutral-700 hover:text-white',
				'relative p-8 h-40 transition',
				'flex flex-col justify-between bg-cover',
				'cv-picture'
			)}
		>
			<header class="relative">
				<div>{texts.cv.title}</div>
				<div class="text-xs">{texts.cv.about}</div>
			</header>

			<i class="relative fas fa-arrow-up-right-from-square" />
		</a>
	</aside>

	<div class="hidden xl:block" />

	<aside class="md:col-span-6 xl:col-span-3">
		<a
			href="/"
			target="_blank"
			class={cx(
				'bg-neutral-50 hover:bg-neutral-700 hover:text-white',
				'relative p-8 h-40 transition overflow-hidden',
				'flex flex-col justify-between'
			)}
		>
			<pre class={cx('absolute bottom-0 left-2/3 w-full', 'text-neutral-400 text-[3px]')}>
				{@html code}
			</pre>

			<header class="z-10">
				<div>{texts.code.title}</div>
				<div class="text-xs">{texts.code.about}</div>
			</header>

			<i class="fas fa-arrow-up-right-from-square" />
		</a>
	</aside>
</section>

<style>
	.cv-picture {
		background-image: url('$assets/cv-picture.webp');
	}
</style>
