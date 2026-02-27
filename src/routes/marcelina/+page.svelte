<script>
  import cx from 'classnames';
  import About from './About.svelte';
  import Actions from './About.Actions.svelte';
  import Links from './Links.svelte';
  import AboutMobile from './About.Mobile.svelte';
  import Offer from './Offer.svelte';
  import CurriculumVitae from './curriculum-vitae/Document.svelte';
  import Experience from './Experience.svelte';
  import FontAwesome from '$src/components/FontAwesome.svelte'; // @ts-expect-error: correct path
  import bg from '$assets/marcelina-chair.webp';

  import { en, pl } from './About.texts';
  import { isPolish } from '$src/stores/language';

  $: texts = $isPolish ? pl : en;
</script>

<svelte:head>
  <title>Marcelina Mazur</title>
  <link rel="canonical" href="https://mazur.site/marcelina" />

  <meta name="description" content={texts.meta.description} />

  <meta property="og:title" content="Marcelina Mazur" />
  <meta property="og:type" content="website" />
  <meta property="og:description" content={texts.meta.description} />
  <meta property="og:url" content="https://mazur.site/marcelina" />
  <meta property="og:image" content="https://mazur.site/512-marcelina.webp" />

  <meta property="twitter:title" content="Marcelina Mazur" />
  <meta property="twitter:description" content={texts.meta.description} />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:image" content="https://mazur.site/512-marcelina.png" />
</svelte:head>

<section class="hidden print:block">
  <CurriculumVitae />
</section>

<section
  class={cx(
    'print:hidden',
    'font-spectral text-neutral-600',
    'text-lg 2xl:text-xl',
    'leading-8 2xl:leading-8'
  )}
>
  <div class="flex flex-col xl:grid xl:grid-cols-2 xl:relative">
    <main
      class={cx(
        'order-2 xl:order-1',
        'flex flex-col gap-20 2xl:gap-32',
        'max-w-prose xl:max-w-none',
        'mx-auto xl:mx-0'
      )}
    >
      <section class="xl:min-h-screen flex flex-col 2xl:gap-16">
        <div class="hidden xl:block">
          <Actions />
        </div>
        <About />
      </section>

      <section class="flex flex-col gap-16">
        <div class="lg:col-span-6 relative">
          <div class="absolute -top-14 2xl:-top-28" id="offer" />
          <Offer />
        </div>
      </section>

      <section class="flex flex-col gap-16">
        <div class="lg:col-span-6 relative">
          <div class="absolute -top-14 2xl:-top-28" id="experience" />
          <Experience />
        </div>
      </section>

      <footer class="flex flex-col gap-32 py-16">
        <Links />

        <aside
          class="p-8 xl:px-16 2xl:px-32 font-inter text-sm flex flex-col xl:flex-row gap-2 items-center"
        >
          <span>{texts.footer.call}</span>
          <span>{texts.footer.phone}</span>
          <FontAwesome iconName="fa-whatsapp" />
        </aside>
      </footer>
    </main>

    <figure
      class={cx(
        'xl:order-2',
        'xl:sticky',
        'relative top-0 left-0 xl:left-auto xl:right-0',
        'h-screen w-screen xl:w-auto',
        'mb-16 xl:mb-0' // for the skewed decoration in mobile views
      )}
    >
      <div
        class={cx('bg-neutral-200', 'min-h-screen w-screen xl:w-auto', 'bg-cover bg-center')}
        style="background-image: url('{bg}')"
      />

      <nav class="absolute top-8 left-8 right-8 xl:hidden">
        <Actions />
      </nav>

      <div class="xl:hidden">
        <AboutMobile />
      </div>
    </figure>
  </div>
</section>
