<script lang="ts">
  import cx from 'classnames';
  import { DateTime } from 'luxon';
  import Sheet from '$components/Sheet.svelte';
  import Sheets from '$components/Sheets.svelte';

  export let data;

  const { clients, prices, costs, tax } = data;

  const numberOfDays = DateTime.now().daysInMonth;

  const days = Array.from({ length: numberOfDays }, (_, index) => index + 1).map((day) =>
    DateTime.now().set({ day })
  );

  const weeks = days.reduce((acc, day) => {
    const week = day.weekNumber;

    if (!acc[week]) {
      acc[week] = [];

      for (let i = 1; i < day.weekday; i++) {
        acc[week].push(null);
      }
    }

    acc[week].push({
      day,
      isWeekend: day.weekday === 6 || day.weekday === 7,
      isMajor: day.get('day') <= 20 && day.get('day') >= 10
    });

    return acc;
  }, {});

  const hours = Object.values(weeks).reduce((sum, week) => {
    const weekHours = week.reduce((x, cell) => {
      const increment = cell?.isWeekend ? 0 : cell?.isMajor ? 6 : 4;
      return x + increment;
    }, 0);

    return sum + weekHours;
  }, 0);

  const income =
    clients.small * prices.small + clients.medium * prices.medium + clients.large * prices.large;
  const balance = (income - costs) * tax;
</script>

<svelte:head>
  <title>Marcelina Mazur - Grafik</title>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<Sheets>
  <Sheet>
    <main class="flex flex-col gap-8">
      <header>
        <div class="flex justify-between">
          <div>
            <div>Kwiecień</div>
            <div class="text-xs">
              Godziny: {hours}/156, bloków: {Math.round(hours / 2)}&times;2h
            </div>
          </div>
          <div class="text-right">
            <div>+ {balance} zł netto ({Math.round(balance / hours)} zł/h)</div>
            <div class="text-xs">+ {income} zł</div>
          </div>
        </div>
      </header>
      <section class="grid grid-cols-7 gap-3">
        {#each Object.values(weeks) as week}
          {#each week as cell}
            {#if cell}
              <section class="flex flex-col gap-1">
                <div
                  class={cx(
                    'border border-neutral-700 bg-neutral-700 text-white rounded text-center p-1 text-xs',
                    {
                      'opacity-30': cell.isWeekend
                    }
                  )}
                >
                  <div>{cell.day.setLocale('pl').toFormat('ccc d')}</div>
                </div>

                {#if !cell.isWeekend}
                  <div class="border border-neutral-700 rounded text-center py-1 text-xs">
                    <div>2h rano</div>
                  </div>
                  <div class="border border-neutral-700 rounded text-center py-1 text-xs">
                    <div>2h rano</div>
                  </div>
                  {#if cell.isMajor}
                    <div class="border border-neutral-700 rounded text-center py-1 text-xs">
                      <div>2h extra</div>
                    </div>
                  {/if}
                {/if}
              </section>
            {:else}
              <div />
            {/if}
          {/each}
        {/each}
      </section>

      <section class="grid grid-cols-6 gap-8 text-xs justify-start items-start">
        <div class="col-span-4 grid grid-cols-5 gap-x-4 gap-1">
          <header class="border-b border-neutral-700 pb-2 mb-2 col-span-5">
            Klienci {prices.small} zł / {clients.small} bloków
          </header>
          {#each Array.from({ length: clients.small }) as _, i}
            <div class="flex gap-2">
              <div class="rounded border border-neutral-700 w-4 h-4" />
              <div>nr {i + 1}</div>
            </div>
          {/each}
        </div>

        <div class="col-span-2 grid grid-cols-2 gap-x-4 gap-1">
          <header class="border-b border-neutral-700 pb-2 mb-2 col-span-2">
            Klienci {prices.medium} zł / {clients.medium * 2} bloków
          </header>
          {#each Array.from({ length: clients.medium }) as _, i}
            <div class="flex gap-2">
              <div class="flex gap-1">
                <div class="rounded border border-neutral-700 w-4 h-4" />
                <div class="rounded border border-neutral-700 w-4 h-4" />
              </div>
              <div>nr {i}</div>
            </div>
          {/each}
        </div>

        <div class="col-span-6 flex flex-col gap-1">
          <header class="border-b border-neutral-700 pb-2 mb-2">
            Małe Spółki {prices.large} zł / {clients.large * 5} bloków
          </header>
          {#each Array.from({ length: clients.large }) as _, i}
            <div class="flex gap-2">
              <div class="flex gap-1">
                <div class="rounded border border-neutral-700 w-4 h-4" />
                <div class="rounded border border-neutral-700 w-4 h-4" />
                <div class="rounded border border-neutral-700 w-4 h-4" />
                <div class="rounded border border-neutral-700 w-4 h-4" />
                <div class="rounded border border-neutral-700 w-4 h-4" />
              </div>
              <div>nr {i + 1}</div>
            </div>
          {/each}
        </div>
      </section>
    </main>
  </Sheet>
</Sheets>
