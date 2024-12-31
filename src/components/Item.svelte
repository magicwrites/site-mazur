<script>
  export let accent = null;
  export let icon = `fas fa-circle ${accent ? `text-${accent}` : ''}`;
  export let size = 'text-xs';
</script>

<div class="{size} flex gap-3 items-start">
  <div class="flex items-center justify-center w-3 mt-0.5">
    <i class={icon} />
  </div>
  <span><slot /></span>
</div>
