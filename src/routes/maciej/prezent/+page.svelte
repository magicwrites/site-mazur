<script>
	import Item from '$components/shared/Item.svelte';
</script>

<svelte:head>
	<title>Maciej Mazur - CV</title>
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
						Kolejność nieprzypadkowa, mile widziane twarde, ładne i minimalistyczne oprawy
					</div>
				</header>
				<div class="flex flex-col gap-2">
					<Item>
						<span>Big Dept Crises</span>
						<span class="text-gray-400">- Ray Dalio</span>
					</Item>
					<Item>
						<span>Ikigai</span>
						<span class="text-gray-400">- Garcia Hector / Ikigai</span>
						<span class="text-gray-400">- Mogi Ken / inny autor? research</span>
					</Item>
					<Item>
						<span>
							The Rise and Fall of American Growth: The U.S. Standard of Living since the Civil War
						</span>
						<span class="text-gray-400">- Gordon Chang</span>
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
					<Item>
						<span>Montaż</span>
						<span class="text-gray-400">- Vladimir Volkoff</span>
					</Item>
					<Item>
						<span>Iluzja wolnej Białorusi</span>
						<span class="text-gray-400">- Marek Budzisz</span>
					</Item>
					<Item>
						<span>Mała degeneracja</span>
						<span class="text-gray-400">- Stefan Sękowski</span>
					</Item>
					<Item>
						<span>Od foliowych czapeczek do seksualnej recesji</span>
						<span class="text-gray-400">- Jarema Piekutowski</span>
					</Item>
					<Item>
						<span>Inteligentny inwestor XXI wieku</span>
						<span class="text-gray-400">- Cezary Głuch</span>
					</Item>
				</div>
				<header>
					<div class="text-lg -ml-0.25">Cygara</div>
					<div class="text-sm text-gray-400">Kilka niewiążących preferencji</div>
				</header>
				<div class="flex flex-col gap-2">
					<Item>Niedługie ale grube, tzw "churchille"</Item>
					<Item>Nie Kubańskie</Item>
				</div>
			</main>
		</section>
	</div>
</section>
