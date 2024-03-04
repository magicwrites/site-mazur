<script>
	import Item from '$components/shared/Item.svelte';
</script>

<svelte:head>
	<title>Maciej Mazur - prezent propozycje</title>
	<meta name="description" content="Maciej Mazur - curriculum vitae" />
</svelte:head>

<section class="m-8 print:m-0 font-work">
	<div class="mx-auto" style="max-width: 800px">
		<section class="p-4 py-8 flex flex-col gap-8">
			<header class="flex flex-col gap-2">
				<div class="uppercase font-dosis text-5xl -ml-0.5">dziękuję</div>
				<div class="text-lg">Chętnie przyjmę</div>
			</header>
			<main class="flex flex-col gap-6">
				<header>
					<div class="text-lg -ml-0.25">Książkę</div>
					<div class="text-sm text-gray-400">
						Kolejność nieprzypadkowa, mile widziane twarde eleganckie oprawy, może być po angielsku
					</div>
				</header>
				<div class="flex flex-col gap-2">
					<Item>
						<a
							href="https://www.amazon.com/Big-Debt-Crises-Ray-Dalio/dp/057856565X"
							target="_blank"
							class="underline"
						>
							<span>Big Dept Crises</span>
							<span class="text-gray-400">- Ray Dalio</span>
						</a>
					</Item>
					<Item>
						<a
							href="https://www.amazon.com/Broken-Money-Financial-System-Failing/dp/B0CG8985FR"
							target="_blank"
							class="underline"
						>
							<span>Broken Money (hardcover - twarda okładka)</span>
							<span class="text-gray-400">- Lyn Alden</span>
						</a>
					</Item>
					<Item>
						<a href="https://inwestomat.eu/ksiazka/" target="_blank" class="underline">
							<span>Inwestowanie dla każdego</span>
							<span class="text-gray-400">- Mateusz Samołyk</span>
						</a>
					</Item>
					<Item>
						<span>Jakiś zbiór historii po angielsku</span>
						<span class="text-gray-400">- H. P. Lovecraft</span>
					</Item>
					<Item>
						<span>Buddenbrookowie</span>
						<span class="text-gray-400">- Thomas Mann</span>
					</Item>
					<Item>
						<span>Reforma liturgii rzymskiej</span>
						<span class="text-gray-400">- Klaus Gamber</span>
					</Item>
					<Item>
						<span>O wojnie</span>
						<span class="text-gray-400">- clausewitz</span>
					</Item>
					<Item>
						<span>Pakiet koneczny - cywilizacje</span>
						<span class="text-gray-400">- Feliks Koneczny</span>
					</Item>
					<Item>
						<span>Samodzielność strategiczna</span>
						<span class="text-gray-400">- Hugh White</span>
					</Item>
					<Item>
						<span>Czarne oceany</span>
						<span class="text-gray-400">- Jacek Dukaj</span>
					</Item>
					<Item>
						<span>Kontra</span>
						<span class="text-gray-400">- Józef Mackiewicz</span>
					</Item>
				</div>
			</main>
		</section>
	</div>
</section>
