<script lang="ts">
  import cx from 'classnames';

  import { en, pl } from './Links.texts';
  import { isPolish } from '$src/stores/language';
  import Button from '$src/components/buttons/Line.svelte';

  $: texts = $isPolish ? pl : en;
</script>

<section class="grid sm:grid-cols-2 gap-8 px-8 xl:px-16 2xl:px-32 font-inter">
  <a href="marcelina/cennik" target="_blank">
    <Button>
      <div slot="about">{texts.prices.about}</div>
      <div slot="title">{texts.prices.title}</div>
    </Button>
  </a>
  <a href="/curriculum-vitae-marcelina.pdf" target="_blank">
    <Button>
      <div slot="about">{texts.cv.about}</div>
      <div slot="title">{texts.cv.title}</div>
    </Button>
  </a>
  <a href="/">
    <Button>
      <div slot="about">{texts.us.about}</div>
      <div slot="title">{texts.us.title}</div>
    </Button>
  </a>
</section>
