<script>
  import Language from '$components/Language.svelte';
  import Icon from '$components/Icon.svelte';
</script>

<section class="w-full flex justify-between items-center xl:px-32 xl:pt-16 font-inter">
  <div class="flex gap-4 xl:hidden">
    <a href="mailto:maciej@mazur.site" target="_blank">
      <Icon reactive name="fa-envelope" />
    </a>

    <a href="https://www.linkedin.com/in/maciek-mazur-b922953a/" target="_blank">
      <Icon reactive name="fa-linkedin" />
    </a>
  </div>

  <div class="ml-auto">
    <Language />
  </div>
</section>
