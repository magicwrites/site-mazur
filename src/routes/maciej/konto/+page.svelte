<script lang="ts">
  // @ts-expect-error: no types for this package
  import Clipboard from 'svelte-clipboard';
  import { entries } from '$lib/accounts';
  import FontAwesome from '$src/components/FontAwesome.svelte';

  let copied: symbol | null = null;
</script>

<svelte:head>
  <title>Konto do wpłat</title>

  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<section class="p-8 flex flex-col gap-16 mx-auto w-96">
  <main class="flex flex-col gap-8">
    <h1 class="text-3xl font-bold uppercase -ml-[0.5px]">Rachunki</h1>

    <div class="flex flex-col gap-8">
      {#each entries as entry}
        <section class="flex flex-col gap-4 pb-8">
          <h2 class="text-xl font-bold font-inter">{entry.title}</h2>
          <section>
            <div class="flex flex-col gap-4">
              {#each entry.accounts as account}
                <div class="flex items-center justify-between">
                  <header class="flex flex-col gap-1">
                    <h3 class="font-bold font-inter">{account.title}</h3>
                    <div class="font-mono text-xs">
                      {@html account.number.includes('PL')
                        ? account.number
                        : '&nbsp;&nbsp;&nbsp;' + account.number}
                    </div>
                  </header>

                  <Clipboard
                    text={account.number.replaceAll(' ', '')}
                    let:copy
                    on:copy={() => (copied = account.id)}
                  >
                    <button on:click={copy}>
                      <FontAwesome iconName={copied === account.id ? 'fa-check' : 'fa-copy'} />
                    </button>
                  </Clipboard>
                </div>
              {/each}
            </div>
          </section>
        </section>
      {/each}
    </div>
  </main>
</section>
