<script>
	import Language from '../components/shared/language.svelte';
</script>

<div
	class="sm-root min-h-screen flex flex-col sm:px-16 md:p-4 lg:px-24 md:mx-auto xl:max-w-none 2xl:px-48"
>
	<header class="flex p-4">
		<Language class="ml-auto" language={'pl'} />
		<!-- <sm-language class="ml-auto" :language="'pl'"></sm-language> -->
	</header>

	<!-- <section class="flex flex-col">
      <header
        class="px-4 py-16 mb-6 sm:py-8 md:py-20 md:pt-12 xl:py-4 2xl:py-16 flex flex-col"
      >
        <sm-title class="mx-auto xl:ml-0">mazur</sm-title>
      </header>

      <div class="xl:my-8 xl:grid xl:grid-cols-3 2xl:grid-cols-4">
        <div
          class="p-4 pb-2 sm:pt-8 text-gray-400 hidden xl:block xl:pt-0 xl:col-span-2 xl:order-0 font-varela 2xl:col-span-3"
        >
          {{ texts.headers.about }}
        </div>

        <main
          class="grid gap-y-1 xl:grid-cols-1 xl:gap-y-1 md:grid-cols-2 md:gap-x-4 md:gap-y-8 xl:order-2 2xl:col-start-1"
        >
          <sm-link :items="texts.marcelina.skills" icon="fa-person-dress">{{
            texts.marcelina.name
          }}</sm-link>
          <nuxt-link to="/maciej"
            ><sm-link :items="texts.maciej.skills" icon="fa-person">{{
              texts.maciej.name
            }}</sm-link></nuxt-link
          >
          <div class="h-5 2xl:h-10 md:hidden xl:block"></div>
          <sm-link :items="texts.helena.skills" icon="fa-child-reaching">{{
            texts.helena.name
          }}</sm-link>
          <sm-link :items="texts.mateusz.skills" icon="fa-baby">{{
            texts.mateusz.name
          }}</sm-link>
        </main>

        <header
          class="p-4 pt-16 md:pt-14 xl:pt-0 flex items-center xl:order-1 2xl:col-start-4"
        >
          <div class="sm:pt-8 xl:pt-0 font-varela text-gray-400">
            {{ texts.headers.services }}
          </div>
        </header>

        <aside
          class="grid gap-y-1 xl:grid-cols-1 xl:gap-y-1 xl:col-start-3 2xl:col-start-4 xl:mb-auto xl:items-start md:grid-cols-2 md:gap-x-4 md:gap-y-8 xl:order-3 2xl:order-5"
        >
          <sm-link :items="texts.applications.features">{{
            texts.applications.name
          }}</sm-link>
          <sm-link :items="texts.accounting.features">{{
            texts.accounting.name
          }}</sm-link>
          <div class="h-5 2xl:h-10 md:hidden xl:block"></div>
          <a href="https://eleganckiefaktury.pl" target="_blank">
            <sm-link :items="texts.invoices.features">{{
              texts.invoices.name
            }}</sm-link></a
          >
        </aside>
      </div>
    </section>

    <footer
      class="flex items-center p-4 pt-32 sm:pt-16 xl:pt-8 mt-auto justify-between xl:justify-start"
    >
      <sm-logo class="w-7"></sm-logo>
      <sm-copyrights class="pl-3"></sm-copyrights>
    </footer> -->
</div>
