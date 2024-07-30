<script>
  import cx from 'classnames';

  const groups = [
    {
      title: 'książki',
      items: [
        {
          name: 'saga o wojnie światów',
          link: 'https://www.amazon.com/Raymond-Feist-Riftwar-Saga/dp/0007513674',
          more: 'Raymond E. Feist'
        },
        {
          name: 'Broken Money',
          link: 'https://www.amazon.com/Broken-Money-Financial-System-Failing/dp/B0CG83QBJ6',
          more: 'Lyn Alden'
        },
        {
          name: 'Big Dept Crises',
          link: 'https://www.amazon.com/Big-Debt-Crises-Ray-Dalio/dp/057856565X',
          more: 'Ray Dalio'
        },
        {
          name: 'Inwestowanie dla każdego',
          link: 'https://inwestomat.eu/ksiazka',
          more: 'Mateusz Samołyk'
        },
        {
          name: 'O wojnie',
          more: 'Clausewitz'
        },
        {
          name: 'Czarne oceany',
          more: 'Jacek Dukaj'
        }
      ]
    }
  ];
</script>

<svelte:head>
  <title>Maciej Mazur - prezent</title>
</svelte:head>

<section class="p-8 flex flex-col gap-16 font-work mx-auto w-96">
  <main class="flex flex-col gap-8">
    <h2 class="text-3xl">Prezent?</h2>

    <div class="flex flex-col gap-16">
      {#each groups as group}
        <section class="flex flex-col gap-4">
          <header>
            <h3 class="font-medium">{group.title}</h3>
          </header>
          {#each group.items as item}
            <svelte:element
              this={item.link ? 'a' : 'section'}
              class={cx('bg-neutral-50 p-4', 'transition', 'flex justify-between items-center', {
                'hover:bg-neutral-700 hover:text-white': item.link
              })}
              href={item.link}
              target={item.link ? '_blank' : undefined}
            >
              <div>
                <div>{item.name}</div>
                <div class="text-xs">{item.more}</div>
              </div>

              {#if item.link}
                <i class="px-2 fas fa-arrow-up-right-from-square" />
              {/if}
            </svelte:element>
          {/each}
        </section>
      {/each}
    </div>
  </main>
</section>
