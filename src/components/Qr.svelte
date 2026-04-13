<script>
  import { onMount } from 'svelte';
  import { toDataURL } from 'qrcode';

  export let url = 'https://maciej.mazur.site';

  let qrCodeDataUrl = '';

  onMount(async () => {
    qrCodeDataUrl = await toDataURL(url, {
      width: 128,
      margin: 0
    });
  });
</script>

{#if qrCodeDataUrl}
  <img src={qrCodeDataUrl} alt="QR code a website" />
{/if}
