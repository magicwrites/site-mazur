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

<header class="absolute bottom-0 left-9 right-9 -mb-2 sm:-mb-4 text-center xl:text-left">
  <div class="max-w-prose mx-auto relative">
    <div class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-white p-8">
      <div class="relative flex flex-col gap-2">
        <h1 class="text-3xl font-inter uppercase font-bold -ml-0.5 text-neutral-800">
          Marcelina Mazur
        </h1>
        <div class="font-inter font-light text-lg relative">
          {texts.about.job}
        </div>
      </div>
    </div>
  </div>
</header>
