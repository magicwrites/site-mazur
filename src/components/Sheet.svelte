<script>
  import cx from 'classnames';

  export let header = '';
  export let footer = '';
</script>

<div class="mx-auto sheet">
  <div class="print:relative print:top-0 print:left-0 print:right-0 print:bottom-0">
    <div class="print:p-12 print:pb-0 print:h-screen">
      <div class="h-full relative">
        {#if header}
          <aside class="opacity-30 absolute right-0 -top-12">
            {header}
          </aside>
        {/if}

        <slot />

        {#if footer}
          <footer
            class={cx(
              'opacity-30',
              'py-8 print:py-0',
              'print:absolute print:right-0 print:bottom-2',
              'text-right'
            )}
          >
            {footer}
          </footer>
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  @media not print {
    .sheet {
      max-width: 600px;
    }
  }
</style>
