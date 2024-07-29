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
          <div class="text-lg -ml-0.25">Terrarystyka</div>
          <div class="text-sm text-gray-400">Rośliny, słoiki, materiały i podobne.</div>
        </header>
        <div class="flex flex-col gap-2">
          <Item>
            <a
              href="https://bioterr.pl/pl/p/BioTweezer-Angled-Peseta-profesjonalna-zakrzywiona/663"
              target="_blank"
              class="underline"
            >
              <span>pęseta zakrzywiona 31cm</span>
            </a>
            <span>41 zł</span>
          </Item>
          <Item>
            <a
              href="https://bioterr.pl/pl/p/BioTweezer-Straight-Peseta-profesjonalna-prosta/662"
              target="_blank"
              class="underline"
            >
              <span>pęseta prosta 31cm</span>
            </a>
            <span>41 zł</span>
          </Item>
          <Item>
            <a
              href="https://allegro.pl/oferta/sloik-na-ogorki-4l-pojemnik-ze-szklana-pokrywka-na-zywnosc-kawe-ciacho-15743859932"
              target="_blank"
              class="underline"
            >
              <span>dwa słoiki 4 litrowe</span>
            </a>
            <span>{36 * 2} zł</span>
          </Item>
          <Item>
            <a
              href="https://allegro.pl/oferta/sloiki-na-zywnosc-2l-na-ogorki-szklany-z-pokrywka-ciacho-zestaw-2-sztuk-15823914497"
              target="_blank"
              class="underline"
            >
              <span>dwa słoiki 2 litrowowe</span>
            </a>
            <span>56 zł</span>
          </Item>
          <Item>
            <a
              href="https://allegro.pl/oferta/sloiki-szklane-na-ogorki-kawe-1l-pojemnik-z-pokrywka-ciacho-zestaw-2-sztuk-15823914439"
              target="_blank"
              class="underline"
            >
              <span>dwa słoiki 1 litrowe</span>
            </a>
            <span>49 zł</span>
          </Item>
          <Item>
            <a
              href="https://allegro.pl/oferta/worm-castings-nawoz-od-dzdzownic-bio-11481862200"
              target="_blank"
              class="underline"
            >
              <span>2 litry nawozu od dżdżownic</span>
            </a>
            <span>14 zł</span>
          </Item>
          <Item>
            <a
              href="https://allegro.pl/oferta/lava-wulkaniczna-hydroponika-czarna-12027129785"
              target="_blank"
              class="underline"
            >
              <span>2 opakowania lawy wulkanicznej czarnej</span>
            </a>
            <span>25 zł</span>
          </Item>
          <Item>
            <a
              href="https://allegro.pl/oferta/worm-castings-nawoz-od-dzdzownic-bio-11481862200"
              target="_blank"
              class="underline"
            >
              <span>2 opakowania lawy wulkaniczej brązowej</span>
            </a>
            <span>20 zł</span>
          </Item>
          <Item>
            <a
              href="https://bioterr.pl/pl/p/Ficus-pumila-Fikus-pnacy-Zywa-Roslina-do-Terrarium/1795"
              target="_blank"
              class="underline"
            >
              <span>sadzonka fikusa do terrarium</span>
            </a>
            <span>25 zł</span>
          </Item>
          <Item>
            <a
              href="https://bioterr.pl/pl/p/Peperomia-hope-hybryda-quadrifolia-x-deppeana-Zywa-Roslina-do-Terrarium/2511"
              target="_blank"
              class="underline"
            >
              <span>sadzonka peperomia do terrarium</span>
            </a>
            <span>40 zł</span>
          </Item>
          <Item>
            <a
              href="https://bioterr.pl/pl/p/Pilea-mollis-Moon-Valley-Zywa-Roslina-do-Terrarium/2514"
              target="_blank"
              class="underline"
            >
              <span>sadzonka pilea mollis do terrarium</span>
            </a>
            <span>25 zł</span>
          </Item>
          <Item>
            <a
              href="https://bioterr.pl/pl/p/Pilea-cadierei-Pilea-cadiera-Zywa-Roslina-do-Terrarium/2513"
              target="_blank"
              class="underline"
            >
              <span>sadzonka pilea cadierei do terrarium</span>
            </a>
            <span>25 zł</span>
          </Item>
        </div>

        <header>
          <div class="text-lg -ml-0.25">Test DNA</div>
          <div class="text-sm text-gray-400">Szczegóły na stronie internetowej.</div>
        </header>
        <div class="flex flex-col gap-2">
          <Item>
            <a href="https://www.myheritage.pl/dna" target="_blank" class="underline">
              <span>https://www.myheritage.pl/dna</span>
            </a>
          </Item>
        </div>

        <!-- <header>
					<div class="text-lg -ml-0.25">Książkę</div>
					<div class="text-sm text-gray-400">
						Kolejność nieprzypadkowa, mile widziane twarde eleganckie oprawy, może być po angielsku
					</div>
				</header>
				<div class="flex flex-col gap-2">
					<Item>
						<a
							href="https://www.amazon.com/Raymond-Feist-Riftwar-Saga/dp/0007513674"
							target="_blank"
							class="underline"
						>
							<span>Saga o wojnie światów (fantasy w oryginale)</span>
						</a>
						<span class="text-gray-400">- Raymond E. Feist</span>
					</Item>
					<Item>
						<a
							href="https://www.amazon.com/Big-Debt-Crises-Ray-Dalio/dp/057856565X"
							target="_blank"
							class="underline"
						>
							<span>Big Dept Crises</span>
						</a>
						<span class="text-gray-400">- Ray Dalio</span>
					</Item>
					<Item>
						<a
							href="https://www.amazon.com/Broken-Money-Financial-System-Failing/dp/B0CG83QBJ6"
							target="_blank"
							class="underline"
						>
							<span>Broken Money</span>
						</a>
						<span class="text-gray-400">- Lyn Alden</span>
					</Item>
					<Item>
						<a href="https://inwestomat.eu/ksiazka/" target="_blank" class="underline">
							<span>Inwestowanie dla każdego</span>
						</a>
						<span class="text-gray-400">- Mateusz Samołyk</span>
					</Item>
					<Item>
						<span class="text-gray-400">Jakiś zbiór historii po angielsku od H. P. Lovecraft</span>
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
				</div> -->

        <!-- <header>
					<div class="text-lg -ml-0.25">Edukacja</div>
					<div class="text-sm text-gray-400">Zabawki do nauki.</div>
				</header>
				<div class="flex flex-col gap-2">
					<Item>
						<a
							href="https://sklep.avt.pl/pl/products/zestaw-3-kitow-diy-do-nauki-lutowania-avt-edubox4-189374.html"
							target="_blank"
							class="underline"
						>
							<span>zestaw do nauki lutowania</span>
						</a>
						<span class="text-gray-400">VT EDUBOX4</span>
					</Item>
				</div> -->
      </main>
    </section>
  </div>
</section>
