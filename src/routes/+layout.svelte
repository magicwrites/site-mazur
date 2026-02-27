<script>
  import { browser } from '$app/environment';
  import '../app.css';
  import '../fonts.css';

  if (browser) {
    console.info(`Hello inquisitive human being!

If you would like to know more about my code then visit https://github.com/magicwrites/site-mazur
The repository is open, so you should be able to check how I have cooked this thing up.`);
  }
</script>

<svelte:head>
  <meta property="og:image" content="https://mazur.site/favicon-512.png" />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:image" content="https://mazur.site/favicon-512.png" />
</svelte:head>

<slot />
