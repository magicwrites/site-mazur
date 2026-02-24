<script lang="ts">
  import cx from 'classnames';
  import Europe from '$src/components/Europe.svelte';
  import FontAwesome from '$src/components/FontAwesome.svelte';
</script>

<section
  class={cx(
    'w-full h-full block overflow-hidden relative',
    'transition',
    'bg-neutral-50 hover:bg-neutral-700',
    'hover:text-white',
    'stroke-neutral-200 fill-neutral-200 hover:stroke-neutral-500 hover:fill-neutral-500'
  )}
>
  <div class="p-8 absolute z-10">
    <slot />
  </div>
  <FontAwesome iconName="fa-arrow-right" className="absolute bottom-8 left-8" />
  <div
    class={cx(
      'h-40 translate-x-16 md:translate-x-24',
      'overflow-hidden',
      'flex justify-center items-center'
    )}
  >
    <Europe
      classes="w-full -mt-24"
      poland="stroke-neutral-300 fill-neutral-300"
      marker="fill-white"
    />
  </div>
</section>
