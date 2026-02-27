<script lang="ts">
  import cx from 'classnames';
  import Button from '$src/components/buttons/Line.svelte';
  import { isPolish } from '$src/stores/language';
  import { pl, en } from './About.texts';

  const parse = (texts: { paragraphs: string[] }) => {
    const years = new Date().getFullYear() - 2013;
    const paragraphs = texts.paragraphs.map((p: string) => p.replace('{years}', years.toString()));

    return { ...texts, paragraphs };
  };

  $: texts = $isPolish ? parse(pl) : en;
</script>

<section class="px-8 xl:px-16 2xl:p-32 2xl:pt-0 flex flex-col gap-16">
  <header class="hidden xl:flex flex-col gap-2">
    <h1
      class={cx(
        'text-5xl 2xl:text-6xl',
        'font-inter uppercase font-bold',
        '-ml-0.5',
        'text-neutral-800'
      )}
    >
      Marcelina Mazur
    </h1>
    <div class="font-inter font-light">{texts.job}</div>
  </header>

  <main class="flex flex-col gap-8">
    {#each texts.paragraphs as paragraph}
      <p>{@html paragraph}</p>
    {/each}
  </main>

  <footer class="hidden 2xl:grid grid-cols-2 gap-8">
    {#each texts.links as link}
      <a href={link.href} target="_blank">
        <Button reversed>
          <div slot="about">{link.label}</div>
          <div slot="title">{link.text}</div>
        </Button>
      </a>
    {/each}
  </footer>
</section>
