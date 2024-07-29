<script>
  import Sheet from '$components/shared/Sheet.svelte';
  import Document from './Document.svelte';
</script>

<svelte:head>
  <title>Maciej Mazur - CV</title>
  <meta name="description" content="Maciej Mazur - curriculum vitae" />
</svelte:head>

<section class="m-8 print:m-0 font-work">
  <Sheet>
    <Document />
  </Sheet>
</section>
