<script>
  export let first = false;
</script>

<div class="flex flex-col sm:flex-row print:flex-row items-center sm:items-start">
  <div class="py-2 sm:py-0 print:py-0 sm:mr-4 print:mr-8">
    <div class={first ? 'hidden sm:block print:block' : ''}>
      <div class="sm:hidden py-2">
        <div class="w-20 my-6 border-t border-dashed border-neutral-600" />
      </div>
      <div class="hidden sm:block">
        <div class="w-1.5 h-1.5 mt-3 bg-neutral-600 rounded-full" />
      </div>
    </div>
  </div>
  <div class="w-full"><slot /></div>
</div>
