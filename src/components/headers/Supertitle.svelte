<script lang="ts">
  import cx from 'classnames';
</script>

<div
  class={cx(
    'uppercase text-6xl font-dosis text-gray-700 -ml-1',
    'text-center xl:text-left xl:pt-0 xl:pb-0'
  )}
>
  <slot />
</div>
