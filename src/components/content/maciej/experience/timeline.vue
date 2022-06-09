<template>
  <div>
    <section class="grid gap-5">
      <shared-employer
        :name="texts.employers.casumo.name"
        :roles="texts.employers.casumo.roles"
        :icon-url="texts.employers.casumo.iconUrl"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </shared-employer>
      <shared-employer
        :name="texts.employers.fp.name"
        :roles="texts.employers.fp.roles"
        :icon-url="texts.employers.fp.iconUrl"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </shared-employer>
      <shared-employer
        :name="texts.employers.goodpoint.name"
        :roles="texts.employers.goodpoint.roles"
        :icon="texts.employers.goodpoint.icon"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </shared-employer>
      <div class="text-center text-gray-700" style="width: 100px">
        <i class="text-2xl fas fa-person-circle-question"></i>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SmContentMaciejExperienceTimeline',
  computed: {
    texts: function () {
      return {
        employers: {
          casumo: {
            name: 'Casumo',
            iconUrl: 'logo-casumo.webp',
            roles: [
              {
                from: '2022',
                to: null,
                name: 'Front-end chapter lead',
              },
              {
                from: '2018',
                to: '2022',
                name: 'Senior Software developer',
              },
            ],
          },
          fp: {
            name: 'Future-Processing',
            iconUrl: 'logo-fp.jpg',
            roles: [
              {
                from: '2016',
                to: '2018',
                name: 'Senior Software developer',
              },
              {
                from: '2011',
                to: '2016',
                name: 'Software developer',
              },
            ],
          },
          goodpoint: {
            name: 'Goodpoint',
            icon: 'sun',
            roles: [
              {
                from: '2010',
                to: '2011',
                name: 'Software developer',
              },
            ],
          },
        },
      }
      // return this.$store.getters['settings/isPolish']
      //   ? {
      //       headers: {
      //         about: 'O nas',
      //         services: 'Nasze usługi',
      //       },
      //     }
      //   : {
      //       headers: {
      //         about: 'About us',
      //         services: 'Our services',
      //       },
      //     }
    },
  },
}
</script>
