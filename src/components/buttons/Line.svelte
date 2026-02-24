<script lang="ts">
  export let reversed = false;
</script>

<div
  class="lg:border-l-4 hover:lg:border-l-8 lg:border-neutral-700 transition-all lg:p-2 lg:px-5 pr-0 font-inter text-lg"
>
  {#if reversed}
    <div class="text-sm whitespace-nowrap">
      <slot name="about" />
    </div>
    <div class="font-light underline underline-offset-4 lg:no-underline">
      <slot name="title" />
    </div>
  {:else}
    <div class="font-light underline underline-offset-4 lg:no-underline">
      <slot name="title" />
    </div>
    <div class="text-sm whitespace-nowrap">
      <slot name="about" />
    </div>
  {/if}
</div>
