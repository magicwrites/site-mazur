<script lang="ts">
  import { library, icon, type IconDefinition } from '@fortawesome/fontawesome-svg-core';
  import {
    faLanguage,
    faArrowUpRightFromSquare,
    faArrowRight,
    faClone,
    faCircleCheck,
    faCircle,
    faPhone
  } from '@fortawesome/free-solid-svg-icons';
  import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
  import { faLinkedinIn, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

  library.add(
    faLanguage,
    faArrowUpRightFromSquare,
    faArrowRight,
    faCircle,
    faClone,
    faCircleCheck, // @ts-expect-error: this works fine
    faEnvelope,
    faPhone,
    faWhatsapp,
    faFacebook,
    faLinkedinIn
  );

  export let iconName;
  export let className = '';

  const iconMap = {
    'fa-language': faLanguage,
    'fa-arrow-up-right-from-square': faArrowUpRightFromSquare,
    'fa-arrow-right': faArrowRight,
    'fa-circle': faCircle,
    'fa-copy': faClone,
    'fa-check': faCircleCheck,
    'fa-envelope': faEnvelope,
    'fa-linkedin': faLinkedinIn,
    'fa-phone': faPhone,
    'fa-whatsapp': faWhatsapp,
    'fa-facebook': faFacebook
  };

  $: faIcon = iconMap[iconName as keyof typeof iconMap] as IconDefinition;
  $: iconHtml = faIcon ? icon(faIcon).html[0] : '';
  $: iconClass = `fa-${iconName.replace('fa-', '')}`;
</script>

{#if iconHtml}
  <span class="text-center {className} fa fas {iconClass}">
    {@html iconHtml}
  </span>
{/if}
