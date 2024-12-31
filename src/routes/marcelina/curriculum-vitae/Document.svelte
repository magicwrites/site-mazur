<script>
  import Header from './Document.Header.svelte';
  import Experience1 from './Document.Experience.1.svelte';
  import Experience2 from './Document.Experience.2.svelte';
  import Education from './Document.Education.svelte';
  import More from './Document.More.svelte';
</script>

<section class="font-work print-page flex flex-col justify-between">
  <main>
    <div class="p-8">
      <Header />
    </div>
    <div class="p-8">
      <Experience1 />
    </div>
  </main>

  <footer class="p-8 text-xs text-gray-200">
    Wyrażam zgodę na przetwarzanie danych osobowych zawartych w moich dokumentach aplikacyjnych na
    potrzeby przyszłych rekrutacji. Przyjmuję do wiadomości, że zgodę mogę wycofać w dowolnym
    momencie, bez wpływu na zgodność z prawem przetwarzania przed wycofaniem zgody.
  </footer>
</section>

<section class="font-work print-page flex flex-col justify-between">
  <main>
    <div class="p-8">
      <Experience2 />
    </div>
    <div class="p-8">
      <Education />
    </div>
  </main>

  <footer class="p-8 text-xs text-gray-200">
    Wyrażam zgodę na przetwarzanie danych osobowych zawartych w moich dokumentach aplikacyjnych na
    potrzeby przyszłych rekrutacji. Przyjmuję do wiadomości, że zgodę mogę wycofać w dowolnym
    momencie, bez wpływu na zgodność z prawem przetwarzania przed wycofaniem zgody.
  </footer>
</section>

<section class="font-work print-page flex flex-col justify-between">
  <main>
    <div class="p-8">
      <More />
    </div>
  </main>

  <footer class="p-8 text-xs text-gray-200">
    Wyrażam zgodę na przetwarzanie danych osobowych zawartych w moich dokumentach aplikacyjnych na
    potrzeby przyszłych rekrutacji. Przyjmuję do wiadomości, że zgodę mogę wycofać w dowolnym
    momencie, bez wpływu na zgodność z prawem przetwarzania przed wycofaniem zgody.
  </footer>
</section>

<style>
  @media print {
    .print-page {
      height: 100vh;
      page-break-after: always;
    }
  }
</style>
