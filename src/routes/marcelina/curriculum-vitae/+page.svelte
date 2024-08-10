<script>
  import Sheet from '$components/Sheet.svelte';
  import Page from './Document.svelte';
</script>

<svelte:head>
  <title>Marcelina Mazur - CV</title>
  <meta name="description" content="Marcelina Mazur - curriculum vitae" />
</svelte:head>

<section class="m-8 print:m-0 font-work">
  <Sheet>
    <Page />
  </Sheet>
</section>
