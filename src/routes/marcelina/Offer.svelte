<script>
  import cx from 'classnames';
  import { isPolish } from '$src/stores/language';
  import { pl, en } from './Offer.content';
  import Point from '$components/Point.svelte';

  $: texts = $isPolish ? pl : en;
</script>

<section class={cx('px-8 xl:px-16 2xl:px-32', 'flex flex-col gap-8')}>
  <section class="2xl:col-span-5 flex flex-col gap-8">
    <h2 class="text-3xl 2xl:text-5xl font-inter font-bold uppercase">
      {texts.analysis.title}
    </h2>

    <div class="flex flex-col gap-4">
      {#each texts.analysis.paragraphs as paragraph}
        <p>{@html paragraph}</p>
      {/each}
    </div>
  </section>

  <div />

  <section class="2xl:col-span-5 flex flex-col gap-8">
    <h3 class="text-2xl 2xl:text-3xl font-inter font-bold">
      {texts.proposal.title}
    </h3>

    <div class="flex flex-col gap-4">
      {#each texts.proposal.paragraphs as paragraph}
        <p>{@html paragraph}</p>
      {/each}
    </div>

    <ul class="flex flex-col sm:gap-2">
      {#each texts.proposal.points as point, i}
        <li>
          <Point first={i === 0}>
            <div>{point.text}</div>
            {#if point.more}
              <div class="font-inter text-sm sm:pb-2">{point.more}</div>
            {/if}
          </Point>
        </li>
      {/each}
    </ul>
  </section>
</section>
