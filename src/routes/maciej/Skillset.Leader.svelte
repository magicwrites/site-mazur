<script>
  import { en, pl } from './Skillset.Leader.texts';
  import { isPolish } from '$src/stores/language';

  $: texts = $isPolish ? pl : en;
</script>

<section class="flex flex-col gap-4">
  <header class="flex flex-col gap-2">
    <h3 class="text-2xl 2xl:text-3xl font-inter font-bold">{texts.header}</h3>
  </header>
  <section class="flex flex-col gap-8">
    {#each texts.paragraphs as paragraph}
      <p>{paragraph}</p>
    {/each}
  </section>
</section>
