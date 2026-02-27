<script lang="ts">
  import cx from 'classnames';

  export let huge = false;
</script>

<div class={cx('font-inter font-light', huge ? 'text-xl' : 'text-base')}>
  <slot />
</div>
