<script lang="ts">
  export let tag: string = 'h4';
  export let about: string;
</script>

<header class="font-inter flex flex-col gap-1.5">
  <svelte:element this={tag} class="leading-none font-bold"><slot /></svelte:element>
  <div class="leading-none text-xs">{about}</div>
</header>
