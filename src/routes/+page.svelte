<script lang="ts">
  import cx from 'classnames';
  import Button from '$src/components/buttons/Line.svelte';
  import Supertitle from '$src/components/headers/Supertitle.svelte';

  import { en, pl } from './page.texts';
  import { isPolish } from './../stores/language';

  $: texts = $isPolish ? pl : en;

  import Europe from '$src/components/Europe.svelte';
  import Language from '$src/components/Language.svelte';
</script>

<svelte:head>
  <title>Mazur</title>
</svelte:head>

<section class="relative min-h-screen flex flex-col sm:mx-auto sm:max-w-[380px] lg:max-w-full">
  <main class={cx('lg:grow lg:grid lg:grid-cols-9', 'text-neutral-700', 'order-2 lg:order-1')}>
    <div />

    <nav
      class={cx(
        'col-span-2',
        'py-16 lg:py-24 2xl:py-32 px-8 lg:px-0',
        'flex flex-col gap-16 justify-center'
      )}
    >
      <header class="flex gap-8">
        <Supertitle>
          <h1>Mazur</h1>
        </Supertitle>
      </header>

      <section class="flex flex-col gap-6 lg:gap-8">
        <a class="mr-auto" href="/marcelina">
          <Button>
            <div slot="title">{texts.marcelina.title}</div>
            <div slot="about">{texts.marcelina.about}</div>
          </Button>
        </a>
        <a class="mr-auto" href="/maciej">
          <Button>
            <div slot="title">{texts.maciej.title}</div>
            <div slot="about">{texts.maciej.about}</div>
          </Button>
        </a>
      </section>

      <footer class="flex flex-col gap-4 mt-4 xl:mt-8">
        <a class="mr-auto" href="https://www.eleganckiefaktury.pl" target="_blank">
          <Button>
            <div slot="title">{texts.invoices.title}</div>
            <div slot="about">{texts.invoices.about}</div>
          </Button>
        </a>
      </footer>
    </nav>

    <div />

    <aside
      class="lg:col-span-4 flex flex-col justify-center items-center overflow-hidden sm:overflow-visible"
    >
      <div
        class={cx(
          'stroke-neutral-200 fill-neutral-200',
          'w-[175vw] sm:w-[80vw] md:w-[640px] lg:w-auto'
        )}
      >
        <Europe
          classes="lg:w-auto lg:h-[80vh] max-w-full"
          poland="stroke-neutral-700 fill-neutral-700"
          marker="fill-white"
        />
      </div>
    </aside>
  </main>

  <aside class="lg:grid lg:grid-cols-9 order-1 lg:order-2">
    <div />

    <div class={cx('lg:col-span-7', 'p-8 lg:p-0 lg:pb-16')}>
      <Language />
    </div>

    <div />
  </aside>
</section>
