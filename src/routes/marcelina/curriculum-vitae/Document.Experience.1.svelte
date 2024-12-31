<script>
  import Item from '$components/Item.svelte';
</script>

<section class="flex flex-col gap-4">
  <div class="grid grid-cols-3 items-start">
    <div class="flex flex-col gap-0.5">
      <Item>
        <div>Marcelina Mazur</div>
        <div>Cyfrowa Księgowa</div>
      </Item>
      <div class="pl-6 text-xs text-gray-400 pt-3">od 2023</div>
      <div class="pl-6 text-xs">
        <div>księgowa, właścicielka</div>
        <div>biura rachunkowego</div>
      </div>
    </div>
    <div class="col-span-2 text-xs flex flex-col gap-0.5">
      <div>obsługa księgowa dla jednoosobowych działalności gospodarczych</div>
      <div>pomoc w zarejestrowaniu firmy</div>
      <div>rozliczenia VAT, PIT</div>
      <div>obsługa ZUS</div>
      <div>kontakt z klientami biura</div>
      <div>sporządzanie ofert biznesowych</div>
    </div>
  </div>

  <div class="grid grid-cols-3 items-start">
    <div class="flex flex-col gap-0.5">
      <Item>Adaptive Vision Sp. z o.o.</Item>
      <div class="pl-6 text-xs text-gray-400 pt-3">2020 - 2021</div>
      <div class="pl-6 text-xs">księgowa</div>
    </div>
    <div class="col-span-2 text-xs flex flex-col gap-0.5">
      <div>udział w sporządzaniu planu kont</div>
      <div>weryfikacja i ewidencja dokumentów w systemie finansowo-księgowym</div>
      <div>ewidencja środków trwałych oraz naliczanie odpisów amortyzacyjnych</div>
      <div>księgowanie rozliczeń międzyokresowych kosztów i przychodów</div>
      <div>rozliczenia podróży służbowych</div>
      <div>uzgadnianie zapisów na kontach</div>
      <div>dokonywanie płatności oraz innych operacji finansowych</div>
      <div>księgowanie wyciągów bankowych</div>
      <div>sporządzanie raportów i zestawień na potrzeby firmy</div>
    </div>
  </div>

  <div class="grid grid-cols-3 items-start gap-y-4">
    <div class="flex flex-col gap-0.5">
      <Item>Future-Processing Sp. z o.o.</Item>
      <div class="pl-6 text-xs text-gray-400 pt-3">2016 - 2020</div>
      <div class="pl-6 text-xs">księgowa</div>
    </div>
    <div class="col-span-2 text-xs flex flex-col gap-0.5">
      <div>nadzorowanie procesu wystawiania faktur sprzedaży</div>
      <div>kontakt z klientami w sprawach finansowych</div>
      <div>kontrola zgodności wystawianych faktur z zawartymi umowami</div>
      <div>weryfikacja i ewidencja dokumentów sprzedaży i zakupu</div>
      <div>księgowanie rozliczeń międzyokresowych</div>
      <div>sporządzanie raportów do GUS (DNU-K, DG-1) i NBP</div>
      <div>udział w rozliczaniu podatku VAT, kontrola rejestrów, deklaracje VAT-UE</div>
      <div>weryfikacja certyfikatów rezydencji podatkowej u kontrahentów</div>
      <div>księgowanie wyciągów bankowych, przelewy oraz kontrola rozliczeń</div>
      <div>
        <span>udział w zamknięciu roku</span>
        <span class="text-gray-400">
          - uzgadnianie zapisów na kontach, przygotowanie potwierdzeń sald kontrahentów, wycena
          bilansowa należności, odpisy aktualizujące należności, analiza rozrachunków
        </span>
      </div>
    </div>

    <div class="flex flex-col gap-0.5">
      <div class="pl-6 text-xs text-gray-400">2015 - 2016</div>
      <div class="pl-6 text-xs">młodsza księgowa</div>
    </div>
    <div class="col-span-2 text-xs flex flex-col gap-0.5">
      <div>porządkowanie i organizacja dokumentacji firmy</div>
      <div>pomoc w księgowaniu faktur zakupu i sprzedaży</div>
      <div>pomoc w księgowaniu wyciągów bankowych</div>
      <div>rozliczanie firmowych kart kredytowych</div>
      <div>kasa: prowadzenie, księgowanie raportów oraz udział w inwentaryzacji</div>
      <div>bieżąca analiza rozrachunków</div>
      <div>rozliczanie podróży służbowych krajowych i zagranicznych</div>
    </div>
  </div>
</section>
