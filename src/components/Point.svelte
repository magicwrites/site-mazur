<script>
  import FontAwesome from './FontAwesome.svelte';

  export let first = false;
</script>

<div class="flex flex-col sm:flex-row print:flex-row items-center sm:items-start">
  <div class="py-2 sm:py-0 print:py-0 sm:mr-4 print:mr-8">
    <div class={first ? 'hidden sm:block print:block' : ''}>
      <div class="sm:hidden py-2">
        <FontAwesome iconName="fa-circle" className="text-xs" />
      </div>
      <div class="hidden sm:block">
        <FontAwesome
          iconName="fa-circle"
          className="text-sm rotate-90 sm:rotate-0 print:rotate-0"
        />
      </div>
    </div>
  </div>
  <div class="w-full"><slot /></div>
</div>
