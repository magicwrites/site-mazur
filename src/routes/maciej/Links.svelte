<script lang="ts">
  import cx from 'classnames';

  import { en, pl } from './Links.texts';
  import { isPolish } from '$src/stores/language';
  import Button from '$src/components/buttons/Line.svelte';

  $: texts = $isPolish ? pl : en;
</script>

<section class="grid 2xl:grid-cols-2 gap-8 p-11 2xl:px-32 pb-32 font-inter">
  <a href="/" target="_blank">
    <Button>
      <div slot="about">{texts.cv.about}</div>
      <div slot="title">{texts.cv.title}</div>
    </Button>
  </a>
  <a href="/" target="_blank">
    <Button>
      <div slot="about">{texts.us.about}</div>
      <div slot="title">{texts.us.title}</div>
    </Button>
  </a>
  <a href="https://github.com/magicwrites/site-mazur" target="_blank">
    <Button>
      <div slot="about">{texts.code.about}</div>
      <div slot="title">{texts.code.title}</div>
    </Button>
  </a>
</section>
