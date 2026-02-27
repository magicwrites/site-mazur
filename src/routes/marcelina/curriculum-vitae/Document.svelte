<script lang="ts">
  import cx from 'classnames';
  import Sheet from '$components/Sheet.svelte';
  import Sheets from '$components/Sheets.svelte';
  import Subheader from './Document.Subheader.svelte';

  const header = 'Curriculum Vitae';

  const disclaimerHtml = `<div class="text-xs text-left">{text}<br /></div>`;
  const disclaimerText = `Wyrażam zgodę na przetwarzanie danych osobowych zawartych w moich dokumentach aplikacyjnych na potrzeby przyszłych rekrutacji. Przyjmuję do wiadomości, że zgodę mogę wycofać w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania przed wycofaniem zgody.`;
  const disclaimer = disclaimerHtml.replace('{text}', disclaimerText);

  const getFooter = (page: number) => `${disclaimer}<div>${page} / 3</div>`;
</script>

<Sheets>
  <Sheet {header} footer={getFooter(1)}>
    <div class="flex flex-col gap-12">
      <header class="font-inter flex flex-col gap-0.5">
        <h1 class="text-3xl font-bold uppercase -ml-[0.5px]">Marcelina Mazur</h1>
        <h2 class="">Księgowa</h2>
      </header>

      <section class="flex flex-col gap-3">
        <h3 class="text-xl font-bold font-inter">Doświadczenie</h3>

        <div class="flex flex-col gap-5">
          <article class="grid xl:grid-cols-7 print:grid-cols-7 gap-4">
            <div class="xl:col-span-2 print:col-span-2">
              <Subheader tag="h3" about="Od 2023">Cyfrowa Księgowa</Subheader>
            </div>

            <div class={cx('xl:col-span-5 print:col-span-5', 'flex flex-col gap-3')}>
              <Subheader tag="h4" about="Zakres obowiązków:">
                Właścicielka biura rachunkowego
              </Subheader>

              <div class="text-xs flex flex-col gap-1">
                <div>Obsługa księgowa dla jednoosobowych działalności gospodarczych.</div>
                <div>Pomoc w zarejestrowaniu firmy.</div>
                <div>Rozliczenia VAT, PIT.</div>
                <div>Obsługa ZUS.</div>
                <div>Kontakt z klientami biura.</div>
                <div>Sporządzanie ofert biznesowych.</div>
              </div>
            </div>
          </article>

          <article class="grid xl:grid-cols-7 print:grid-cols-7 gap-4">
            <div class="xl:col-span-2 print:col-span-2">
              <Subheader tag="h4" about="2020 - 2021">Adaptive Vision</Subheader>
            </div>

            <div class={cx('xl:col-span-5 print:col-span-5', 'flex flex-col gap-3')}>
              <Subheader tag="h5" about="Zakres obowiązków:">Księgowa</Subheader>

              <div class="text-xs flex flex-col gap-1">
                <div>Udział w sporządzaniu planu kont.</div>
                <div>Weryfikacja i ewidencja dokumentów w systemie finansowo-księgowym.</div>
                <div>Ewidencja środków trwałych oraz naliczanie odpisów amortyzacyjnych.</div>
                <div>Księgowanie rozliczeń międzyokresowych kosztów i przychodów.</div>
                <div>Rozliczenia podróży służbowych.</div>
                <div>Uzgadnianie zapisów na kontach.</div>
                <div>Dokonywanie płatności oraz innych operacji finansowych.</div>
                <div>księgowanie wyciągów bankowych.</div>
                <div>Sporządzanie raportów i zestawień na potrzeby firmy.</div>
              </div>
            </div>
          </article>

          <article class="grid xl:grid-cols-7 print:grid-cols-7 gap-4">
            <div class="xl:col-span-2 print:col-span-2">
              <Subheader tag="h4" about="2016 - 2020">Future-Processing</Subheader>
            </div>

            <div class={cx('xl:col-span-5 print:col-span-5', 'flex flex-col gap-3')}>
              <Subheader tag="h5" about="Zakres obowiązków:">Księgowa</Subheader>

              <div class="text-xs flex flex-col gap-1">
                <div>Nadzorowanie procesu wystawiania faktur sprzedaży.</div>
                <div>Kontakt z klientami w sprawach finansowych.</div>
                <div>Kontrola zgodności wystawianych faktur z zawartymi umowami.</div>
                <div>Weryfikacja i ewidencja dokumentów w systemie finansowo-księgowym.</div>
                <div>Weryfikacja i ewidencja dokumentów sprzedaży i zakupu.</div>
                <div>Księgowanie rozliczeń międzyokresowych.</div>
                <div>Sporządzanie raportów do GUS (DNU-K, DG-1) i NBP.</div>
                <div>Udział w rozliczaniu podatku VAT, kontrola rejestrów, deklaracje VAT-UE.</div>
                <div>Weryfikacja certyfikatów rezydencji podatkowej u kontrahentów.</div>
                <div>Księgowanie wyciągów bankowych, przelewy oraz kontrola rozliczeń.</div>
                <div>
                  <div>Udział w zamknięciu roku</div>
                  <div class="font-inter text-[9px] leading-3">
                    Uzgadnianie zapisów na kontach, przygotowanie potwierdzeń sald kontrahentów,
                    wycena bilansowa należności, odpisy aktualizujące należności, analiza
                    rozrachunków
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  </Sheet>

  <div class="break-after-page py-16 print:py-0" />

  <Sheet {header} footer={getFooter(2)}>
    <div class="flex flex-col gap-12">
      <div class="flex flex-col gap-5">
        <article class="grid xl:grid-cols-7 print:grid-cols-7 gap-4">
          <div class="xl:col-span-2 print:col-span-2">
            <Subheader tag="h4" about="2015 - 2016">Future-Processing</Subheader>
          </div>

          <div class={cx('xl:col-span-5 print:col-span-5', 'flex flex-col gap-3')}>
            <Subheader tag="h5" about="Zakres obowiązków:">Młodsza Księgowa</Subheader>

            <div class="text-xs flex flex-col gap-1">
              <div>Porządkowanie i organizacja dokumentacji firmy.</div>
              <div>Pomoc w księgowaniu faktur zakupu i sprzedaży.</div>
              <div>Pomoc w księgowaniu wyciągów bankowych.</div>
              <div>Rozliczanie firmowych kart kredytowych.</div>
              <div>Kasa: prowadzenie, księgowanie raportów oraz udział w inwentaryzacji.</div>
              <div>Bieżąca analiza rozrachunków.</div>
              <div>Rozliczanie podróży służbowych krajowych i zagranicznych.</div>
            </div>
          </div>
        </article>

        <article class="grid xl:grid-cols-7 print:grid-cols-7 gap-4">
          <div class="xl:col-span-2 print:col-span-2">
            <Subheader tag="h4" about="2013 - 2015"
              ><span class="select-none">&nbsp;</span></Subheader
            >
          </div>

          <div class={cx('xl:col-span-5 print:col-span-5', 'flex flex-col gap-3')}>
            <Subheader tag="h5" about="Zakres obowiązków:">Asystentka ds. rachunkowości</Subheader>

            <div class="text-xs flex flex-col gap-1">
              <div>Organizacja i rozliczanie podróży służbowych krajowych i zagranicznych.</div>
              <div>Prowadzenie kas firmy.</div>
              <div>Księgowanie faktur zakupu.</div>
              <div>Prowadzenie ewidencji środków trwałych.</div>
              <div>Przygotowywanie danych do GUS.</div>
            </div>
          </div>
        </article>

        <article class="grid xl:grid-cols-7 print:grid-cols-7 gap-4">
          <div class="xl:col-span-2 print:col-span-2">
            <Subheader tag="h4" about="2012 - 2013"
              ><span class="select-none">&nbsp;</span></Subheader
            >
          </div>

          <div class={cx('xl:col-span-5 print:col-span-5', 'flex flex-col gap-3')}>
            <Subheader tag="h5" about="Zakres obowiązków:">Recepcjonistka</Subheader>

            <div class="text-xs flex flex-col gap-1">
              <div>Obsługa recepcji: przyjmowanie gości, odbieranie telefonów.</div>
              <div>Organizowanie delegacji krajowych i zagranicznych.</div>
              <div>Nadzór nad korespondencja przychodzącą i wychodzącą.</div>
              <div>Współpraca z firmami cateringowymi i kurierskimi.</div>
            </div>
          </div>
        </article>
      </div>

      <section class="flex flex-col gap-3">
        <h3 class="text-xl font-bold font-inter">Edukacja</h3>

        <article class="flex flex-col gap-5">
          <div class="flex flex-col gap-1">
            <Subheader tag="h4" about="2017">Stowarzyszenie Księgowych w Polsce</Subheader>

            <p>
              Ukończenie kursu dla kandydatów na specjalistę ds. rachunkowości - samodzielnego
              księgowego zdobycie certyfikatu specjalisty ds. rachunkowości.
            </p>
          </div>

          <div class="flex flex-col gap-1">
            <Subheader tag="h4" about="2015"
              >Wojewódzki Ośrodek Szkolenia Zawodowego "Dzeta"</Subheader
            >

            <p>Ukończenie kursu praktyka księgowa od podstaw do samodzielnego księgowego.</p>
          </div>

          <div class="flex flex-col gap-1">
            <Subheader tag="h4" about="2011">Uniwersytet Śląski w Katowicach</Subheader>

            <p>Ukończenie kierunku psychologia.</p>
          </div>
        </article>
      </section>
    </div>
  </Sheet>

  <div class="break-after-page py-16 print:py-0" />

  <Sheet {header} footer={getFooter(3)}>
    <div class="flex flex-col gap-12">
      <section class="flex flex-col gap-3">
        <h3 class="text-xl font-bold font-inter">Szkolenia</h3>

        <article class="flex flex-col gap-5">
          <div class="flex flex-col gap-1">
            <Subheader tag="h4">Fundacja Rozwoju Rachunkowości</Subheader>
            <p>Podatek VAT od podstaw i podatek VAT dla zaawansowanych.</p>
          </div>

          <div class="flex flex-col gap-1">
            <Subheader tag="h4">Eurodirect i fundacja rozwoju rachunkowości</Subheader>
            <p>Podróże służbowe krajowe i zagraniczne po zmianach od marca 2013r.</p>
          </div>

          <div class="flex flex-col gap-1">
            <Subheader tag="h4">Akademia Kształcenia Kadr</Subheader>
            <p>Koszty stanowiące i niestanowiące kosztów uzyskania przychodu.</p>
          </div>

          <div class="flex flex-col gap-1">
            <Subheader tag="h4">Centrum Promocji i Szkolenia SYSTEM s.c.</Subheader>
            <p>BILANS podatkowe i rachunkowe zamknięcie roku, zmiany w przepisach podatkowych.</p>
          </div>
        </article>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-xl font-bold font-inter">Osobiste</h3>

        <div class="flex flex-col gap-5">
          <Subheader tag="div" about="Data urodzenia">11 Maja, 1987</Subheader>
          <Subheader tag="div" about="Lokalizacja">Gliwice</Subheader>
          <Subheader tag="div" about="Języki obce">Angielski B2</Subheader>
          <Subheader tag="div" about="Programy księgowe">
            Symfonia finanse i księgowość, Optima, wFirma
          </Subheader>
          <Subheader tag="div" about="Programy inne">Excel</Subheader>
          <Subheader tag="div" about="Stan cywilny">Zamężna, trójka dzieci</Subheader>
          <Subheader tag="div" about="Zainteresowania">
            Squash, Psychologia, Gra na fortepianie, Pływanie
          </Subheader>
        </div>
      </section>
    </div>
  </Sheet>
</Sheets>
