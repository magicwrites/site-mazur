<script>
	import Clipboard from 'svelte-clipboard';
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	// import { en, pl } from './index.content';
	// import { isPolish } from './../../stores/language';

	// $: texts = $isPolish ? pl : en;

	let eur = 'PL 85 1050 1618 1000 0097 0465 6108';
	let pln = '47 1050 1618 1000 0023 2118 9355';

	$: copied = null;
</script>

<svelte:head>
	<title>Maciej Mazur - konto do wpłat</title>
</svelte:head>

<section class="flex h-screen font-work">
	<section class="m-auto flex flex-col gap-y-10">
		<div class="fixed top-0 left-0">
			<a class="p-4 mb-20 flex items-center text-gray-400 transition hover:text-gray-700" href="/">
				<i class="fa-solid fa-arrow-left text-gray-700 pr-3" />
				<span class="text-sm font-work">na stronę główną</span>
			</a>
		</div>

		<section>
			<div class="px-4 pb-2 text-gray-400">Środki w EURO</div>
			<div class="px-4 text-4xl -ml-0.5">
				{eur}
			</div>

			<section class="px-4 mt-3 flex justify-end items-center gap-x-4 text-sm">
				{#if copied === 'eur'}
					<div transition:slide class="mr-auto sm:mr-0">
						<span>skopiowano</span>
						<i class="fa-solid fa-check" />
					</div>
				{/if}
				<Clipboard text={eur.replaceAll(' ', '')} let:copy on:copy={() => (copied = 'eur')}>
					<button
						class="border border-gray-400 hover:border-gray-700 rounded text-gray-400 hover:text-gray-700 transition"
						on:click={copy}
					>
						<div class="cursor-pointer p-2 px-4 flex items-center">
							<span>kopiuj do schowka</span>
						</div>
					</button>
				</Clipboard>
			</section>
		</section>

		<section>
			<div class="px-4 pb-2 text-gray-400">Środki w PLN</div>
			<div class="px-4 text-4xl -ml-0.5">{pln}</div>

			<section class="px-4 mt-3 flex justify-end items-center gap-x-4 text-sm">
				{#if copied === 'pln'}
					<div transition:slide class="mr-auto sm:mr-0">
						<span>skopiowano</span>
						<i class="fa-solid fa-check" />
					</div>
				{/if}
				<Clipboard text={pln.replaceAll(' ', '')} let:copy on:copy={() => (copied = 'pln')}>
					<button
						class="border border-gray-400 hover:border-gray-700 rounded text-gray-400 hover:text-gray-700 transition"
						on:click={copy}
					>
						<div class="cursor-pointer p-2 px-4 flex items-center">
							<span class="text-sm">kopiuj do schowka</span>
						</div>
					</button>
				</Clipboard>
			</section>
		</section>
	</section>
</section>
