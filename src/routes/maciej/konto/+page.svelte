<script lang="ts">
  // @ts-ignore: there is no types package
  import Clipboard from 'svelte-clipboard';
  import Icon from '$components/Icon.svelte';
  import { entries } from '$lib/accounts';

  let copied: Symbol | null = null;
</script>

<svelte:head>
  <title>Konto do wpłat</title>
</svelte:head>

<section class="p-8 flex flex-col gap-16 font-work mx-auto w-96">
  <main class="flex flex-col gap-8">
    <h2 class="text-3xl">Czas na przelew?</h2>

    <div class="flex flex-col gap-8">
      {#each entries as entry}
        <section class="flex flex-col gap-4">
          <div class="font-medium">{entry.title}</div>
          <section>
            <div class="flex flex-col gap-4">
              {#each entry.accounts as account}
                <div class="flex items-center justify-between">
                  <header>
                    <div>{account.title}</div>
                    <div class="font-nunito text-xs">
                      {account.number}
                    </div>
                  </header>

                  <Clipboard
                    text={account.number.replaceAll(' ', '')}
                    let:copy
                    on:copy={() => (copied = account.id)}
                  >
                    <button on:click={copy}>
                      <Icon name={copied === account.id ? 'fas fa-check' : 'fas fa-copy'} />
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
