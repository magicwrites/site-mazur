<script>
  import cx from 'classnames';
  import FontAwesome from './FontAwesome.svelte';

  export let name = 'fas fa-arrow-right';
  export let reactive = false;
  export let active = false;

  const text = 'text-neutral-700';
  const background = 'bg-white';

  const activeText = 'text-white';
  const activeBackground = 'bg-neutral-700';

  const reactiveClasses = 'hover:bg-neutral-700 hover:text-white';
</script>

<div
  class={cx(
    'flex items-center justify-center',
    'w-12 h-12',
    'rounded-full',
    'transition',
    active ? `${activeBackground} ${activeText}` : `${background} ${text}`,
    {
      [reactiveClasses]: reactive && !active
    }
  )}
>
  <FontAwesome iconName={name} />
</div>
