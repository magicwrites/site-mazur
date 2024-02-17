<script>
	import Clipboard from 'svelte-clipboard';
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	// import { en, pl } from './index.content';
	// import { isPolish } from './../../stores/language';

	// $: texts = $isPolish ? pl : en;

	const accounts = {
		personal: {
			usd: 'PL 67 1050 1618 1000 0098 0347 0914',
			eur: 'PL 85 1050 1618 1000 0097 0465 6108',
			pln: '47 1050 1618 1000 0023 2118 9355'
		},
		company: {
			eur: 'PL 35 1050 1298 1000 0097 8036 1680',
			pln: '52 1050 1298 1000 0090 8214 2861'
		}
	};

	const personal = [
		{
			id: Symbol(),
			title: 'USD',
			number: accounts.personal.usd
		},
		{
			id: Symbol(),
			title: 'EURO',
			number: accounts.personal.eur
		},
		{
			id: Symbol(),
			title: 'PLN',
			number: accounts.personal.pln
		}
	];

	const company = [
		{
			id: Symbol(),
			title: 'EURO',
			number: accounts.company.eur
		},
		{
			id: Symbol(),
			title: 'PLN',
			number: accounts.company.pln
		}
	];

	const entries = [
		{
			title: 'prywatne',
			accounts: personal
		},
		{
			title: 'firmowe',
			accounts: company
		}
	];

	$: copied = null;
</script>

<svelte:head>
	<title>Maciej Mazur - konto do wpłat</title>
</svelte:head>

<section class="flex h-screen font-work">
	<section class="m-auto flex flex-col xl:gap-y-10">
		<div class="xl:fixed top-0 left-0">
			<a
				class="p-4 mb-8 xl:mb-20 flex items-center text-gray-400 transition hover:text-gray-700"
				href="/"
			>
				<i class="fa-solid fa-arrow-left text-gray-700 pr-3" />
				<span class="text-sm font-work">na stronę główną</span>
			</a>
		</div>

		<main class="grid gap-16 px-4 pb-4">
			{#each entries as entry}
				<div class="flex flex-col gap-4">
					<div class="text-2xl">
						<span>Przelewy</span>
						<span class="border-b border-neutral-700">{entry.title}</span>
					</div>

					<div class="flex flex-col gap-12">
						{#each entry.accounts as account}
							<section class="flex flex-col gap-2">
								<header class="text-2xl font-light">
									{account.number}
								</header>

								<footer class="xl:flex justify-between">
									<div class="text-gray-400">{account.title}</div>

									<section class="flex justify-end items-center gap-x-4 text-sm">
										{#if copied === account.id}
											<div transition:slide class="mr-auto sm:mr-0">
												<span>skopiowano</span>
												<i class="fa-solid fa-check" />
											</div>
										{/if}

										<Clipboard
											text={account.number.replaceAll(' ', '')}
											let:copy
											on:copy={() => (copied = account.id)}
										>
											<button
												class="px-2 border border-gray-400 hover:border-gray-700 rounded text-gray-400 hover:text-gray-700 transition"
												on:click={copy}
											>
												<div class="cursor-pointer p-2 flex items-center">
													<span>kopiuj do schowka</span>
												</div>
											</button>
										</Clipboard>
									</section>
								</footer>
							</section>
						{/each}
					</div>
				</div>
			{/each}
		</main>
	</section>
</section>
