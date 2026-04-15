<script>
  import cx from 'classnames';
  import { DateTime } from 'luxon';
  import Sheet from '$components/Sheet.svelte';
  import Sheets from '$components/Sheets.svelte';
  import Subheader from '../curriculum-vitae/Document.Subheader.svelte';

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
</script>

<svelte:head>
  <title>Marcelina Mazur - Miesiecznik</title>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<Sheets>
  <Sheet>
    <main class="flex flex-col gap-8">
      <div>Kwiecień</div>
      <section class="grid grid-cols-7 gap-4">
        {#each Object.values(weeks) as week}
          {#each week as cell}
            {#if cell}
              <section class="flex flex-col gap-2">
                <div
                  class={cx(
                    'border border-neutral-700 bg-neutral-700 text-white rounded text-center p-2 text-xs',
                    {
                      'opacity-30': cell.isWeekend
                    }
                  )}
                >
                  <div>{cell.day.toFormat('ccc d')}</div>
                </div>

                {#if !cell.isWeekend}
                  <div class="border border-neutral-700 rounded text-center py-2 text-xs">
                    <div>4h rano</div>
                  </div>
                  {#if cell.isMajor}
                    <div class="border border-neutral-700 rounded text-center py-2 text-xs">
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

      <section class="grid grid-cols-4 gap-x-8 gap-1 text-xs">
        {#each Array.from({ length: 40 }) as _, i}
          <div>klient nr {i}</div>
        {/each}
      </section>
    </main>
  </Sheet>
</Sheets>
