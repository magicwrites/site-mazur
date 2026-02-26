<script>
  import cx from 'classnames';
  import Sheet from '$components/Sheet.svelte';

  const YEAR = 2026;

  const services = {
    documents: [
      { iteration: 'miesięcznie', name: 'KPiR bez VAT', to5: 240, to15: 260 },
      { iteration: 'miesięcznie', name: 'KPiR z VAT', to5: 300, to15: 350 },
      { iteration: 'miesięcznie', name: 'Ryczałt bez VAT', to5: 170, to15: 200 },
      { iteration: 'miesięcznie', name: 'Ryczałt z VAT', to5: 230, to15: 250 }
    ],
    others: [
      {
        iteration: 'miesięcznie',
        name: 'Obsługa 1 pracownika',
        note: 'Przy większej liczbie pracowników cena jest ustalana indywidualnie',
        price: 150
      },
      {
        iteration: 'miesięcznie',
        name: 'Obsługa 1 zleceniobiorcy',
        price: 50
      }
    ]
  };

  const header = `Obowiązujący w roku ${YEAR}`;
  const footer =
    'Podane ceny mają charakter orientacyjny.<br />Ostateczne stawki są ustalane z każdym Klientem indywidualnie.';
</script>

<svelte:head>
  <title>Marcelina Mazur - cennik usług</title>
  <meta name="description" content="Cennik usług" />
</svelte:head>

<section class="m-8 my-24 xl:m-24 print:m-0 font-spectral text-black">
  <Sheet {header} {footer}>
    <div class="flex flex-col gap-12">
      <header class="font-inter flex flex-col gap-0.5">
        <h1 class="text-3xl font-bold uppercase -ml-[1px]">Cennik</h1>
        <div>Usługi księgowe</div>
      </header>

      <div class="flex flex-col gap-2 font-inter">
        <header class="grid grid-cols-4 text-right text-xs hidden print:grid md:grid">
          <div />
          <div>do 5 dokumentów:</div>
          <div>do 15 dokumentów:</div>
        </header>

        <main class="grid md:grid-cols-4 print:grid-cols-4 gap-0 print:gap-y-2 md:gap-y-2 gap-x-2">
          {#each services.documents as service}
            <div class="flex items-center gap-2">
              <div class="font-medium print:font-normal md:font-normal">{service.name}</div>
              <div
                class="border-b border-dotted border-neutral-300 flex-grow h-3 hidden print:block md:block"
              />
            </div>
            <div class="flex items-center gap-2">
              <div
                class="border-b border-dotted border-neutral-300 flex-grow h-3 hidden print:block md:block"
              />
              <div class="print:hidden md:hidden">do 5 dokumentów:</div>
              <div>{service.to5} zł</div>
            </div>
            <div class="flex items-center gap-2">
              <div
                class="border-b border-dotted border-neutral-300 flex-grow h-3 hidden print:block md:block"
              />
              <div class="print:hidden md:hidden">do 15 dokumentów:</div>
              <div>{service.to15} zł</div>
            </div>
            <div class="flex items-center gap-2">
              <div
                class="border-b border-dotted border-neutral-300 flex-grow h-3 hidden print:block md:block"
              />
              <div class="text-neutral-300 pb-4 print:pb-0 md:pb-0 ml-auto print:ml-0 md:ml-0">
                {service.iteration}
              </div>
            </div>
          {/each}
        </main>
      </div>

      <aside>
        <div>Dla ilości dokumentów większej niż 15 sztuk cennik jest ustalany indywidualnie.</div>
      </aside>

      <div class="flex flex-col gap-2 font-inter">
        <header class="grid grid-cols-4 text-right text-xs hidden print:grid md:grid">
          <div />
          <div />
          <div>cena:</div>
        </header>

        <main class="grid md:grid-cols-4 print:grid-cols-4 gap-0 print:gap-y-4 md:gap-y-4 gap-x-2">
          {#each services.others as service}
            <div
              class={cx(
                service.price ? 'print:col-span-2 md:col-span-2' : 'print:col-span-4 md:col-span-4'
              )}
            >
              <div>
                <div class="flex items-center gap-2">
                  <div>
                    <span class="font-medium print:font-normal md:font-normal">{service.name}</span>
                    {#if !service.price}
                      <span>jest ustalane indywidualnie</span>
                    {/if}
                  </div>
                  {#if service.price}
                    <div
                      class="border-b border-dotted border-neutral-300 flex-grow h-3 hidden print:block md:block"
                    />
                  {/if}
                </div>
              </div>
              {#if service.note}
                <div class="hidden print:block md:block text-xs pr-16">{service.note}</div>
              {/if}
            </div>
            {#if service.price}
              <div>
                <div class="flex items-center gap-2">
                  <div
                    class="border-b border-dotted border-neutral-300 flex-grow h-3 hidden print:block md:block"
                  />
                  <div>{service.price} zł</div>
                </div>
              </div>
              {#if service.note}
                <div class="print:hidden md:hidden mt-1 text-xs pr-16">{service.note}</div>
              {/if}
              <div>
                <div class="flex items-center gap-2">
                  <div
                    class="border-b border-dotted border-neutral-300 flex-grow h-3 hidden print:block md:block"
                  />
                  <div class="text-neutral-300 pb-4 print:pb-0 md:pb-0 ml-auto print:ml-0 md:ml-0">
                    {service.iteration}
                  </div>
                </div>
              </div>
            {/if}
          {/each}
        </main>
      </div>

      <aside>
        <div>Rozliczenie roczne z działalności jest ustalane indywidualnie.</div>
      </aside>
    </div>
  </Sheet>
</section>
