<script>
  import Engineer from './Skillset.Engineer.svelte';
  import Leader from './Skillset.Leader.svelte';
  import Designer from './Skillset.Designer.svelte';
  import { isPolish } from '$src/stores/language';

  $: text = $isPolish ? 'Kompetencje' : 'Capabilities';
</script>

<section class="px-8 xl:px-16 2xl:pt-0 2xl:px-32 flex flex-col gap-16">
  <div class="flex flex-col gap-8">
    <h2 class="text-3xl 2xl:text-5xl font-inter font-bold uppercase">{text}</h2>
    <Engineer />
  </div>

  <div>
    <Leader />
  </div>

  <div>
    <Designer />
  </div>
</section>
