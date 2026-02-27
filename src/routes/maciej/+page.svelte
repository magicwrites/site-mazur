<script>
  import cx from 'classnames';
  import Experience from './Experience.svelte';
  import Skillset from './Skillset.svelte';
  import About from './About.svelte';
  import Actions from './About.Actions.svelte';
  import Links from './Links.svelte';
  import AboutMobile from './About.Mobile.svelte';
  import CurriculumVitae from './curriculum-vitae/Document.svelte'; // @ts-expect-error: correct path
  import bg from '$assets/maciej-golf.webp';

  import { en, pl } from './About.texts';
  import { isPolish } from '$src/stores/language';

  $: texts = $isPolish ? pl : en;
</script>

<svelte:head>
  <title>Maciej Mazur</title>

  <link rel="canonical" href="https://mazur.site/maciej" />

  <meta name="description" content={texts.meta.description} />

  <meta property="og:title" content="Maciej Mazur" />
  <meta property="og:type" content="website" />
  <meta property="og:description" content={texts.meta.description} />
  <meta property="og:url" content="https://mazur.site/maciej" />
  <meta property="og:image" content="https://mazur.site/512-maciej.webp" />

  <meta property="twitter:title" content="Maciej Mazur" />
  <meta property="twitter:description" content={texts.meta.description} />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:image" content="https://mazur.site/512-maciej.png" />
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
          <div class="absolute -top-14 2xl:-top-28" id="experience" />
          <Experience />
        </div>
      </section>

      <section class="flex flex-col gap-16">
        <div class="lg:col-span-6 relative">
          <div class="absolute -top-14 2xl:-top-28" id="skillset" />
          <Skillset />
        </div>
      </section>

      <footer class="flex flex-col gap-32 py-16">
        <Links />

        <aside class="px-8 xl:px-16 2xl:px-32 font-inter text-sm text-center xl:text-left">
          <span>{texts.footer.call}</span>
          <span>{texts.footer.email}</span>
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
