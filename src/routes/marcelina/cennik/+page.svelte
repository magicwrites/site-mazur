<script>
	import cx from 'classnames';
	import Sheet from '$components/shared/Sheet.svelte';

	import { en, pl } from '$components/content/maciej/About.content';
	import { isPolish } from '$src/stores/language';

	const services = [
		{ iteration: 'miesięcznie', name: 'KPiR bez VAT', price: 200 },
		{ iteration: 'miesięcznie', name: 'KPiR z VAT', price: 240 },
		{ iteration: 'miesięcznie', name: 'KPiR z VAT + transakcje zagraniczne', price: 260 },
		{ iteration: 'miesięcznie', name: 'ryczałt bez VAT', price: 160 },
		{ iteration: 'miesięcznie', name: 'ryczałt z VAT', price: 210 },
		{ iteration: 'miesięcznie', name: 'ryczałt z VAT + transakcje zagraniczne', price: 220 },
		{ iteration: 'miesięcznie', name: 'obsługa 1 pracownika', price: 50 },
		{ name: 'rozliczenie roczne z działalności' }
	];

	$: texts = $isPolish ? pl : en;
</script>

<svelte:head>
	<title>Marcelina Mazur - cennik usług</title>
	<meta name="description" content="Cennik usług" />
</svelte:head>

<section class="lg:m-8 print:m-0 font-work">
	<Sheet>
		<section class="font-work print-page flex flex-col">
			<main>
				<div class="p-8">
					<header class="flex justify-between">
						<div class="flex flex-col gap-2">
							<div class="text-5xl font-dosis uppercase -ml-1">Cennik</div>
							<div class="text-lg -ml-0.5">Usługi księgowe na rok 2024</div>
						</div>
					</header>
				</div>

				<div class="p-8">
					<div class="flex gap-4">
						<section class="flex-grow flex flex-col gap-4 print:gap-2 lg:gap-2">
							{#each services as service}
								<div
									class="flex flex-col print:flex-row lg:flex-row print:gap-4 lg:gap-4 print:items lg:items-center flex-grow"
								>
									<div>{service.name}:</div>
									<div
										class={cx(
											'hidden print:block lg:block',
											'flex-grow h-3 border-b border-dotted border-neutral-300'
										)}
									/>
									<div class="flex gap-2">
										{#if service.price}
											<span>od {service.price} zł</span>
											{#if service.iteration}
												<span class="print:hidden lg:hidden text-neutral-400"
													>/ {service.iteration}</span
												>
											{/if}
										{:else}
											<span>indywidualnie</span>
										{/if}
									</div>
								</div>
							{/each}
						</section>

						<aside class="hidden print:flex lg:flex flex-col gap-2 text-neutral-300">
							{#each services as service}
								<div class="flex gap-4 items-center flex-grow">
									<div class="flex gap-2">
										{@html service.iteration || '&nbsp;'}
									</div>
								</div>
							{/each}
						</aside>
					</div>
				</div>
			</main>

			<footer class="p-8 text-xs">
				Podane ceny dotyczą działalności do 10 dokumentów i mają charakter orientacyjny. Ostateczna
				wartość usług jest ustalana dla każdego klienta indywidualnie.
			</footer>
		</section>
	</Sheet>
</section>

<style>
	@media print {
		.print-page {
			height: 100vh;
			page-break-after: always;
		}
	}
</style>
