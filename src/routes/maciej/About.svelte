<script>
  import cx from 'classnames';
  import portrait from '$assets/maciej-easy.webp';
  import portraitCut from '$assets/maciej-easy-transparent.webp';
  import { isPolish } from '$src/stores/language';
  import * as about from './About.texts';
  import * as description from './About.Description.texts';
  import Button from '$src/components/buttons/Line.svelte';

  $: texts = $isPolish
    ? {
        about: about.pl,
        description: description.pl
      }
    : {
        about: about.en,
        description: description.en
      };
</script>

<section class="p-11 pt-20 2xl:p-32 2xl:pt-0 flex flex-col gap-16">
  <header class="hidden xl:flex flex-col gap-2">
    <h1 class="text-6xl font-inter uppercase font-bold -ml-0.5 text-neutral-800">Maciej Mazur</h1>
    <div class="font-inter font-light">{texts.about.job}</div>
  </header>

  <main class="flex flex-col gap-8">
    {#each texts.description.paragraphs as paragraph}
      <p>{@html paragraph}</p>
    {/each}
  </main>

  <footer class="hidden xl:flex flex-col items-start gap-8">
    {#each texts.about.links as link}
      <a href={link.href} target="_blank">
        <Button reversed>
          <div slot="about">{link.label}</div>
          <div slot="title">{link.text}</div>
        </Button>
      </a>
    {/each}
  </footer>
</section>
