<script>
  import cx from 'classnames';
  import { noop } from 'svelte/internal';
  import { isPolish, isEnglish, toggle } from '../stores/language';
  import FontAwesome from './FontAwesome.svelte';

  export let contrast = false;
</script>

<section
  class={cx(
    'xl:hidden font-inter text-right flex flex-col gap-1.5',
    contrast ? 'text-neutral-300' : 'text-black'
  )}
  on:click={() => toggle()}
>
  <div class="leading-none text-[10px]">{$isPolish ? 'switch to' : 'przęłącz na'}</div>
  <div class="leading-none text-base font-medium">{$isPolish ? 'EN' : 'PL'}</div>
</section>

<section class="hidden xl:flex gap-2 text-xs xl:text-sm items-center text-neutral-400 font-work">
  <div
    class={cx(
      'hover:text-neutral-700 cursor-pointer transition',
      $isPolish ? 'text-neutral-700' : 'text-neutral-400'
    )}
    on:click={() => ($isPolish ? noop() : toggle())}
  >
    <div class="hidden sm:block">polski</div>
    <div class="sm:hidden">PL</div>
  </div>

  <FontAwesome iconName="fa-language" className="text-neutral-700" />

  <div
    class={cx(
      'hover:text-neutral-700 cursor-pointer transition',
      $isEnglish ? 'text-neutral-700' : 'text-neutral-400'
    )}
    on:click={() => ($isEnglish ? noop() : toggle())}
  >
    <div class="hidden sm:block">english</div>
    <div class="sm:hidden">EN</div>
  </div>
</section>
