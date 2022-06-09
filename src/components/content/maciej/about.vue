<template>
  <section class="font-work text-lg text-gray-400">
    <div>
      I
      <a
        href="http://cleancoder.com"
        target="_blank"
        class="border-b border-transparent hover:border-gray-400 transition"
        >build</a
      >
      web applications that are a pleasure to use. I do so individually, as a
      part of informal startup team or in enterprise environments that operate
      at scale.
    </div>
    <div class="mt-8">
      I am a software developer that understands how
      <a
        href="https://gettingthingsdone.com"
        target="_blank"
        class="border-b border-transparent hover:border-gray-400 transition"
        >things are made</a
      >
      and loves what he does. I can fill any role in your delivery process but I
      excel at front-end&nbsp;/&nbsp;JS development. Please
      <a
        href="/maciej"
        class="text-gray-700 border-b border-transparent hover:border-black transition"
        >review my detailed skillset and experience</a
      >
      if you want to make sure that I am a good match for your next endeavour.
    </div>
  </section>
</template>

<script>
export default {
  name: 'SmContentMaciejAbout',
  computed: {
    texts: function () {
      return this.$store.getters['settings/isPolish']
        ? {
            headers: {
              about: 'O nas',
              services: 'Nasze usługi',
            },
          }
        : {
            headers: {
              about: 'About us',
              services: 'Our services',
            },
          }
    },
  },
}
</script>
