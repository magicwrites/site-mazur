<script lang="ts">
  import cx from 'classnames';

  import { en, pl } from './Links.texts';
  import { isPolish } from '$src/stores/language';
  import Code from '$src/components/Redirect.svelte?raw';
  import LinkMazur from '../../components/buttons/Mazur.svelte';
  import Maciej from '$src/components/miniatures/Maciej.svelte';

  $: texts = $isPolish ? pl : en;

  const escapeHtml = (unsafe: string) => {
    return unsafe
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  };

  const code = escapeHtml(Code);
</script>

<section
  class="flex flex-col gap-8 md:grid md:grid-cols-12 xl:gap-0 xl:grid xl:grid-cols-12 px-8 2xl:px-0"
>
  <aside class="md:col-span-12 xl:col-span-4 flex">
    <a href="/" class="w-full h-full">
      <LinkMazur>
        <div>{texts.us.title}</div>
        <div class="text-xs">{texts.us.about}</div>
      </LinkMazur>
    </a>
  </aside>

  <div class="hidden xl:block" />

  <aside class="md:col-span-6 xl:col-span-3">
    <a
      href="/curriculum-vitae-maciej.pdf"
      target="_blank"
      class={cx(
        'bg-neutral-50 hover:bg-neutral-700 hover:text-white',
        'relative p-8 h-40 transition',
        'flex flex-col justify-between bg-cover',
        'relative overflow-hidden'
      )}
    >
      <div class="w-[156px] bg-neutral-200 h-[128px] absolute top-2/3 right-4 -mt-2" />

      <figure class="absolute top-2/3 right-6">
        <Maciej />
      </figure>

      <header class="relative">
        <div>{texts.cv.title}</div>
        <div class="text-xs">{texts.cv.about}</div>
      </header>

      <i class="relative fas fa-arrow-up-right-from-square" />
    </a>
  </aside>

  <div class="hidden xl:block" />

  <aside class="md:col-span-6 xl:col-span-3">
    <a
      href="https://github.com/magicwrites/site-mazur"
      target="_blank"
      class={cx(
        'bg-neutral-50 hover:bg-neutral-700 hover:text-white',
        'relative p-8 h-40 transition overflow-hidden',
        'flex flex-col justify-between'
      )}
    >
      <pre class={cx('absolute bottom-0 left-2/3 w-full', 'text-neutral-400 text-[3px]')}>
				{@html code}
			</pre>

      <header class="z-10">
        <div>{texts.code.title}</div>
        <div class="text-xs">{texts.code.about}</div>
      </header>

      <i class="fas fa-arrow-up-right-from-square" />
    </a>
  </aside>
</section>
