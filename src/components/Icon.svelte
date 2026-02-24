<script>
  import FontAwesome from './FontAwesome.svelte';

  export let name = 'fas fa-arrow-right';
  export let reactive = false;
  export let active = false;
  export let light = false;

  let text = light ? 'text-neutral-700' : 'text-neutral-400';
  let background = light ? 'bg-white' : 'bg-white';
</script>

<div
  class="flex items-center justify-center w-12 h-12 rounded-full transition {active
    ? 'bg-gray-700 text-white'
    : `${background} ${text}`} {reactive ? 'hover:bg-gray-700 hover:text-white' : ''}"
>
  <FontAwesome iconName={name} className="text-neutral-700" />
</div>
