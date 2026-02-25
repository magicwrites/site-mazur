<script>
  import cx from 'classnames';
  import Language from '$components/Language.svelte';
  import Icon from '$components/Icon.svelte';
</script>

<section
  class={cx(
    'flex justify-between items-center',
    'xl:p-16 xl:py-12',
    '2xl:px-32 2xl:pt-16 2xl:pb-0',
    'font-inter'
  )}
>
  <div class="flex gap-4 xl:-ml-[14px] 2xl:hidden">
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
