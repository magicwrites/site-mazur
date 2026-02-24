<script>
  import cx from 'classnames';
  import Experience from './Experience.svelte';
  import Skillset from './Skillset.svelte';
  import About from './About.svelte';
  import Actions from './About.Actions.svelte';
  import Links from './Links.svelte';
  import AboutMobile from './About.Mobile.svelte';
  import CurriculumVitae from './curriculum-vitae/Document.svelte';

  import { en, pl } from './About.texts';
  import { isPolish } from '$src/stores/language';

  $: texts = $isPolish ? pl : en;
  import bg from '$assets/maciej-golf.webp';
</script>

<svelte:head>
  <title>Maciej Mazur</title>
  <meta name="description" content={texts.job} />
</svelte:head>

<section class="hidden print:block font-work">
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
    <div class="order-2 xl:order-1">
      <section class="min-h-screen flex flex-col gap-16">
        <div class="hidden xl:block">
          <Actions />
        </div>
        <About />
      </section>
      <section class="min-h-screen flex flex-col gap-16">
        <div class="lg:col-span-6 relative">
          <div class="absolute -top-14 2xl:-top-28" id="experience" />
          <Experience />
        </div>
      </section>
      <section class="min-h-screen flex flex-col gap-16">
        <div class="lg:col-span-6 relative">
          <div class="absolute -top-14 2xl:-top-28" id="skillset" />
          <Skillset />
        </div>
      </section>
      <section class="flex flex-col gap-16">
        <Links />
      </section>
    </div>

    <div
      class="xl:order-2 xl:sticky relative top-0 left-0 xl:left-auto xl:right-0 h-screen w-screen xl:w-auto"
    >
      <div
        class={cx('bg-neutral-200', 'min-h-screen w-screen xl:w-auto', 'bg-cover bg-center')}
        style="background-image: url('{bg}')"
      />

      <nav class="absolute top-8 left-11 right-11 xl:hidden">
        <Actions />
      </nav>

      <div class="xl:hidden">
        <AboutMobile />
      </div>
    </div>
  </div>
</section>
