<script>
  import cx from 'classnames';
  import { isPolish, isEnglish, toggle } from '../stores/language';
</script>

<section class="flex gap-2 text-xs xl:text-sm items-center text-neutral-400 font-work">
  <div
    class={cx(
      'hover:text-neutral-700 cursor-pointer transition',
      $isPolish ? 'text-neutral-700' : 'text-neutral-400'
    )}
    on:click={() => ($isPolish ? () => {} : toggle())}
  >
    <div class="hidden sm:block">polski</div>
    <div class="sm:hidden">PL</div>
  </div>
  <i class="fas fa-language text-neutral-700" />
  <div
    class={cx(
      'hover:text-neutral-700 cursor-pointer transition',
      $isEnglish ? 'text-neutral-700' : 'text-neutral-400'
    )}
    on:click={() => ($isEnglish ? () => {} : toggle())}
  >
    <div class="hidden sm:block">english</div>
    <div class="sm:hidden">EN</div>
  </div>
</section>
