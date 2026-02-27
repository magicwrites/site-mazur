<script lang="ts">
  export let tag = '';
  export let about = '';
</script>

<header class="font-inter flex flex-col gap-1.5">
  {#if tag}
    <svelte:element this={tag} class="font-bold"><slot /></svelte:element>
  {/if}
  {#if about}
    <div class="text-xs -mt-1">{@html about}</div>
  {/if}
</header>
