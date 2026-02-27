<script>
  import { isPolish } from '$src/stores/language';
  import * as about from './About.texts';
  import * as description from './About.Description.texts';
  import Button from '$src/components/buttons/Line.svelte';
  import ScreamHeader from '$src/components/headers/Scream.svelte';
  import Subtitle from '$src/components/headers/Subtitle.svelte';

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

<section class="px-8 xl:px-16 2xl:p-32 2xl:py-0 flex flex-col gap-16">
  <header class="hidden xl:flex flex-col gap-2">
    <div class="-ml-0.5">
      <ScreamHeader>Maciej Mazur</ScreamHeader>
    </div>
    <Subtitle huge>{texts.about.job}</Subtitle>
  </header>

  <main class="flex flex-col gap-8">
    {#each texts.description.paragraphs as paragraph}
      <p>{@html paragraph}</p>
    {/each}
  </main>

  <footer class="hidden 2xl:flex flex-col items-start gap-8">
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
