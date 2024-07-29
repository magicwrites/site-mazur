<script>
  import { en, pl } from './Skillset.Designer.texts';
  import { isPolish } from '$src/stores/language';

  $: texts = $isPolish ? pl : en;
</script>

<section class="flex flex-col gap-8">
  <header class="flex flex-col gap-2">
    <h4 class="text-3xl -ml-0.5">{texts.header}</h4>
    <section class="flex flex-col gap-8">
      {#each texts.paragraphs as paragraph}
        <p>{@html paragraph}</p>
      {/each}
    </section>
  </header>
</section>
