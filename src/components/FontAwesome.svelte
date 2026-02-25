<script lang="ts">
  import { library, icon } from '@fortawesome/fontawesome-svg-core';
  import {
    faLanguage,
    faArrowUpRightFromSquare,
    faArrowRight,
    faCircle,
    faPhone
  } from '@fortawesome/free-solid-svg-icons';
  import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
  import { faLinkedinIn, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

  // Add icons to library
  library.add(
    faLanguage,
    faArrowUpRightFromSquare,
    faArrowRight,
    faCircle,
    faEnvelope,
    faPhone,
    faWhatsapp,
    faFacebook,
    faLinkedinIn
  );

  export let iconName;
  export let className = '';

  // Map icon names to FontAwesome icons
  const iconMap = {
    'fa-language': faLanguage,
    'fa-arrow-up-right-from-square': faArrowUpRightFromSquare,
    'fa-arrow-right': faArrowRight,
    'fa-circle': faCircle,
    'fa-envelope': faEnvelope,
    'fa-linkedin': faLinkedinIn,
    'fa-phone': faPhone,
    'fa-whatsapp': faWhatsapp,
    'fa-facebook': faFacebook
  };

  $: faIcon = iconMap[iconName as keyof typeof iconMap];
  $: iconHtml = faIcon ? icon(faIcon).html[0] : '';
  $: iconClass = `fa-${iconName.replace('fa-', '')}`;
</script>

{#if iconHtml}
  <span class="text-center {className} fa fas {iconClass}">
    {@html iconHtml}
  </span>
{/if}
