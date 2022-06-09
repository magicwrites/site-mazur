<!-- <template>
  <section>
    <div
      class="sm-maciej sm-business min-h-screen flex flex-col sm:px-16 md:p-4 lg:px-24 md:mx-auto xl:max-w-none 2xl:px-48"
    >
      <header class="flex p-4">
        <sm-language class="ml-auto" :language="'pl'"></sm-language>
      </header>

      <section class="flex flex-col flex-grow">
        <header
          class="px-4 py-16 mb-6 sm:py-8 md:py-20 md:pt-12 xl:py-4 2xl:py-16 flex flex-col"
        >
          <sm-title class="mx-auto xl:ml-0" subtitle="Software developer"
            >Maciej <nuxt-link to="/">Mazur</nuxt-link></sm-title
          >
        </header>

        <main class="px-4 xl:w-1/2">
          <content-maciej-about></content-maciej-about>
        </main>

        <footer class="mt-auto p-4 pt-24 xl:pt-4 xl:pb-48 font-work">
          <div class="text-sm text-gray-400">Reach me:</div>
          <div class="font-work">maciej@mazur.site</div>
          <div class="text-sm text-gray-400 mt-4">Also sometimes at:</div>
          <div class="font-work">linkedin</div>
        </footer>
      </section>
    </div>

    <div
      style="min-height: 200vh"
      class="flex flex-col sm:px-16 md:p-4 lg:px-24 md:mx-auto xl:max-w-none 2xl:px-48"
    >
      <section class="py-48 mx-4">
        <div
          class="text-4xl font-light font-work pb-8"
          style="margin-left: -1.5px"
        >
          Skillset
        </div>
        <div class="grid grid-cols-10 gap-10">
          <div class="col-span-5">
            <content-maciej-skillset-engineering></content-maciej-skillset-engineering>
          </div>
          <div class="col-span-3">
            <content-maciej-skillset-management></content-maciej-skillset-management>
          </div>
          <div class="col-span-2">
            <content-maciej-skillset-design></content-maciej-skillset-design>
          </div>
        </div>
      </section>

      <section class="grid grid-cols-3 gap-10 py-24">
        <section class="mx-4">
          <div
            class="text-4xl font-light font-work pb-8"
            style="margin-left: -1.5px"
          >
            Experience
          </div>
        </section>

        <section class="mx-4 col-span-2">
          <content-maciej-experience-timeline></content-maciej-experience-timeline>
        </section>
      </section>

      <footer
        class="flex items-center p-4 pt-32 sm:pt-16 xl:pt-8 mt-auto justify-between xl:justify-start"
      >
        <sm-logo class="w-7"></sm-logo>
        <sm-copyrights class="pl-3"></sm-copyrights>
      </footer>
    </div>
  </section>
</template>

<script>
import SmLogo from '~/components/logo'
import SmLanguage from '~/components/language'
// import SmLink from '~/components/link'
import SmTitle from '~/components/title'
import SmCopyrights from '~/components/copyrights'

export default {
  name: 'SmIndex',
  components: {
    SmLogo,
    SmCopyrights,
    SmLanguage,
    // SmLink,
    SmTitle,
  },
  computed: {
    texts: function () {
      return this.$store.state.settings.language === 'pl'
        ? {
            headers: {
              about: 'O nas',
              services: 'Nasze usługi',
            },
            maciej: {
              name: 'Maciej',
              skills: ['oprogramowanie', 'projektowanie'],
            },
            marcelina: {
              name: 'Marcelina',
              skills: ['księgowość', 'muzyka liturgiczna'],
            },
            helena: {
              name: 'Helena',
              skills: ['psoty', 'poszukiwanie uwagi'],
            },
            mateusz: {
              name: 'Mateusz',
              skills: ['chichot', 'zabawki'],
            },
            applications: {
              name: 'Aplikacje internetowe',
              features: ['oprogramowanie', 'front-end'],
            },
            accounting: {
              name: 'Księgowość indywidualna',
              features: ['działalność gospodarcza', 'mikrofirmy'],
            },
            invoices: {
              name: 'Eleganckie faktury',
              features: ['cyfrowa obsługa dokumentów'],
            },
          }
        : {
            headers: {
              about: 'About us',
              services: 'Our services',
            },
            maciej: {
              name: 'Maciej',
              skills: ['software development', 'design'],
            },
            marcelina: {
              name: 'Marcelina',
              skills: ['accounting', 'liturgical music'],
            },
            helena: {
              name: 'Helena',
              skills: ['mischief', 'attention seeking'],
            },
            mateusz: {
              name: 'Mateusz',
              skills: ['chuckle', 'toys'],
            },
            applications: {
              name: 'Web applications',
              features: ['software development', 'front-end'],
            },
            accounting: {
              name: 'Small business accounting',
              features: ['personal accounting', 'small companies'],
            },
            invoices: {
              name: 'Elegant invoices',
              features: ['digital document services'],
            },
          }
    },
  },
}
</script>

<style>
body *::selection {
  color: white;
  background: #444;
  font-family: 'Nunito';
}

.font-nunito {
  font-family: 'Nunito';
}

.font-montserrat {
  font-family: 'Montserrat';
}

.font-baloo {
  font-family: 'Baloo Thambi 2';
}

.font-work {
  font-family: 'Work Sans';
}

.font-dosis {
  font-family: 'Dosis';
}

.font-varela {
  font-family: 'Varela Round';
}

.grayscale {
  filter: grayscale(1);
}

@media (min-width: 1280px) {
  .sm-maciej {
    background-image: url('~/static/maciej.png');
    background-repeat: no-repeat;
    background-position: right 30%;
    background-size: 50%;
  }

  .sm-business {
    background-image: url('~/static/maciej-business-contrast.png');
    background-size: 46%;
  }
}

@media (min-width: 1920px) {
  .sm-maciej {
    background-position: right 30%;
  }

  .sm-business {
    background-position: right bottom;
  }
}
</style> -->
