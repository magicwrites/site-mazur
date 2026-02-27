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
    <a href="tel:+48697952558">
      <Icon reactive name="fa-phone" />
    </a>

    <a href="https://www.facebook.com/profile.php?id=61571217423938" target="_blank">
      <Icon reactive name="fa-facebook" />
    </a>

    <a href="https://wa.me/48697952558" target="_blank">
      <Icon reactive name="fa-whatsapp" />
    </a>

    <a href="mailto:marcelina@mazur.site" target="_blank">
      <Icon reactive name="fa-envelope" />
    </a>
  </div>

  <div class="ml-auto">
    <Language contrast />
  </div>
</section>
