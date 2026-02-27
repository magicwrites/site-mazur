<script>
  import { en, pl } from './Skillset.Leader.texts';
  import { isPolish } from '$src/stores/language';
  import MinorHeader from '$src/components/headers/Minor.svelte';

  $: texts = $isPolish ? pl : en;
</script>

<section class="flex flex-col gap-4">
  <header class="flex flex-col gap-2">
    <MinorHeader>{texts.header}</MinorHeader>
  </header>
  <section class="flex flex-col gap-8">
    {#each texts.paragraphs as paragraph}
      <p>{paragraph}</p>
    {/each}
  </section>
</section>
