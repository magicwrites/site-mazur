<template>
  <div class="text-gray-300 xl:text-gray-700 text-sm flex items-center">
    <span>{{
      isPolish ? 'wszystkie prawa zastrzeżone' : 'all rights reserved'
    }}</span>
    <i class="px-2 far fa-copyright"></i>
    <span>{{ year }}</span>
  </div>
</template>

<script>
export default {
  name: 'SmCopyrights',
  computed: {
    year: function () {
      return new Date().getFullYear()
    },
    isPolish: function () {
      return this.$store.getters['settings/isPolish']
    },
  },
}
</script>
