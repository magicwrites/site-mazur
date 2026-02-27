<script>
  import MajorHeader from '$src/components/headers/Major.svelte';
  import MinorHeader from '$src/components/headers/Minor.svelte';
  import Subtitle from '$src/components/headers/Subtitle.svelte';
  import { isPolish } from '$src/stores/language';
  import { pl, en } from './Experience.texts';

  $: texts = $isPolish ? { ...pl } : { ...en };
</script>

<section class="px-8 xl:px-16 2xl:px-32 flex flex-col gap-16">
  <header class="flex flex-col gap-8">
    <MajorHeader>{texts.description.header}</MajorHeader>
    <div class="flex flex-col gap-4">
      {#each texts.description.paragraphs as paragraph}
        <p>{@html paragraph}</p>
      {/each}
    </div>
  </header>

  <ol class="flex flex-col gap-16">
    {#each texts.entries as entry}
      <li class="flex flex-col gap-8">
        <header class="flex flex-col gap-1">
          <MinorHeader>{entry.header}</MinorHeader>
          <Subtitle>{entry.note}</Subtitle>
        </header>

        <div class="flex flex-col gap-4">
          {#each entry.paragraphs as paragraph}
            <p>
              {@html paragraph}
            </p>
          {/each}
        </div>
      </li>
    {/each}
  </ol>
</section>
