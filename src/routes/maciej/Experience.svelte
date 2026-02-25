<script>
  import cx from 'classnames';
  import { isPolish } from '$src/stores/language';
  import { pl, en } from './Experience.texts';

  $: texts = $isPolish ? { ...pl } : { ...en };
</script>

<section class="px-8 xl:px-16 2xl:p-32 2xl:pt-0 flex flex-col gap-16">
  <header class="flex flex-col gap-8">
    <h2 class="text-3xl 2xl:text-5xl font-inter font-bold uppercase pt-1">
      {texts.description.header}
    </h2>
    <div class="flex flex-col gap-4">
      {#each texts.description.paragraphs as paragraph}
        <p>{@html paragraph}</p>
      {/each}
    </div>
  </header>

  <ol class="flex flex-col gap-16 xl:gap-12">
    {#each texts.entries as entry, i}
      <li class="flex flex-col gap-8">
        <header class="flex flex-col gap-1">
          <h3 class={cx('text-2xl 2xl:text-3xl font-inter font-bold')}>
            {entry.header}
          </h3>
          <div class="font-inter font-light text-base">{entry.note}</div>
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
