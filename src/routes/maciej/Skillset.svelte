<script>
  import Engineer from './Skillset.Engineer.svelte';
  import Leader from './Skillset.Leader.svelte';
  import Designer from './Skillset.Designer.svelte';
  import { isPolish } from '$src/stores/language';
  import MajorHeader from '$src/components/headers/Major.svelte';

  $: text = $isPolish ? 'Kompetencje' : 'Capabilities';
</script>

<section class="px-8 xl:px-16 2xl:px-32 flex flex-col gap-16">
  <div class="flex flex-col gap-8">
    <MajorHeader>{text}</MajorHeader>
    <Engineer />
  </div>

  <div>
    <Leader />
  </div>

  <div>
    <Designer />
  </div>
</section>
