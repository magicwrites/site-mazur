<script lang="ts">
  import cx from 'classnames';

  import { en, pl } from './Links.texts';
  import { isPolish } from '$src/stores/language';
  import LinkMazur from '$src/components/buttons/Mazur.svelte';
  import Prices from '$src/components/miniatures/Prices.svelte';
  import Marcelina from '$src/components/miniatures/Marcelina.svelte';

  $: texts = $isPolish ? pl : en;
</script>

<section
  class="flex flex-col gap-8 grid md:grid-cols-12 2xl:gap-x-0 2xl:gap-y-16 2xl:grid-cols-11 px-8 2xl:px-0"
>
  <aside class="md:col-span-6 2xl:col-span-2">
    <a
      href="/marcelina/cennik"
      target="_blank"
      class={cx(
        'bg-neutral-50 hover:bg-neutral-700 hover:text-white',
        'relative p-8 h-40 transition',
        'flex flex-col justify-between bg-cover',
        'relative overflow-hidden'
      )}
    >
      <div class="w-[128px] bg-neutral-200 h-[128px] absolute top-2/3 right-4 -mt-2" />

      <figure class="absolute top-2/3 right-6">
        <Prices />
      </figure>

      <header class="relative">
        <div>{texts.prices.title}</div>
        <div class="text-xs">{texts.prices.about}</div>
      </header>

      <i class="relative fas fa-arrow-up-right-from-square" />
    </a>
  </aside>

  <div class="hidden 2xl:block" />

  <aside class="md:col-span-6 2xl:col-span-2">
    <a
      href="/curriculum-vitae-marcelina.pdf"
      target="_blank"
      class={cx(
        'bg-neutral-50 hover:bg-neutral-700 hover:text-white',
        'relative p-8 h-40 transition',
        'flex flex-col justify-between bg-cover',
        'relative overflow-hidden'
      )}
    >
      <div class="w-[128px] bg-neutral-200 h-[128px] absolute top-2/3 right-4 -mt-2" />

      <figure class="absolute top-2/3 right-6">
        <Marcelina />
      </figure>

      <header class="relative">
        <div>{texts.cv.title}</div>
        <div class="text-xs">{texts.cv.about}</div>
      </header>

      <i class="relative fas fa-arrow-up-right-from-square" />
    </a>
  </aside>

  <div class="hidden 2xl:block" />

  <aside class="md:col-span-6 2xl:col-span-2">
    <a
      href="mailto:marcelina@mazur.site"
      target="_blank"
      class={cx(
        'bg-neutral-50 hover:bg-neutral-700 hover:text-white',
        'relative p-8 h-40 transition',
        'flex flex-col justify-between bg-cover',
        'relative overflow-hidden'
      )}
    >
      <header class="relative">
        <div>{texts.contact.title}</div>
        <div class="text-xs">{texts.contact.about}</div>
      </header>

      <i class="relative fas fa-arrow-up-right-from-square" />

      <i class="absolute bottom-2 right-16 fas fa-at text-6xl opacity-30" />
    </a>
  </aside>

  <div class="hidden 2xl:block" />

  <aside class="md:col-span-6 2xl:col-span-2 flex">
    <a href="/" class="w-full h-full">
      <LinkMazur>
        <div>{texts.us.title}</div>
        <div class="text-xs">{texts.us.about}</div>
      </LinkMazur>
    </a>
  </aside>
</section>
