<script>
  import { isPolish } from '$src/stores/language';
  import * as about from './About.texts';
  import * as description from './About.Description.texts';

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

<header class="mx-12 absolute bottom-0 -mb-2">
  <div class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-white p-8">
    <div class="relative flex flex-col gap-2">
      <h1 class="text-3xl font-inter uppercase font-bold -ml-0.5 text-neutral-800">Maciej Mazur</h1>
      <div class="font-inter font-light text-lg relative">
        {texts.about.job}
      </div>
    </div>
  </div>
</header>
