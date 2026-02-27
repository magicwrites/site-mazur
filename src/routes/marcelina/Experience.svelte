<script>
  import { isPolish } from '$src/stores/language';
  import { pl, en } from './Experience.content';

  $: texts = $isPolish ? pl : en;
</script>

<section class="flex flex-col gap-8 px-8 xl:px-16 2xl:px-32">
  <h2 class="text-3xl 2xl:text-5xl font-inter font-bold uppercase">{texts.title}</h2>

  <section class="flex flex-col gap-8">
    <div class="flex flex-col gap-4">
      {#each texts.paragraphs.primary as paragraph}
        <p>{@html paragraph}</p>
      {/each}
    </div>
  </section>

  <div />

  <section class="flex flex-col gap-8">
    <div class="flex flex-col gap-4">
      {#each texts.paragraphs.secondary as paragraph}
        <p>{@html paragraph}</p>
      {/each}
    </div>
  </section>
</section>
